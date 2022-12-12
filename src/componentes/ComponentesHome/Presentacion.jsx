import React, { Fragment } from 'react'
import imagenes from '../../assets/imagenes';
const Presentacion = () => {
    return (  
        <Fragment>
        <section className='container-fluid'>
            <div className='text-center mb-5'>
                <h1 className='titulo'>Diseñador, Desarrollador Frontend y Backend</h1>
                <h2 className='subtitulo'>Diseño y codifico cosas increíbles y sencillas, y me encanta lo que hago.</h2>
                <img src={imagenes.Profile} alt="Imagen de prefil" className='img-fluid mt-4'/>
            </div>
            <div className='text-center mt-5'>
                <img src={imagenes.Compus} alt="Computadoras" className='img-fluid imagen' />
            </div>
        </section>
        <section className='text-center'>
                <div className='bg-franj'>
                    <div className='container'>
                        <div className='text-light'>
                            <h1 className='titulo2'>Hola, soy Agus. Encantado de conocerte.</h1>
                            <p className='parraf'>Desde que comencé mi viaje como diseñador y programador, he trabajado en varios proyectos con el fin de aprender y nutrir mis habilidades y conocimientos. Soy tranquilamente confiado, naturalmente curioso y trabajo perpetuamente para mejorar día a día en mi profesión. 
                            <br /> 
                            <i>Saber más que ayer pero menos que mañana.</i></p>
                        </div>
                    </div>
                    
                </div>
        </section>
        </Fragment>
    );
}
 
export default Presentacion;