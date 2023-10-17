import React, { useEffect, useRef } from 'react';
import VanillaTilt from './VanillaTilt.js'; // Asegúrate de que la ruta sea correcta
import imagenes from '../../../assets/imagenes';

const VanillaTiltComponent = ({ options }) => {
  const tiltElementRef = useRef(null);

  useEffect(() => {
    const element = tiltElementRef.current;
    const vanillaTiltInstance = new VanillaTilt(element, options);

    return () => {
      vanillaTiltInstance.destroy();
    };
  }, [options]);

  return (
      <div class="tilt-3d" ref={tiltElementRef} data-tilt data-tilt-full-page-listening data-tilt-max="12" data-tilt-perspective="1200">
          <img src={imagenes.admin1} alt="Dashboard"/>
          <div class="tilt-3d-inner position-absolute top-0 start-0 w-100 h-100">
          <img src={imagenes.admin2} alt="Cards"/>
          </div>
      </div>
  );
};

export default VanillaTiltComponent;