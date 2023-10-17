import React, { Fragment } from 'react';
import Nav from '../ComponentesHome/Nav';
import Footer from '../ComponentesHome/Footer';
import PresentacionAptek from './Aptek/PresentAptek';
import Pastillas from './Aptek/Pastillas';
import Desarrollo from './Aptek/Desarrollo';


const Aptek = () => {
    window.scrollTo(0, 0)
    return ( 
        <Fragment>
            <Nav/>
            <PresentacionAptek/>
            <Pastillas/>
            <Footer/>
        </Fragment>
     );
}
 
export default Aptek;
