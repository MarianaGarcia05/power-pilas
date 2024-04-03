import React from 'react';
import '../styles/Section.css';
import * as MdIcon from 'react-icons/md';
import * as LuIcon from 'react-icons/lu';
import * as TbIcon from 'react-icons/tb';

const Section = () => {
    return (
        <div className='contenSection'>
            <div className='flex flex-col items-center'>
                <div className="circle">
                    <MdIcon.MdVerifiedUser className='text-5xl' />
                </div>
                <h1 className="tittleSection">Compras seguras</h1>
            </div>

            <div className='flex flex-col items-center'>
                <div className="circle">
                    <LuIcon.LuPackage  className='text-5xl'  />
                </div>
                <h1 className="tittleSection">Envíos</h1>
            </div>

            <div className='flex flex-col items-center'>
                <div className="circle">
                    <MdIcon.MdHeadsetMic  className='text-5xl' />
                </div>
                <h1 className="tittleSection">Atención al cliente</h1>
            </div>

            <div className='flex flex-col items-center'>
                <div className="circle">
                    <TbIcon.TbProgressAlert className='text-5xl' />
                </div>
                <h1 className="tittleSection">Servicios de instalación</h1>
            </div>
        </div>
    )
}

export default Section
