import React from 'react';
import '../styles/Section.css';
import * as MdIcon from 'react-icons/md';
import * as GiIcon from 'react-icons/gi';
import * as TbIcon from 'react-icons/tb';

const Section = () => {
    return (
        <div className='contenSection'>
            <div className='flex flex-col items-center'>
                <div className="circle">
                    <MdIcon.MdVerified className='text-5xl' />
                </div>
                <h1 className="tittleSection">Compras seguras</h1>
            </div>

            <div className='flex flex-col items-center'>
                <div className="circle">
                    <GiIcon.GiTakeMyMoney className='text-5xl'  />
                </div>
                <h1 className="tittleSection">Multiples medios de pago</h1>
            </div>

            <div className='flex flex-col items-center'>
                <div className="circle">
                    <MdIcon.MdCurrencyExchange className='text-5xl' />
                </div>
                <h1 className="tittleSection">Gestiona tus cambios</h1>
            </div>

            <div className='flex flex-col items-center'>
                <div className="circle">
                    <TbIcon.TbProgressAlert className='text-5xl' />
                </div>
                <h1 className="tittleSection">Acerca de envíos</h1>
            </div>
        </div>
    )
}

export default Section
