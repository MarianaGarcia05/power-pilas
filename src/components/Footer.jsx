import React from 'react';
import '../styles/Footer.css';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';
import * as AiIcons from 'react-icons/ai';
import * as Fa6Icons from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className='contentFooter'>
            <div className="information">
                <h1>Información</h1>
                <ul className='itemsFooter'>
                    <li>
                        <a href="#">
                            <Fa6Icons.FaMapLocationDot className='footerIcons' />
                            Dirección: Calle 10 No. 20 35 Oficina <br />295, Centro Comercial Unicentro
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <IoIcons.IoLogoWhatsapp className='footerIcons' />
                            Teléfono: +57 324 215 3045
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <MdIcons.MdEmail className='footerIcons' />
                            Correo: joyeria@gmail.com
                        </a>
                    </li>
                </ul>
            </div>
            <div className="linea-footer"></div>
            <div className="socialNetworks">
                <h1>Redes Sociales</h1>
                <ul className='itemsFooter'>
                    <li>
                        <a href="#">
                            <Fa6Icons.FaFacebook className='footerIcons' />
                            Relojeria Colombiana
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Fa6Icons.FaSquareInstagram className='footerIcons' />
                            relojeria_colombiana
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <AiIcons.AiFillTwitterCircle className='footerIcons' />
                            relojeria_colombiana12
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Fa6Icons.FaTiktok className='footerIcons' />
                            relojeria_colombiana
                        </a>
                    </li>
                </ul>
            </div>
            <div className="location">
                <img src="../src/assets/img/mapsImg.jpg"/>
            </div>

        </footer>
    )
}

export default Footer
