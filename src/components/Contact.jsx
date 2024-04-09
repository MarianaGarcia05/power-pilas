import React from 'react';
import Navbar from './Navbar';
import '../styles/Contact.css';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as Fa6Icons from 'react-icons/fa6';
import imgContact from '../assets/img/imgContact.png';

const Contact = () => {
    return (
        <>
            <div className="nav">
                <Navbar />
            </div>

            <div className="content">
                <div className="options">
                    <a className="card">
                        <Fa6Icons.FaLocationDot className='iconContact' />
                        <h2 className='tittle-card'>Ubicación</h2>
                        <hr className='w-2/5' />
                        <a href="#" className="">
                            <p className='info-card'>Calle 10 No. 20 35 Oficina 295, Centro Comercial Unicentro</p>
                        </a>
                    </a>

                    <a className="card">
                        <FaIcons.FaPhoneAlt className='iconContact' />
                        <h2 className='tittle-card'>Llámanos</h2>
                        <hr className='w-2/5' />
                        <a href="#" className="">
                            <p className='info-card'>324 215 3045</p>
                        </a>
                    </a>

                    <a className="card">
                        <MdIcons.MdAttachEmail className='iconContact' />
                        <h2 className='tittle-card'>Correo</h2>
                        <hr className='w-2/5' />
                        <a href="#" className="">
                            <p className='info-card'>joyeria@gmail.com</p>
                        </a>
                    </a>
                </div>

                <div className="bg-contact">
                    <div className='flex flex-col'>
                        <h1 className='tittle-contact'>Estamos para ayudarte</h1>
                        <p className='text-contact'>Contáctanos</p>
                    </div>
                    <div className="imgContact">
                        <img src={imgContact} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
