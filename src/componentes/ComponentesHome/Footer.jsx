import React, { Fragment } from 'react'
import imagenes from '../../assets/imagenes';

const Footer = () => {
    return ( 
        <Fragment>
            <footer className='footer-p mt-5'>
                <div className='container'>
                    <a href="#">
                        <img src={imagenes.Logo2} alt="Logotipo" className='img fluid logo' />
                    </a>
                    <div>
                        <div>
                            <p className='footer-t'>Viviendo, Aprendiendo y subiendo de nivel día a día.</p>
                        </div>
                    </div>
                    <div className='text-center'>
                        <div>
                            <a href="https://www.facebook.com/agustin.zoric/" target="_blank" className='boton-red me-3'><i className="fab fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/agus_zoric/?hl=es" target="_blank" className='boton-red me-3'><i className="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/francisco-agustin-zoric-a43971241/" target="_blank" className='boton-red me-3'><i className="fab fa-linkedin-in"></i></a>
                            <a href="https://api.whatsapp.com/send?phone=5491127996596" target="_blank" className='boton-red me-3'><i className="fab fa-whatsapp"></i></a>
                        </div>
                    </div>
                    <div className='mt-3'>
                        Hecho a mano por mi <i class="fa-regular fa-copyright"> 2022</i>
                    </div>
                </div>
            </footer>
        </Fragment>
     );
}
 
export default Footer;