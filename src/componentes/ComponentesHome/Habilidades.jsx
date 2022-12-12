import React, { Fragment } from 'react'
import habilidades from '../../DatosPortafolio/Habilidades';

const Habilidades = () => {
    return ( 
        <Fragment>
                <section className='container'>
                    <div className='bg-act text-center'>
                        <div className='row'>
                            {habilidades.map(habilidad => (
                                <div className='col-12 col-sm-12 col-md-4 col-xxl-4 container columna'>
                                    <div>
                                        <span className='fa-stack fa-2x circulo'>
                                            <i className="fas fa-circle fa-stack-2x"></i>
                                            <i className={habilidad.icono + " iconHa fa-stack-1x fa-inverse iconoCir "}></i>
                                        </span>
                                        <h1 className='titulo3'>{habilidad.titulo}</h1>
                                        <p className='mb-4 parrafo'>{habilidad.parrafo1}</p>
                                        <p className='parrafo sub-p'>{habilidad.subtitulo}</p>
                                        <p className='mb-4'>{habilidad.herramientas}</p>
                                        <p className='parrafo sub-p '>{habilidad.subtitulo2}</p>
                                            <ul className='list-hab'>
                                                {habilidad.lista.map (nombre => (
                                                    <li>{nombre.herra}</li>
                                                ))}
                                            </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
        </Fragment>
     );
}
 
export default Habilidades;