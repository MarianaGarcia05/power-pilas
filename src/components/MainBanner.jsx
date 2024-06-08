import React from 'react';
import '../styles/MainBanner.css';
import * as IoIcons from 'react-icons/io';
import * as PiIcons from 'react-icons/pi';
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';
import * as Fa6Icons from 'react-icons/fa6';
import reloj from '../assets/img/relojx3.png';

const MainBanner = () => {
    return (
        <div className='container-MainBanner'>
            <h1>Relojeria Karsu</h1>
            <div className="content">
                <div className="contentText">
                    <div className="items">
                        <div className="item">
                            <PiIcons.PiBeltFill className="item-icon" />
                            <h3>Pulsos</h3>
                        </div>
                        <div className="item">
                            <FaIcons.FaTools className="item-icon" />
                            <h3>Arreglo general <br />de relojes</h3>
                        </div>
                        <div className="item">
                            <GiIcons.GiBatteries className="item-icon3" />
                            <h3>Venta de pilas al por mayor <br /> y al detal</h3>
                        </div>
                    </div>
                </div>
                <div className="contentImg">
                    <div className="imgWrapper">
                        <img className='imgReloj' src={reloj} alt="" />
                    </div>
                </div>
            </div>
            <div className="contacts">
                <h3><IoIcons.IoLogoWhatsapp className='icon' /> 314 287 5964</h3>
                <h3><Fa6Icons.FaMapLocationDot className='icon' /> Calle 7 con 3 Esquina Neiva (H)</h3>
            </div>
        </div>
    )
}

export default MainBanner
