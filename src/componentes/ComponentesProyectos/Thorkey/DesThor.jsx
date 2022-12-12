import React, { Fragment } from 'react'
import imagenes from '../../../assets/imagenes';

const DesThor = () => {
    return ( 
        <Fragment>
            <section className='mt-5 bg-thor'>
                <div className='container text-center'>
                    <div className='p-5'>
                        <img src={imagenes.Thorkeyl} alt="Logo Walletfy" className='img-fluid logo-walletfy' />
                        <p className='parraf-walletfy mt-3'>Thorkey fue desarrollado con WorldPress.</p>

                    </div>
                </div>
            </section>
            <section className='container'>
                <div className='bg-act p-5'>
                    <div className='row'>
                        <div className='col-12 col-sm-12 col-md-6 col-xxl-6 container'>
                            <div className='mt-5'>
                                <h1 className='subtitulo-thor'>Para realizar el E-commerce utilizamos el tema “Shop Zita” con los plugins:</h1>
                                <ul className='thor-h'>
                                     <li className='thor-li'>BackWPup</li>
                                     <li className='thor-li'>Elementor</li>
                                     <li className='thor-li'>Really Simple SSL</li>
                                     <li className='thor-li'>Mercado Pago</li>
                                     <li className='thor-li'>WooCommerceServices</li>
                                     <li className='thor-li'>SuperProgressive Web Apps</li>
                                     <li className='thor-li'>Google Ads forWooCommerce</li>
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
 
export default DesThor;