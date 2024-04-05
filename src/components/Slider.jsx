import React from 'react';
import '../styles/Slider.css';;
import Maxell from '../assets/img/logos/img-Maxell.png';
import Duracell from '../assets/img/logos/img-Duracell.png';
import Energizer from '../assets/img/logos/img-Energizer.png';
import Panasonic from '../assets/img/logos/img-Panasonic.png';

const Slider = () => {
    return (
        <div className='contentSlider'>
            <h1>Marcas disponibles</h1>
            <figure>
                <img src={Duracell} />
                <div className="informationSlider">
                    <h2>Duracell</h2>
                    <center><p>
                        Direccion: Calle 6 # 9a-12 <br />
                        Localidad: Neiva-Huila <br />
                        Telefono: 88789315</p>
                    </center>
                </div>
            </figure>
            <figure>
                <img src={Energizer} />
                <div className="informationSlider">
                    <h2>Energizer</h2>
                    <center><p>
                        Direccion: Calle 6 # 9a-12 <br />
                        Localidad: Neiva-Huila <br />
                        Telefono: 88789315</p>
                    </center>
                </div>
            </figure>
            <figure>
                <img src={Maxell} />
                <div className="informationSlider">
                    <h2>Maxell</h2>
                    <center><p>
                        Direccion: Calle 6 # 9a-12 <br />
                        Localidad: Neiva-Huila <br />
                        Telefono: 88789315</p>
                    </center>
                </div>
            </figure>
            <figure>
                <img src={Panasonic} />
                <div className="informationSlider">
                    <h2>Panasonic</h2>
                    <center><p>
                        Direccion: Calle 6 # 9a-12 <br />
                        Localidad: Neiva-Huila <br />
                        Telefono: 88789315</p>
                    </center>
                </div>
            </figure>
        </div>
    )
}

export default Slider
