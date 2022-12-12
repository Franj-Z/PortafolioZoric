import React, { Fragment } from 'react'
import Nav from '../ComponentesHome/Nav';
import Footer from '../ComponentesHome/Footer';
import FranjPre from './Franjz/FranjPre';
import DescripcionFranj from './Franjz/DescripcionFranj';
import { Link } from 'react-router-dom';

const Franjz = () => {
    window.scrollTo(0, 0)

    return ( 
        <Fragment>
            <section>
                <Nav/>
                <Link to='/' className='btn-wsp'>
                    <i className="fa-sharp fa-solid fa-arrow-left"></i>
                </Link>
                <FranjPre/>
                <DescripcionFranj/>
                <Footer/>
            </section>
        </Fragment>
     );
}
 
export default Franjz;