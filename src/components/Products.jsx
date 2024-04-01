import '../styles/Products.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

// datos quemados
const data = [
    {
        id: 1,
        additionalImg1: `/imgPilas/img1.png`,
        additionalImg2: `/imgPilas/img1.png`,
        additionalImg3: `/imgPilas/img1.png`,
        img: `/imgPilas/img1.png`,
        name: `Blister Murata/Sony CR2430 (Pack x5 unds) – 3V`,
        description: `Las baterías de litio se utilizan para diferentes aplicaciones en la industria informática y 
        automotriz,  telecomunicaciones, industria médica y en una creciente variedad de dispositivos portátiles`,
        price: `$23.000 COP`,
        before: `$25.000 COP`,
        paymentMethod1: `/paymentMethods/visaCard.png`,
        paymentMethod2: `/paymentMethods/bancolombiaCard.png`,
        paymentMethod3: `/paymentMethods/Mastercard.webp`,
        delivery: `En la ciudad de Bucaramanga y Área Metropolitana se entrega inmediatamente. Ciudades principales 
        se entrega entre 2 a 3 días hábiles. Destinos especiales se entrega entre 3 a 5 días hábiles.`
    },
    {
        id: 2,
        additionalImg1: `/imgPilas/sony.png`,
        additionalImg2: `/imgPilas/sony.png`,
        additionalImg3: `/imgPilas/sony.png`,
        img: `/imgPilas/sony.png`,
        name: `Blister Murata/Sony Óxido de Plata SR936SW / 394 (pack x5)`,
        description: `Sony Óxido de Plata SR936SW / 394`,
        price: `$20.400  COP`,
        before: `$25.000 COP`,
        paymentMethod1: `/paymentMethods/visaCard.png`,
        paymentMethod2: `/paymentMethods/bancolombiaCard.png`,
        paymentMethod3: `/paymentMethods/Mastercard.webp`,
        delivery: `En la ciudad de Bucaramanga y Área Metropolitana se entrega inmediatamente. Ciudades principales 
        se entrega entre 2 a 3 días hábiles. Destinos especiales se entrega entre 3 a 5 días hábiles.`
    },
    {
        id: 3,
        additionalImg1: `/imgPilas/img2.png`,
        additionalImg2: `/imgPilas/img2.png`,
        additionalImg3: `/imgPilas/img2.png`,
        img: `/imgPilas/img2.png`,
        name: `Blister Murata/Sony Lithium CR2025 (pack x5)`,
        description: `Las baterías de litio se utilizan para diferentes aplicaciones en la industria informática y automotriz,
        telecomunicaciones, industria médica y en una creciente variedad de dispositivos portátiles.`,
        price: `$23.000 COP`,
        before: `$25.000 COP`,
        paymentMethod1: `/paymentMethods/visaCard.png`,
        paymentMethod2: `/paymentMethods/bancolombiaCard.png`,
        paymentMethod3: `/paymentMethods/Mastercard.webp`,
        delivery: `En la ciudad de Bucaramanga y Área Metropolitana se entrega inmediatamente. Ciudades principales 
        se entrega entre 2 a 3 días hábiles. Destinos especiales se entrega entre 3 a 5 días hábiles.`
    },
    {
        id: 4,
        additionalImg1: `/imgPilas/img3.png`,
        additionalImg2: `/imgPilas/img3.png`,
        additionalImg3: `/imgPilas/img3.png`,
        img: `/imgPilas/img3.png`,
        name: `Blister Murata/Sony Óxido de Plata SR512SW / 335 (pack x5)`,
        description: `Sony Óxido de Plata SR512SW / 335`,
        price: `$13.100 COP`,
        before: `$25.000 COP`,
        paymentMethod1: `/paymentMethods/visaCard.png`,
        paymentMethod2: `/paymentMethods/bancolombiaCard.png`,
        paymentMethod3: `/paymentMethods/Mastercard.webp`,
        delivery: `En la ciudad de Bucaramanga y Área Metropolitana se entrega inmediatamente. Ciudades principales 
        se entrega entre 2 a 3 días hábiles. Destinos especiales se entrega entre 3 a 5 días hábiles.`
    },
    {
        id: 5,
        additionalImg1: `/imgPilas/img4.png`,
        additionalImg2: `/imgPilas/img4.png`,
        additionalImg3: `/imgPilas/img4.png`,
        img: `/imgPilas/img4.png`,
        name: `Blister Murata/Sony Alcalina LR41/192 (pack x5)`,
        description: `Sony Óxido de Plata SR416SW / 337`,
        price: `$13.300 COP`,
        before: `$25.000 COP`,
        paymentMethod1: `/paymentMethods/visaCard.png`,
        paymentMethod2: `/paymentMethods/bancolombiaCard.png`,
        paymentMethod3: `/paymentMethods/Mastercard.webp`,
        delivery: `En la ciudad de Bucaramanga y Área Metropolitana se entrega inmediatamente. Ciudades principales 
        se entrega entre 2 a 3 días hábiles. Destinos especiales se entrega entre 3 a 5 días hábiles.`
    },
    {
        id: 6,
        additionalImg1: `/imgPilas/energizer.png`,
        additionalImg2: `/imgPilas/energizer.png`,
        additionalImg3: `/imgPilas/energizer.png`,
        img: `/imgPilas/energizer.png`,
        name: `Murata/Sony CR1620 (blister x5 unds) – 3V`,
        description: `Las baterías de litio se utilizan para diferentes aplicaciones en la industria informática y
        automotriz, telecomunicaciones, industria médica y en una creciente variedad de dispositivos portátiles`,
        price: `$16.000 COP`,
        before: `$25.000 COP`,
        paymentMethod1: `/paymentMethods/visaCard.png`,
        paymentMethod2: `/paymentMethods/bancolombiaCard.png`,
        paymentMethod3: `/paymentMethods/Mastercard.webp`,
        delivery: `En la ciudad de Bucaramanga y Área Metropolitana se entrega inmediatamente. Ciudades principales 
        se entrega entre 2 a 3 días hábiles. Destinos especiales se entrega entre 3 a 5 días hábiles.`
    },
]
const Products = () => {
    const navigate = useNavigate();

    const handleProductClick = (product) => {
        navigate(`/productDetails/${product.id}`, { state: { product } });
    };   

    return (
        <div className='contentProducts'>
            <div className='products'>
                {data.map((product) => (
                    <button key={product.id} className='btnProducts flex' onClick={() => handleProductClick(product)}>
                        <div className='bgImg-Products'>
                            <img className='imgProducts' src={product.img} alt="" />
                        </div>

                        <div className='column'>
                            <p className='nameProducts'>{product.name}</p>
                            <p className='descriptionProducts'>{product.description}</p>
                            <p className='priceProducts'>{product.price}</p>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Products
