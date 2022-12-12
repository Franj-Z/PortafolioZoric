import React, { Fragment } from 'react';
import Nav from '../ComponentesHome/Nav';
import Footer from '../ComponentesHome/Footer';
import PresentacionThor from './Thorkey/PresentacionThor';
import DesThor from './Thorkey/DesThor';


const Thorkey = () => {
    return ( 
        <Fragment>
            <Nav/>
            <PresentacionThor/>
            <DesThor/>
            
            <Footer/>
        </Fragment>
     );
}
 
export default Thorkey;
