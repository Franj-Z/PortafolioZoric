import React, { Fragment } from 'react'
import imagenes from '../../../assets/imagenes';

const DescripcionWallet = () => {
    return ( 
        <Fragment>
            <section className='mt-5 bg-walletfy'>
                <div className='container text-center'>
                    <div className='p-5'>
                        <img src={imagenes.LogoWalletfy} alt="Logo Walletfy" className='img-fluid logo-walletfy' />
                        <p className='parraf-walletfy mt-3'>Walletfy fue desarrollada con HTML5, CSS3, JavaScript, React.js, Api's, Firebase, Material UI y Bootstrap.</p>

                    </div>
                </div>
            </section>
            <section className='container'>
                <div className='bg-act bg-walletfy2 p-5'>
                    <div className='row'>
                        <div className='col-12 col-sm-12 col-md-6 col-xxl-6 container'>
                            <div className='mt-5'>
                                <h1 className='subtitulo-walletfy'>Walletfy le brinda a sus usuarios:</h1>
                                <ul className='wallet-h'>
                                     <li className='wallet-li'>Seguimiento de todos tus movimientos</li>
                                     <li className='wallet-li'>Gráficos detallados</li>
                                     <li className='wallet-li'>Capacitación en el mundo de las finanzas</li>
                                     <li className='wallet-li'>Cuestionarios</li>
                                     <li className='wallet-li'>Noticias y Novedades del mundo financiero</li>
                                     <li className='wallet-li'>Seguimiento del mercado de criptomonedas</li>
                                     <li className='wallet-li'>Seguimiento de la bolsa de valores</li>
                                </ul>
                            </div>
                            
                        </div>
                        <div className='col-12 col-sm-12 col-md-6 col-xxl-6 '>
                            <div>
                                <img src={imagenes.Walletfy2} alt="MockupApp" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
     );
}
 
export default DescripcionWallet;