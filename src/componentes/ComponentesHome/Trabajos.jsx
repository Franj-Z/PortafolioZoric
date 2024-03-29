import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import trabajos from '../../DatosPortafolio/Trabajos';

const Trabajos = () => {
    return ( 
        <Fragment>
            <section>
                <div className='container text-center'>
                    <h2 className='titulo22 text-blue'>Mis últimos trabajos</h2>
                    <p className='parrafo mb-5'>Aquí hay algunos de mis últimos proyectos creados</p>
                    <div className='container'>
                        <div className='row justify-content-center'>                                
                        {trabajos.map(trabajo => (                            
                            <div className='col-12 col-sm-12 col-md-6 col-xxl-4'>
                                <figure className='figure-home'>
                                    <img src={trabajo.imagen} alt="Walletfy" className='img-fluid img-pro' />
                                    <figcaption>
                                        <p className='p-port'>{trabajo.titulo}</p>
                                        <Link to={trabajo.ruta} className='botonTr'>
                                            Saber más
                                        </Link>
                                    </figcaption>
                                </figure>
                            </div>
                        ))}

                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
     );
}
 
export default Trabajos;
