import React, { Fragment } from 'react'
import imagenes from '../../../assets/imagenes';

const DescripcionFranj = () => {
    return ( 
        <Fragment>
            <section className='mt-5 bg-franjZ'>
                <div className='container text-center'>
                    <div className='p-3'>
                        <img src={imagenes.Fz} alt="Logo Walletfy" className='img-fluid logo-franjz' />
                        <p className='parraf-walletfy'>El sitio de Franj_Z fue desarrollado con HTML5, CSS3, JavaScript, PHP, SQL y Bootstrap.</p>
                    </div>
                </div>
            </section>
            <section className='container'>
                <div className='bg-act bg-franj p-5'>
                    <div className='row'>
                        <div className='col-12 col-sm-12 col-md-5 col-xxl-5 container'>
                            <div className='mt-5'>
                                <h1 className='subtitulo-walletfy franj-color'>Franj_Z esta conformada por:</h1>
                                <ul className='wallet-h'>
                                     <li className='wallet-li'>Interfaz moderna</li>
                                     <li className='wallet-li'>Animaciones generadas con JavaScript</li>
                                     <li className='wallet-li'>Funcionalidades programadas en PHP</li>
                                     <li className='wallet-li'>Base de datos en Sql</li>
                                     <li className='wallet-li'>Maquetación Web en HTML, CSS Y Bootstrap</li>

                                </ul>
                            </div>
                        </div>
                        <div className='col-12 col-sm-12 col-md-7 col-xxl-7 '>
                            <div>
                                <img src={imagenes.Franjzweb} alt="MockupApp" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
     );
}
 
export default DescripcionFranj;