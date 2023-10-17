import React, { Fragment } from 'react'
import imagenes from '../../../assets/imagenes';
import VanillaTiltComponent from './VanillaTiltComponent';
const PresentacionAptek = () => {
    return ( 
        <Fragment>
            <section class="position-relative overflow-hidden">
                <div class="position-relative bg-dark zindex-4 pt-lg-3 pt-xl-5">
                <div class="container zindex-5 pt-5">
                    <div class="row justify-content-center text-center pt-4 pb-sm-2 py-lg-5">
                    <div class="col-xl-8 col-lg-9 col-md-10 py-5">
                        <h1 class="display-4 text-light pt-sm-2 pb-1 pb-sm-3 mb-3">Panel de Administración motor V4</h1>
                        <p class="fs-lg text-light opacity-70 pb-2 pb-sm-0 mb-4 mb-sm-5">Panel desarrollado con PHP, Ajax, SQL, CSS, Lottie y HTML!</p>
                        <a href="#" class="btn btn-primary shadow-primary btn-lg"><i class="fa-brands fa-github me-2"></i> Ver GitHub</a>
                    </div>
                    </div>
                </div>
                <div class="d-flex position-absolute top-100 start-0 w-100 overflow-hidden mt-n4 mt-sm-n1">
                    <div class="position-relative start-50 translate-middle-x flex-shrink-0 ">
                    <svg xmlns="http://www.w3.org/2000/svg" className='text-dark' width="3788" height="144" viewBox="0 0 3788 144"><path fill="currentColor" d="M0,0h3788.7c-525,90.2-1181.7,143.9-1894.3,143.9S525,90.2,0,0z"/></svg>
                    </div>
                </div>
                <div class="d-none d-lg-block"></div>
                <div class="d-none d-md-block d-lg-none"></div>
                </div>
                <div class="position-relative zindex-5 mx-auto contenedorMove">
                <div class="d-none d-lg-block contenedorMove2" ></div>
                <div class="d-none d-md-block d-lg-none contenedorMove3"></div>
                    <VanillaTiltComponent/>
                </div>
                <div class="position-absolute top-0 start-0 w-100 h-100"></div>
            </section>
            <section className='container-fluid bg-dark'>
                <section class="container py-5 mb-lg-2 text-light">
                    <div class="row py-2 py-md-4 py-lg-5">
                    <div class="col-xl-4 col-md-5 text-center text-md-start pt-md-2 pb-2 pb-md-0 mb-4 mb-md-0">
                        <h2 class="pb-3 mb-1 mb-lg-3 text-light">Administrador del motor de vuelos</h2>
                        <p class="fs-lg pb-3 mb-2 mb-lg-3">El Administrador de Aptek Aereos es una herramienta esencial para aquellos que desean potenciar su sitio web con un motor de búsqueda de vuelos altamente personalizable y adaptable. Este administrador es la clave para optimizar la experiencia del usuario y maximizar la eficiencia en la gestión de reservas aéreas, integrando de manera fluida con los principales proveedores de servicios de la industria.</p>
                    </div>
                    <div class="col-md-7 offset-xl-1">
                        <div class="accordion" id="faq">
                        <div class="accordion-item border-0 rounded-3 shadow-sm mb-3">
                            <h2 class="accordion-header" id="q1-heading">
                            <button class="accordion-button shadow-none rounded-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q1" aria-expanded="false" aria-controls="q1">
                                Funciones de Administración: 
                            </button>
                            </h2>
                            <div id="q1" class="accordion-collapse collapse" aria-labelledby="q1-heading" data-bs-parent="#faq">
                            <div class="accordion-body fs-sm pt-0">
                                <p>El panel de administración ofrece una serie de características útiles, que incluyen la capacidad de cambiar el estado de las reservas generadas, personalizar el preloader del buscador, crear y gestionar usuarios y agencias en el sistema, así como modificar la interfaz de colores para que coincida con su marca.</p>
                                <p class="mb-0">El Administrador de AptekAereos es la herramienta definitiva para aquellos que buscan llevar su sitio web de viajes al siguiente nivel. Con su capacidad de personalización, integración con los principales proveedores de servicios de la industria y un conjunto completo de funciones de administración, es la elección perfecta para brindar una experiencia de usuario excepcional y eficiente. Simplifique la gestión de reservas aéreas y optimice la interacción de sus usuarios con este administrador altamente adaptable y versátil.</p>
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item border-0 rounded-3 shadow-sm mb-3">
                            <h2 class="accordion-header" id="q2-heading">
                            <button class="accordion-button shadow-none rounded-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q2" aria-expanded="false" aria-controls="q2">
                                Sistema de Autorizaciones Independiente:
                            </button>
                            </h2>
                            <div id="q2" class="accordion-collapse collapse" aria-labelledby="q2-heading" data-bs-parent="#faq">
                                <div class="accordion-body fs-sm pt-0">
                                    <p> El Administrador no solo está diseñado para motores de búsqueda de vuelos, sino que también cuenta con un sistema de autorizaciones independiente. Esto significa que puede utilizarlo para gestionar otros motores de búsqueda, como hoteles o alquiler de automóviles, brindándole versatilidad y funcionalidad más allá de los vuelos.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item border-0 rounded-3 shadow-sm mb-3">
                            <h2 class="accordion-header" id="q3-heading">
                            <button class="accordion-button shadow-none rounded-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q3" aria-expanded="false" aria-controls="q3">
                                Integración con Proveedores Líderes: 
                            </button>
                            </h2>
                            <div id="q3" class="accordion-collapse collapse" aria-labelledby="q3-heading" data-bs-parent="#faq">
                            <div class="accordion-body fs-sm pt-0">
                                <p>Ofrece una integración perfecta con los principales proveedores de servicios de la industria, incluyendo Sabre, Amadeus, Travelport y Farelogix. Esto garantiza un acceso inmediato a una amplia gama de opciones de vuelos y tarifas de fuentes altamente confiables.</p>
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item border-0 rounded-3 shadow-sm mb-3">
                            <h2 class="accordion-header" id="q4-heading">
                            <button class="accordion-button shadow-none rounded-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q4" aria-expanded="false" aria-controls="q4">
                                Esquema de Tarifas Personalizado:
                            </button>
                            </h2>
                            <div id="q4" class="accordion-collapse collapse" aria-labelledby="q4-heading" data-bs-parent="#faq">
                            <div class="accordion-body fs-sm pt-0">
                                <p>Con el Administrador de AptekAereos, puede diseñar su propio esquema de tarifas y vincularlo con los resultados de búsqueda. Esto le brinda control total sobre cómo se muestran las tarifas y las opciones a los usuarios.</p>
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item border-0 rounded-3 shadow-sm mb-3">
                            <h2 class="accordion-header" id="q5-heading">
                            <button class="accordion-button shadow-none rounded-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q5" aria-expanded="false" aria-controls="q5">
                                Accesibilidad Universal: 
                            </button>
                            </h2>
                            <div id="q5" class="accordion-collapse collapse" aria-labelledby="q5-heading" data-bs-parent="#faq">
                            <div class="accordion-body fs-sm pt-0">
                                <p>El sistema de reservas es accesible desde cualquier navegador web sin necesidad de software adicional. Esto facilita el acceso tanto para usted como para sus usuarios finales.</p>
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item border-0 rounded-3 shadow-sm">
                            <h2 class="accordion-header" id="q6-heading">
                            <button class="accordion-button shadow-none rounded-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q6" aria-expanded="false" aria-controls="q6">Personalización Avanzada:</button></h2>
                            <div id="q6" class="accordion-collapse collapse" aria-labelledby="q6-heading" data-bs-parent="#faq">
                            <div class="accordion-body fs-sm pt-0">
                                <p>El Administrador de AptekAereos permite una personalización completa del motor de búsqueda de vuelos, lo que significa que puede adaptarlo a las necesidades específicas de su sitio web. Desde la disposición de los resultados hasta la información mostrada, todo está en sus manos.</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
            </section>

        </Fragment>
     );
}
 
export default PresentacionAptek;
