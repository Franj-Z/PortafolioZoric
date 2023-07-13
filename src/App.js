import React, { Fragment } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './componentes/home';
import './App.css';
import Walletfy from './componentes/ComponentesProyectos/Walletfy';
import Franjz from './componentes/ComponentesProyectos/Franjz';
import Thorkey from './componentes/ComponentesProyectos/Thorkey';
import Aptek from './componentes/ComponentesProyectos/Aptek';
function App() {
  return (
    <Fragment className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/walletfy' element={<Walletfy/>}/>
          <Route path='/franjz' element={<Franjz/>}/>
          <Route path='/thorkey' element={<Thorkey/>}/>
          <Route path='/aptek' element={<Aptek/>}/>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
