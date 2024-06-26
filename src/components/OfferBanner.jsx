import React from 'react';
import '../styles/OfferBanner.css';

const OfferBanner = () => {
    return (
        <div className="contentBanner">
            <div className='banner'>
                <div className="contentTextsB">
                    <img src="../src/assets/img/megafonoImg.png" className='imgMegafono' />
                    <div className="textBanner">
                        <h1 className="tituloBanner">Ofertas de pilas</h1>
                        <p>Esta pila <span className='font-sans'>T&E</span> te garantiza que tendrás energía en la que puedes confiar, tanto si te estas preparando para esa
                            tormenta que se ve en el horizonte o simplemente deleitando a tus hijos con un juguete a control remoto. <br />
                            ¡Tendrás energía en todo momento!
                        </p>
                        <a href="#"><button className='btnBanner'>
                            Comprar
                        </button></a>
                    </div>
                </div>
                <div className="imgBanner">
                    <img src="../src/assets/img/imgpilas.png" />
                </div>
            </div>

        </div>
    )
}

export default OfferBanner
