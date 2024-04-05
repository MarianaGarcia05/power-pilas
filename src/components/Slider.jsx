import React from 'react';
import '../styles/Slider.css';
import Maxell from '../assets/img/logos/img-Maxell.png';
import Duracell from '../assets/img/logos/img-Duracell.png';
import Energizer from '../assets/img/logos/img-Energizer.png';
import Panasonic from '../assets/img/logos/img-Panasonic.png';

const Slider = () => {
    return (
        <div className='mt-18 mb-32'>
            <h1 className='tittleMarcas'><span className='text-teal-600'>Variedad</span> de marcas</h1>
            <div className='contentSlider'>
                <figure>
                    <img src={Duracell} />
                    <div className="informationSlider">
                        <h2>Duracell</h2>
                        <center><p>
                            Las pilas de botón son caracterizadas por una potencia de larga duración, Duracell
                            ofrece la calidad en una gran variedad de tamaños.</p>
                        </center>
                    </div>
                </figure>
                <figure>
                    <img src={Energizer} />
                    <div className="informationSlider">
                        <h2>Energizer</h2>
                        <center><p>
                            Energía duradera y confiable, Energizer ofrece una gama completa de baterías en miniatura 
                            de larga duración. Ya sea para su reloj, cámara, u otro dispositivo pequeño.</p>
                        </center>
                    </div>
                </figure>
                <figure>
                    <img src={Maxell} />
                    <div className="informationSlider">
                        <h2>Maxell</h2>
                        <center><p>
                            Duran 10 veces más que las baterías comunes, Maxell ofrece baterías alcalinas para relojes, 
                            controles remotos y otros dispositivos de uso constante.</p>
                        </center>
                    </div>
                </figure>
                <figure>
                    <img src={Panasonic} />
                    <div className="informationSlider">
                        <h2>Panasonic</h2>
                        <center><p>
                            Las pilas botón LITIO POWER de Panasonic han sido diseñadas para ofrecer un suministro de energía 
                            fiable y duradero con amplia gama disponible enblíster.</p>
                        </center>
                    </div>
                </figure>
            </div>
        </div>
    )
}

export default Slider
