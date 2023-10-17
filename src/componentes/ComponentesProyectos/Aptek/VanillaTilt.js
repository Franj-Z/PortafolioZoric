class VanillaTilt {
    constructor(e, i={}) {
      if (!(e instanceof Node))
        throw new Error("Can't initialize VanillaTilt because " + e + " is not a Node.");
  
      this.width = null;
      this.height = null;
      this.clientWidth = null;
      this.clientHeight = null;
      this.left = null;
      this.top = null;
      this.gammazero = null;
      this.betazero = null;
      this.lastgammazero = null;
      this.lastbetazero = null;
      this.transitionTimeout = null;
      this.updateCall = null;
      this.event = null;
  
      this.updateBind = this.update.bind(this);
      this.resetBind = this.reset.bind(this);
  
      this.element = e;
      this.settings = this.extendSettings(i);
      this.reverse = this.settings.reverse ? -1 : 1;
      this.resetToStart = VanillaTilt.isSettingTrue(this.settings["reset-to-start"]);
      this.glare = VanillaTilt.isSettingTrue(this.settings.glare);
      this.glarePrerender = VanillaTilt.isSettingTrue(this.settings["glare-prerender"]);
      this.fullPageListening = VanillaTilt.isSettingTrue(this.settings["full-page-listening"]);
      this.gyroscope = VanillaTilt.isSettingTrue(this.settings.gyroscope);
      this.gyroscopeSamples = this.settings.gyroscopeSamples;
      this.elementListener = this.getElementListener();
  
      this.glare && this.prepareGlare();
      this.fullPageListening && this.updateClientSize();
      this.addEventListeners();
  
      this.reset();
  
      if (!this.resetToStart) {
        this.settings.startX = 0;
        this.settings.startY = 0;
      }
    }
  
    static isSettingTrue(t) {
      return "" === t || t === true || t === 1;
    }
  
    getElementListener() {
      if (this.fullPageListening) {
        return window.document;
      }
  
      if (typeof this.settings["mouse-event-element"] === "string") {
        const el = document.querySelector(this.settings["mouse-event-element"]);
        if (el) return el;
      }
  
      return this.settings["mouse-event-element"] instanceof Node ? this.settings["mouse-event-element"] : this.element;
    }
  
    addEventListeners() {
      this.onMouseEnterBind = this.onMouseEnter.bind(this);
      this.onMouseMoveBind = this.onMouseMove.bind(this);
      this.onMouseLeaveBind = this.onMouseLeave.bind(this);
      this.onWindowResizeBind = this.onWindowResize.bind(this);
      this.onDeviceOrientationBind = this.onDeviceOrientation.bind(this);
  
      this.elementListener.addEventListener("mouseenter", this.onMouseEnterBind);
      this.elementListener.addEventListener("mouseleave", this.onMouseLeaveBind);
      this.elementListener.addEventListener("mousemove", this.onMouseMoveBind);
  
      if (this.glare || this.fullPageListening) {
        window.addEventListener("resize", this.onWindowResizeBind);
      }
  
      if (this.gyroscope) {
        window.addEventListener("deviceorientation", this.onDeviceOrientationBind);
      }
    }
  
    removeEventListeners() {
      this.elementListener.removeEventListener("mouseenter", this.onMouseEnterBind);
      this.elementListener.removeEventListener("mouseleave", this.onMouseLeaveBind);
      this.elementListener.removeEventListener("mousemove", this.onMouseMoveBind);
  
      if (this.gyroscope) {
        window.removeEventListener("deviceorientation", this.onDeviceOrientationBind);
      }
  
      if (this.glare || this.fullPageListening) {
        window.removeEventListener("resize", this.onWindowResizeBind);
      }
    }
  
    destroy() {
      clearTimeout(this.transitionTimeout);
      cancelAnimationFrame(this.updateCall);
      this.reset();
      this.removeEventListeners();
      this.element.vanillaTilt = null;
      delete this.element.vanillaTilt;
      this.element = null;
    }
  
    onDeviceOrientation(event) {
      if (event.gamma === null || event.beta === null) return;
      
      this.updateElementPosition();
      
      if (this.gyroscopeSamples > 0) {
        this.lastgammazero = this.gammazero;
        this.lastbetazero = this.betazero;
        
        if (this.gammazero === null) {
          this.gammazero = event.gamma;
          this.betazero = event.beta;
        } else {
          this.gammazero = (event.gamma + this.lastgammazero) / 2;
          this.betazero = (event.beta + this.lastbetazero) / 2;
        }
  
        this.gyroscopeSamples -= 1;
      }
  
      const xAngle = (event.gamma - (this.settings.gyroscopeMinAngleX + this.gammazero)) / (this.settings.gyroscopeMaxAngleX - this.settings.gyroscopeMinAngleX);
      const yAngle = (event.beta - (this.settings.gyroscopeMinAngleY + this.betazero)) / (this.settings.gyroscopeMaxAngleY - this.settings.gyroscopeMinAngleY);
  
      const tiltX = (this.reverse * (this.settings.max - Math.min(Math.max(xAngle, 0), 1) * this.settings.max * 2)).toFixed(2);
      const tiltY = (this.reverse * (Math.min(Math.max(yAngle, 0), 1) * this.settings.max * 2 - this.settings.max)).toFixed(2);
  
      if (this.updateCall !== null) {
        cancelAnimationFrame(this.updateCall);
      }
  
      this.event = {
        clientX: tiltX + this.left,
        clientY: tiltY + this.top
      };
  
      this.updateCall = requestAnimationFrame(this.updateBind);
    }
  
    onMouseEnter() {
      this.updateElementPosition();
      this.element.style.willChange = "transform";
      this.setTransition();
    }
  
    onMouseMove(event) {
      if (this.updateCall !== null) {
        cancelAnimationFrame(this.updateCall);
      }
  
      this.event = event;
      this.updateCall = requestAnimationFrame(this.updateBind);
    }
  
    onMouseLeave() {
      this.setTransition();
      if (this.settings.reset) {
        requestAnimationFrame(this.resetBind);
      }
    }
  
    reset() {
      this.onMouseEnter();
  
      if (this.fullPageListening) {
        this.event = {
          clientX: (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.clientWidth,
          clientY: (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.clientHeight
        };
      } else {
        this.event = {
          clientX: this.left + (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.width,
          clientY: this.top + (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.height
        };
      }
  
      const scale = this.settings.scale;
      this.settings.scale = 1;
  
      this.update();
      
      this.settings.scale = scale;
      this.resetGlare();
    }
  
    resetGlare() {
      if (this.glare) {
        this.glareElement.style.transform = "rotate(180deg) translate(-50%, -50%)";
        this.glareElement.style.opacity = "0";
      }
    }
  
    getValues() {
      let posX, posY;
  
      if (this.fullPageListening) {
        posX = this.event.clientX / this.clientWidth;
        posY = this.event.clientY / this.clientHeight;
      } else {
        posX = (this.event.clientX - this.left) / this.width;
        posY = (this.event.clientY - this.top) / this.height;
      }
  
      posX = Math.min(Math.max(posX, 0), 1);
      posY = Math.min(Math.max(posY, 0), 1);
  
      const tiltX = (this.reverse * (this.settings.max - posX * this.settings.max * 2)).toFixed(2);
      const tiltY = (this.reverse * (posY * this.settings.max * 2 - this.settings.max)).toFixed(2);
      const percentageX = posX * 100;
      const percentageY = posY * 100;
      const angle = Math.atan2(this.event.clientX - (this.left + this.width / 2), -(this.event.clientY - (this.top + this.height / 2))) * (180 / Math.PI);
  
      return {
        tiltX,
        tiltY,
        percentageX,
        percentageY,
        angle
      };
    }
  
    updateElementPosition() {
      const rect = this.element.getBoundingClientRect();
      this.width = this.element.offsetWidth;
      this.height = this.element.offsetHeight;
      this.left = rect.left;
      this.top = rect.top;
    }
  
    update() {
      const values = this.getValues();
  
      this.element.style.transform = `perspective(${this.settings.perspective}px) rotateX(${this.settings.axis === "x" ? 0 : values.tiltY}deg) rotateY(${this.settings.axis === "y" ? 0 : values.tiltX}deg) scale3d(${this.settings.scale}, ${this.settings.scale}, ${this.settings.scale})`;
  
      if (this.glare) {
        this.glareElement.style.transform = `rotate(${values.angle}deg) translate(-50%, -50%)`;
        this.glareElement.style.opacity = `${values.percentageY * this.settings["max-glare"] / 100}`;
      }
  
      this.element.dispatchEvent(new CustomEvent("tiltChange", {
        detail: values
      }));
  
      this.updateCall = null;
    }
  
    prepareGlare() {
      if (!this.glarePrerender) {
        const glareElement = document.createElement("div");
        glareElement.classList.add("js-tilt-glare");
        const glareInnerElement = document.createElement("div");
        glareInnerElement.classList.add("js-tilt-glare-inner");
        glareElement.appendChild(glareInnerElement);
        this.element.appendChild(glareElement);
      }
  
      this.glareElementWrapper = this.element.querySelector(".js-tilt-glare");
      this.glareElement = this.element.querySelector(".js-tilt-glare-inner");
  
      if (!this.glarePrerender) {
        Object.assign(this.glareElementWrapper.style, {
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          "pointer-events": "none",
          "border-radius": "inherit"
        });
  
        Object.assign(this.glareElement.style, {
          position: "absolute",
          top: "50%",
          left: "50%",
          "pointer-events": "none",
          "background-image": "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
          transform: "rotate(180deg) translate(-50%, -50%)",
          "transform-origin": "0% 0%",
          opacity: "0"
        });
  
        this.updateGlareSize();
      }
    }
  
    updateGlareSize() {
      if (this.glare) {
        const size = 2 * (this.element.offsetWidth > this.element.offsetHeight ? this.element.offsetWidth : this.element.offsetHeight);
        Object.assign(this.glareElement.style, {
          width: `${size}px`,
          height: `${size}px`
        });
      }
    }
  
    updateClientSize() {
      this.clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      this.clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    }
  
    onWindowResize() {
      this.updateGlareSize();
      this.updateClientSize();
    }
  
    setTransition() {
      clearTimeout(this.transitionTimeout);
      this.element.style.transition = this.settings.speed + "ms " + this.settings.easing;
  
      if (this.glare) {
        this.glareElement.style.transition = `opacity ${this.settings.speed}ms ${this.settings.easing}`;
      }
  
      this.transitionTimeout = setTimeout(() => {
        this.element.style.transition = "";
        if (this.glare) {
          this.glareElement.style.transition = "";
        }
      }, this.settings.speed);
    }
  
    extendSettings(settings) {
      const defaultSettings = {
        reverse: false,
        max: 15,
        startX: 0,
        startY: 0,
        perspective: 1000,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        scale: 1,
        speed: 300,
        transition: true,
        axis: null,
        glare: false,
        "max-glare": 1,
        "glare-prerender": false,
        "full-page-listening": false,
        "mouse-event-element": null,
        reset: true,
        "reset-to-start": true,
        gyroscope: false,
        gyroscopeMinAngleX: -45,
        gyroscopeMaxAngleX: 45,
        gyroscopeMinAngleY: -45,
        gyroscopeMaxAngleY: 45,
        gyroscopeSamples: 10
      };
  
      const newSettings = {};
  
      for (let key in defaultSettings) {
        if (key in settings) {
          newSettings[key] = settings[key];
        } else if (this.element.hasAttribute("data-tilt-" + key)) {
          let attributeValue = this.element.getAttribute("data-tilt-" + key);
          try {
            newSettings[key] = JSON.parse(attributeValue);
          } catch (error) {
            newSettings[key] = attributeValue;
          }
        } else {
          newSettings[key] = defaultSettings[key];
        }
      }
  
      return newSettings;
    }
  
    static init(elements, settings) {
      if (elements instanceof Node) {
        elements = [elements];
      } else if (elements instanceof NodeList) {
        elements = [].slice.call(elements);
      } else if (!(elements instanceof Array)) {
        console.warn("VanillaTilt: The first argument must be a selector, a node or an array.");
        return;
      }
  
      elements.forEach(element => {
        if (!("vanillaTilt" in element)) {
          element.vanillaTilt = new VanillaTilt(element, settings);
        }
      });
    }
  }
  
  export default VanillaTilt;
  