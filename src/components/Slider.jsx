import React from 'react';
import '../styles/Slider.css';
import datosMarcas from '../json/datosMarcas.json';

const Slider = () => {
    return (
        <div className='mt-18 mb-32'>
            <h1 className='tittleMarcas'><span className='text-teal-600'>Variedad</span> de marcas</h1>
            <div className='contentSlider'>
                {datosMarcas.map((marca) => (
                    <figure key={marca.id}>
                        <img src={marca.img} />
                        <div className="informationSlider">
                            <h2>{marca.name}</h2>
                            <center>
                                <p>{marca.description}</p>
                            </center>
                        </div>
                    </figure>
                ))}
            </div>
        </div>
    )
}

export default Slider
