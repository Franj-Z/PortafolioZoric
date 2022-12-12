import React, { Fragment } from 'react'
import Presentacion from './ComponentesHome/Presentacion';
import Habilidades from './ComponentesHome/Habilidades';
import Trabajos from './ComponentesHome/Trabajos';
import Testimonios from './ComponentesHome/Testimonios';
import Footer from './ComponentesHome/Footer';
import Nav from './ComponentesHome/Nav';
function Home() {
  return (
    <Fragment>
        <Nav/>
        <Presentacion/>
        <Habilidades/>
        <Trabajos/>
        <Testimonios/>
        <Footer/>
    </Fragment>
  );
}

export default Home;
