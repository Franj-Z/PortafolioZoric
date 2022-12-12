import React, { Fragment } from 'react'
import imagenes from '../../assets/imagenes';

const Testimonios = () => {
    return ( 
        <Fragment>
            <section className='container'>
                <div>
                    <div className='text-center'>
                        <h1 className='titulo2 text-blue'>Testimonios</h1>
                        <h2 className='subtitle'>Las personas con las que he trabajado han dicho algunas cosas muy lindas...</h2>
                        <div>
                            <img src={imagenes.Titi} alt="Cristian Bosz" className='img-fluid avatarTest' />
                            <p className='text-test'>“Fue un verdadero placer trabajar con Agus. Definitivamente es el tipo de diseñador y programador en el que puedes confiar con un proyecto de principio a fin”.</p>
                            <h1 className='tituloPersona'>Cristian Bösz</h1>
                            <h2 className='subPer'>Desarrollador Web</h2>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
     );
}
 
export default Testimonios;
