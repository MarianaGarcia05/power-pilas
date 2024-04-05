import React, { useState } from 'react';
import '../styles/Sidebar.css';
import * as BiIcons from 'react-icons/bi';
import * as RiIcons from 'react-icons/ri';
import * as PiIcons from 'react-icons/pi';
import * as FaIcons from 'react-icons/fa';
import * as Fa6Icons from 'react-icons/fa6';

const Sidebar = () => {
    return (
        <div className="contentSidebar">
            <div className="tittleSidebar">
                <h1>Navegación</h1>
            </div>

            <ul className='itemsSidebar'>
                <li>
                    <a href="/">
                        <Fa6Icons.FaHouseChimney className='iconSidebar' />
                        <p>Inicio</p>
                        <span className='alignRight'>
                            <BiIcons.BiPlusMedical className='text-base' />
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FaIcons.FaShoppingBag className='iconSidebar' />
                        <p>Productos</p>
                        <span className='alignRight'>
                            <BiIcons.BiPlusMedical className='text-base' />
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <PiIcons.PiPhoneCallFill className='iconSidebar' />
                        <p>Contacto</p>
                        <span className='alignRight'>
                            <BiIcons.BiPlusMedical className='text-base' />
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <RiIcons.RiFileList3Fill className='iconSidebar' />
                        <p>Políticas</p>
                        <span className='alignRight'>
                            <BiIcons.BiPlusMedical className='text-base' />
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FaIcons.FaClipboardList className='iconSidebar' />
                        <p>Encuesta satisfacción</p>
                        <span className='alignRight'>
                            <BiIcons.BiPlusMedical className='text-base' />
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
