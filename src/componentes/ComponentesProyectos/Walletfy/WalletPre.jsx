import React, { Fragment } from 'react'
import imagenes from "../../../assets/imagenes";

const PresentacionWalletfy = () => {
    return ( 
        <Fragment>
            <section class="container mt-5">
                <div class="row">
                    <div class="col-12 col-lg-6 align-self-sm-center p-4">
                        <h1 class="titulo-walletfy text-center">El aliado de tu Bolsillo</h1>
                        <p class="parrafo-walle text-center">Walletfy es una aplicación de finanzas personales. La idea es ayudar al usuario en la organización de sus gastos. Además, buscamos capacitar al usuario con contenido financiero como consejos, cuestionarios, un glosario de términos, para que nuestros usuarios adopten una conducta financiera y puedan tomar las mejores decisiones.</p>
                        <div className='text-center'>
                            <a href="https://walletfy-ad0ab.web.app/" className='btn btn-walletfy'>Explora Walletfy</a>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 d-flex justify-content-center d-none d-lg-block">
                        <img src={imagenes.Walletfy1} alt="Imagen de la Home" class="img-fluid"/>
                    </div>
                </div>
            </section>
        </Fragment>
     );
}
 
export default PresentacionWalletfy;