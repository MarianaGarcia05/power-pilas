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

            <div className="contact">

                <div className="content">
                    <h1>Estamos para ayudarte</h1>
                    <p>Conatctanos a través de </p>
                </div>

                <div className="options">
                    <a href="#" className='card'>
                        <button>
                            <div className="information-contact">
                                <Fa6Icons.FaLocationDot className='iconContact' />
                                <div className="texts">
                                    <h2>Tienda física</h2>
                                    <p>Calle 10 No. 20 35 Oficina 295, Centro Comercial Unicentro</p>
                                </div>
                            </div>
                        </button>
                    </a>
                    <a href="#" className='card'>
                        <button>
                            <div className="information-contact">
                                <FaIcons.FaPhoneAlt className='iconContact' />
                                <div className="texts">
                                    <h2>Llámanos</h2>
                                    <p>324 215 3045</p>
                                </div>
                            </div>
                        </button>
                    </a>
                    <a href="#" className='card'>
                        <button>
                            <div className="information-contact">
                                <MdIcons.MdAttachEmail className='iconContact' />
                                <div className="texts">
                                    <h2>Correo</h2>
                                    <p>joyeria@gmail.com</p>
                                </div>
                            </div>
                        </button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Contact
