import React from 'react';
import Navbar from './Navbar';
import '../styles/Contact.css';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as Fa6Icons from 'react-icons/fa6';

const Contact = () => {
    return (
        <>
            <div className="nav">
                <Navbar />
            </div>

            <div className="content">
                <div className="contact">
                    <h1 className='pt-28'>Estamos para ayudarte</h1>
                    <p>Contáctanos</p>
                </div>

                <div className="options">
                    <a href="#" className='card'>
                        <button>
                            <div className="flex justify-between">
                                <Fa6Icons.FaLocationDot className='iconContact' />
                                <span className='flex flex-col'>
                                    <h2 className='tittle-card'>Ubicación</h2>
                                    <p className='info-card'>Calle 10 No. 20 35 Oficina 295, <br /> Centro Comercial Unicentro</p>
                                </span>
                            </div>
                        </button>
                    </a>
                    <a href="#" className='card'>
                        <button>
                            <div className="flex justify-between">
                                <FaIcons.FaPhoneAlt className='iconContact' />
                                <span className='flex flex-col'>
                                    <h2 className='tittle-card'>Llámanos</h2>
                                    <p className='info-card'>324 215 3045</p>
                                </span>
                            </div>
                        </button>
                    </a>
                    <a href="#" className='card'>
                        <button>
                            <div className="flex justify-between">
                                <MdIcons.MdAttachEmail className='iconContact' />
                                <span className='flex flex-col'>
                                    <h2 className='tittle-card'>Correo</h2>
                                    <p className='info-card'>joyeria@gmail.com</p>
                                </span>
                            </div>
                        </button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Contact
