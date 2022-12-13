import React, { Fragment } from 'react'
import imagenes from '../../../assets/imagenes';

const Datos = () => {
    return ( 
        <Fragment>
            <section className='mt-5'>
                <div className='container'>
                    <div className='row'>                    
                        <div className=' col-12 col-sm-12 col-md-6 col-xxl-6 text-center'>
                            <h1 className='titulo-walletfy'>Un poco sobre el proyecto</h1>
                            <p className='parrafo-walle'>Para la elaboración de este proyecto utilizamos la metodología de “Scrum”, esta consiste en detectar las funcionalidades necesarias para la elaboración de nuestra app estableciendo un plazo de tiempo determinado para ir elaborando y realizando estas funcionalidades. La realización de esta aplicación nos estimó un plazo de tiempo de 5 meses y una cantidad de 4 Sprints.</p>
                        </div>
                        <div className='col-12 col-sm-12 col-md-6 col-xxl-6 text-center'>
                            <img src={imagenes.Team} alt="Equipo de trabajo" className='img-fluid team mb-2' />
                            <p className='tituloPersona wallet-color m-0'>Cristian Enrique Bösz y Francisco Agustin Zoric</p>
                            <p className='text-muted'>Fundadores y desarroladores de "Walletfy"</p>
                            
                        </div>
                    </div>

                </div>
            </section>
        </Fragment>
     );
}
 
export default Datos;
