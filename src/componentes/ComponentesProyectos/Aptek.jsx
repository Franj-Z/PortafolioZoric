import React, { Fragment } from 'react';
import Nav from '../ComponentesHome/Nav';
import Footer from '../ComponentesHome/Footer';
import PresentacionAptek from './Aptek/PresentAptek';


const Aptek = () => {
    return ( 
        <Fragment>
            <Nav/>
            <PresentacionAptek/>
            
            <Footer/>
        </Fragment>
     );
}
 
export default Aptek;
