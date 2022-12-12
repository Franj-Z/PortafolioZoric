import React, { Fragment } from 'react'
import imagenes from '../../../assets/imagenes';

const FranjPre = () => {
    return ( 
        <Fragment>
            <section>
                <div className='text-center'>
                    <section class="container mt-5">
                        <div class="row">
                            <div class="col-12 col-lg-6 align-self-sm-center p-4">
                                <h1 class="titulo-walletfy franj-color text-center">Franj_Z</h1>
                                <p class="parrafo-walle text-center">Franj_Z es un canal de youtube dónde realizan réplicas artesanales de objetos y cosas que pertenecen al mundo del cine. Allí podemos encontrar como realizar el escudo del Capitán América, el ídolo dorado de Indiana Jones entre otros.</p>
                                <p className='parrafo-walle text-center'>Este proyecto es un ecommerce programado en PHP Procedural y MySQL. </p>
                                <div className='text-center'>
                                    <a href="https://github.com/Franj-Z/FranjZ" target="_blank" className='btn btn-outline-dark'>Explora el GitHub del proyecto</a>
                                </div>
                            </div>
                            <div class="col-12 col-lg-6 d-flex justify-content-center d-none d-lg-block">
                                <img src={imagenes.Franjmuk} alt="Imagen de la Home" class="img-fluid"/>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </Fragment>
     );
}
 
export default FranjPre;