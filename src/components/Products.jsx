import React from 'react';
import '../styles/Products.css';

// datos quemados
const data = [
    {
        id:1,
        img: `/imgPilas/img1.png`,
        name: `Blister Murata/Sony CR2430 (Pack x5 unds) – 3V`,
        description: `Las baterías de litio se utilizan para diferentes aplicaciones en la industria informática y 
        automotriz,  telecomunicaciones, industria médica y en una creciente variedad de dispositivos portátiles`,
        price: `$23.000 COP`,
        oldPrice: `25.000 COP`,
        paymentMethods: [ "/paymentMethods/mastercardImg.webp", "/paymentMethods/visaImg.webp"],
        delivery: `En la ciudad de Bucaramanga y Área Metropolitana se entrega inmediatamente. Ciudades principales 
        se entrega entre 2 a 3 días hábiles. Destinos especiales se entrega entre 3 a 5 días hábiles.`
    },
    {
        id:2,
        img: `/imgPilas/sony.png`,
        name: `Blister Murata/Sony Óxido de Plata SR936SW / 394 (pack x5)`,
        description: `Sony Óxido de Plata SR936SW / 394`,
        price: `$20.400  COP`,
        oldPrice: `25.000 COP`,
        paymentMethods: [ "/paymentMethods/mastercardImg.webp", "/paymentMethods/visaImg.webp"],
        delivery: `En la ciudad de Bucaramanga y Área Metropolitana se entrega inmediatamente. Ciudades principales 
        se entrega entre 2 a 3 días hábiles. Destinos especiales se entrega entre 3 a 5 días hábiles.`
    },
    {
        id:3,
        img: `/imgPilas/img2.png`,
        name: `Blister Murata/Sony Lithium CR2025 (pack x5)`,
        description: `CR2025`,
        price: `$23.000 COP`,
        oldPrice: `25.000 COP`,
        paymentMethods: [ "/paymentMethods/mastercardImg.webp", "/paymentMethods/visaImg.webp"],
        delivery: `En la ciudad de Bucaramanga y Área Metropolitana se entrega inmediatamente. Ciudades principales 
        se entrega entre 2 a 3 días hábiles. Destinos especiales se entrega entre 3 a 5 días hábiles.`
    },
    {
        id:4,
        img: `/imgPilas/img3.png`,
        name: `Blister Murata/Sony Óxido de Plata SR512SW / 335 (pack x5)`,
        description: `Sony Óxido de Plata SR512SW / 335`,
        price: `$13.100 COP`,
        oldPrice: `25.000 COP`,
        paymentMethods: [ "/paymentMethods/mastercardImg.webp", "/paymentMethods/visaImg.webp"],
        delivery: `En la ciudad de Bucaramanga y Área Metropolitana se entrega inmediatamente. Ciudades principales 
        se entrega entre 2 a 3 días hábiles. Destinos especiales se entrega entre 3 a 5 días hábiles.`
    },
    {
        id:5,
        img: `/imgPilas/img4.png`,
        name: `Blister Murata/Sony Alcalina LR41/192 (pack x5)`,
        description: `Sony Óxido de Plata SR416SW / 337`,
        price: `$13.300 COP`,
        oldPrice: `25.000 COP`,
        paymentMethods: [ "/paymentMethods/mastercardImg.webp", "/paymentMethods/visaImg.webp"],
        delivery: `En la ciudad de Bucaramanga y Área Metropolitana se entrega inmediatamente. Ciudades principales 
        se entrega entre 2 a 3 días hábiles. Destinos especiales se entrega entre 3 a 5 días hábiles.`        
    },
    {
        id:6,
        img: `/imgPilas/energizer.png`,
        name: `Murata/Sony CR1620 (blister x5 unds) – 3V`,
        description: `Las baterías de litio se utilizan para diferentes aplicaciones en la industria informática y
        automotriz, telecomunicaciones, industria médica y en una creciente variedad de dispositivos portátiles`,
        price: `$16.000 COP`,
        oldPrice: `25.000 COP`,
        paymentMethods: [ "/paymentMethods/mastercardImg.webp", "/paymentMethods/visaImg.webp"],
        delivery: `En la ciudad de Bucaramanga y Área Metropolitana se entrega inmediatamente. Ciudades principales 
        se entrega entre 2 a 3 días hábiles. Destinos especiales se entrega entre 3 a 5 días hábiles.`        
    },
]
const Products = () => {
    return (
        <div className='contentProducts'>
            <div className='products'>
                {data.map((products, index) => (
                    <button className='btnProducts flex' key={index}>
                        <div className='bgImg-Products'>
                            <img className='imgProducts' src={products.img} alt="" />
                        </div>

                        <div className='column'>
                            <p className='nameProducts'>{products.name}</p>
                            <p className='descriptionProducts'>{products.description}</p>
                            <p className='priceProducts'>{products.price}</p>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Products
