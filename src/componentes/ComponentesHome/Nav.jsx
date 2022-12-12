import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import imagenes from '../../assets/imagenes';

const Nav = () => {
    return ( 
        <Fragment>
            <nav className="navbar navbar-expand-lg">
                <div className='container'>
                    <Link to="/" className="navbar-brand me-2">
                        <img src={imagenes.Logo} alt="Logo" className='img-fluid logo'/>
                    </Link>
                </div>
            </nav>
        </Fragment>
     );
}
 
export default Nav;