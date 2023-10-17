import React, { Fragment, useState } from 'react';
import imagenes from '../../../assets/imagenes';
import Lottie from 'react-lottie';
import analitic from '../../../assets/lottie/analitic.json';
import globo from '../../../assets/lottie/globo.json';
import lapiz from '../../../assets/lottie/lapiz.json';
import libro from '../../../assets/lottie/libro.json';
import mail from '../../../assets/lottie/mail.json';
import files from '../../../assets/lottie/files.json';

const defaultOptions = {
  loop: false,
  autoplay: false,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const Pastillas = () => {
  const [isHoveredGlobo, setIsHoveredGlobo] = useState(false);
  const [isHoveredAnalitic, setIsHoveredAnalitic] = useState(false);
  const [isHoveredLapiz, setIsHoveredLapiz] = useState(false);
  const [isHoveredLibro, setIsHoveredLibro] = useState(false);
  const [isHoveredMail, setIsHoveredMail] = useState(false);
  const [isHoveredFiles, setIsHoveredFiles] = useState(false);

  const resetAnimation = (setState) => {
    setState(false);
  };

  return (
    <Fragment>
      <section className="position-relative py-5">
        <div className="container position-relative zindex-5 pb-md-4 pt-md-2 pt-lg-3 pb-lg-5">
          <div className="row justify-content-center text-center pb-3 mb-sm-2 mb-lg-3">
            <div className="col-xl-6 col-lg-7 col-md-9">
              <h2 className="h1 mb-lg-4">¿Cuáles son las funcionalidades del administrador?</h2>
              <p className="fs-lg text-muted mb-0">Con este administrador le damos la posibilidad a los usuarios de:</p>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-0 pb-xl-3">
            <div className="col position-relative">
              <div className="card border-0 bg-transparent rounded-0 p-md-1 p-xl-3">
                <div className="d-table p-3 mx-auto mt-3 mt-md-4">
                  <div
                    onMouseEnter={() => setIsHoveredGlobo(true)}
                    onMouseLeave={() => resetAnimation(setIsHoveredGlobo)}
                  >
                    <div style={{ width: 100, height: 100 }}>
                      <Lottie
                        options={{
                          animationData: globo,
                          loop: true,
                          autoplay: false,
                          rendererSettings: {
                            preserveAspectRatio: 'xMidYMid slice',
                          },
                        }}
                        isStopped={!isHoveredGlobo}
                      />
                    </div>
                  </div>
                </div>
                <div className="card-body text-center">
                  <h3 className="h5 pb-1 mb-2">Organización de las reservas generadas</h3>
                  <p className="mb-0">El administrador brinda la posibilidad de organizar las reservas generadas por el software del motor de aéreos.</p>
                </div>
              </div>
              <hr className="position-absolute top-0 end-0 w-1 h-100 d-none d-sm-block" />
              <hr className="position-absolute top-100 start-0 w-100 d-none d-sm-block" />
            </div>

            <div className="col position-relative">
              <div className="card border-0 bg-transparent rounded-0 p-md-1 p-xl-3">
                <div className="d-table p-3 mx-auto mt-3 mt-md-4">
                  <div
                    onMouseEnter={() => setIsHoveredAnalitic(true)}
                    onMouseLeave={() => resetAnimation(setIsHoveredAnalitic)}
                  >
                    <div style={{ width: 100, height: 100 }}>
                      <Lottie
                        options={{
                          animationData: analitic,
                          loop: true,
                          autoplay: false,
                          rendererSettings: {
                            preserveAspectRatio: 'xMidYMid slice',
                          },
                        }}
                        isStopped={!isHoveredAnalitic}
                      />
                    </div>
                  </div>
                </div>
                <div className="card-body text-center">
                  <h3 className="h5 pb-1 mb-2">Resúmenes y analíticas</h3>
                  <p className="mb-0">El admin le muestra resúmenes detallados de las reservas generadas en el motor de aéreos.</p>
                </div>
              </div>
              <hr className="position-absolute top-0 end-0 w-1 h-100 d-none d-md-block" />
              <hr className="position-absolute top-100 start-0 w-100 d-none d-sm-block" />
            </div>

            <div className="col position-relative">
              <div className="card border-0 bg-transparent rounded-0 p-md-1 p-xl-3">
                <div className="d-table p-3 mx-auto mt-3 mt-md-4">
                  <div
                    onMouseEnter={() => setIsHoveredLapiz(true)}
                    onMouseLeave={() => resetAnimation(setIsHoveredLapiz)}
                  >
                    <div style={{ width: 100, height: 100 }}>
                      <Lottie
                        options={{
                          animationData: lapiz,
                          loop: true,
                          autoplay: false,
                          rendererSettings: {
                            preserveAspectRatio: 'xMidYMid slice',
                          },
                        }}
                        isStopped={!isHoveredLapiz}
                      />
                    </div>
                  </div>
                </div>
                <div className="card-body text-center">
                  <h3 className="h5 pb-1 mb-2">Personalización</h3>
                  <p className="mb-0">El administrador le permite a los usuarios personalizar todos los aspectos estéticos del motor de aéreos.</p>
                </div>
              </div>
              <hr className="position-absolute top-0 end-0 w-1 h-100 d-none d-sm-block d-md-none" />
              <hr className="position-absolute top-100 start-0 w-100 d-none d-sm-block" />
            </div>

            <div className="col position-relative">
              <div className="card border-0 bg-transparent rounded-0 p-md-1 p-xl-3">
                <div className="d-table p-3 mx-auto mt-3 mt-md-4">
                  <div
                    onMouseEnter={() => setIsHoveredLibro(true)}
                    onMouseLeave={() => resetAnimation(setIsHoveredLibro)}
                  >
                    <div style={{ width: 100, height: 100 }}>
                      <Lottie
                        options={{
                          animationData: libro,
                          loop: true,
                          autoplay: false,
                          rendererSettings: {
                            preserveAspectRatio: 'xMidYMid slice',
                          },
                        }}
                        isStopped={!isHoveredLibro}
                      />
                    </div>
                  </div>
                </div>
                <div className="card-body text-center">
                  <h3 className="h5 pb-1 mb-2">Sistema de autorización dinámico</h3>
                  <p className="mb-0">El administrador brinda un sistema de autorizaciones el cuál sirve no solo para motores de aéreos sino también para motores de hoteles y automóviles.</p>
                </div>
              </div>
              <hr className="position-absolute top-0 end-0 w-1 h-100 d-none d-md-block" />
              <hr className="position-absolute top-100 start-0 w-100 d-none d-sm-block d-md-none" />
            </div>

            <div className="col position-relative">
              <div className="card border-0 bg-transparent rounded-0 p-md-1 p-xl-3">
                <div className="d-table p-3 mx-auto mt-3 mt-md-4">
                  <div
                    onMouseEnter={() => setIsHoveredMail(true)}
                    onMouseLeave={() => resetAnimation(setIsHoveredMail)}
                  >
                    <div style={{ width: 100, height: 100 }}>
                      <Lottie
                        options={{
                          animationData: mail,
                          loop: true,
                          autoplay: false,
                          rendererSettings: {
                            preserveAspectRatio: 'xMidYMid slice',
                          },
                        }}
                        isStopped={!isHoveredMail}
                      />
                    </div>
                  </div>
                </div>
                <div className="card-body text-center">
                  <h3 className="h5 pb-1 mb-2">Sistema de mails</h3>
                  <p className="mb-0">Toda acción realizada en el administrador tiene su sistema de mail. El cual está basado en un sistema de plantillas completamente personalizables por el cliente.</p>
                </div>
              </div>
            </div>
            <div className="col position-relative">
              <div className="card border-0 bg-transparent rounded-0 p-md-1 p-xl-3">
                <div className="d-table p-3 mx-auto mt-3 mt-md-4">
                <div
                    onMouseEnter={() => setIsHoveredFiles(true)}
                    onMouseLeave={() => resetAnimation(setIsHoveredFiles)}
                  >
                    <div style={{ width: 100, height: 100 }}>
                      <Lottie
                        options={{
                          animationData: files,
                          loop: true,
                          autoplay: false,
                          rendererSettings: {
                            preserveAspectRatio: 'xMidYMid slice',
                          },
                        }}
                        isStopped={!isHoveredFiles}
                      />
                    </div>
                  </div>
                </div>
                <div className="card-body text-center">
                  <h3 className="h5 pb-1 mb-2">Exportar información</h3>
                  <p className="mb-0">Otra funcionalidad que brinda es la posibilidad de exportar toda información en distintos formatos. Entre ellos Excel, txt, PDF, etc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute top-0 start-0 w-100 h-100"></div>
      </section>
    </Fragment>
  );
};

export default Pastillas;
