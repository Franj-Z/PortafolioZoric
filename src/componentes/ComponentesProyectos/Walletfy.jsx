import React, { Fragment } from 'react';
import PresentacionWalletfy from './Walletfy/WalletPre';
import Nav from '../ComponentesHome/Nav';
import DescripcionWallet from './Walletfy/DescripcionWallet';
import Datos from './Walletfy/Datos';
import Footer from '../ComponentesHome/Footer';
import { Link } from 'react-router-dom';

 

const Walletfy = () => {
    window.scrollTo(0, 0)
    return ( 
        <Fragment>
            <Nav/>
            <Link to='/' className='btn-wsp'>
                    <i className="fa-sharp fa-solid fa-arrow-left"></i>
            </Link>
            <PresentacionWalletfy/>
            <DescripcionWallet/>
            <Datos/>
            <Footer/>
        </Fragment>
     );
}
 
export default Walletfy;
