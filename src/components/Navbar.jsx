import React from 'react';
import '../styles/Navbar.css'
import * as TiIcons from 'react-icons/ti'
import * as FaIcons from 'react-icons/fa'
import * as Io5Icons from 'react-icons/io5'
import logoimg from '../assets/img/logo.png';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="column">
        <div className='contentNav'>
          <a href='/' className="flex justify-between">
            <div className="logonav"><img src={logoimg} alt="" className='logoimg' /></div>
            <span className="tituloNav">power <br /> pilas</span>
          </a>

          <div className="buscador-Items mt-4 mx-auto">
            <div className="buscadorNav flex">
              <input placeholder='Indica el nombre del producto' />
              <Io5Icons.IoSearchOutline className='text-xl text-slate-500' />
            </div>
          </div>

          <div className="iconsNav">
            <a href="" className='iconUserNav text-2xl'><FaIcons.FaUserAlt  /></a>
            <a href="" className='iconShopCart text-3xl ml-7'><TiIcons.TiShoppingCart  /></a>
          </div>
        </div>
        <div className="itemsNav">
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/productsView">productos</a></li>
            <li><a href="/contact">Contacto</a></li>
            {/* <li><a href="#">Nosotros</a></li> */}
            {/* <li><a href="#">Servicios</a></li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
