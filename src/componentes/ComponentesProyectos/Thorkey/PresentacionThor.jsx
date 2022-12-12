import React, { Fragment } from 'react'
import imagenes from '../../../assets/imagenes';

const PresentacionThor = () => {
    return ( 
        <Fragment>
            <section>
                <div className='text-center'>
                    <section class="container mt-5">
                        <div class="row">
                            <div class="col-12 col-lg-6 align-self-sm-center p-4">
                                <h1 class="titulo-walletfy color-thor text-center">Thorkey</h1>
                                <p class="parrafo-walle text-center">Este E-commerce esta creado con WorldPress, utiliza los plugins de WooCommerce para configurar las formas de pago. Las funciones que esperamos de nuestro sitio es que sea un ecommerce cómodo para la gente, cumpliendo todos los deseos de nuestros clientes ofreciéndoles lo mejor en el momento de realizar compras de instrumentos.</p>
                            </div>
                            <div class="col-12 col-lg-6 d-flex justify-content-center d-none d-lg-block">
                                <img src={imagenes.Thorkeyh} alt="Imagen de la Home" class="img-fluid"/>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </Fragment>
     );
}
 
export default PresentacionThor;
