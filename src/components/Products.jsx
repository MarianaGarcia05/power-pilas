import React from 'react';
import '../styles/Products.css';

// datos quemados
const data = [
    {
        img: `/imgPilas/img1.png`,
        name: `Blister Murata/Sony CR2430 (Pack x5 unds) – 3V`,
        description: `Las baterías de litio se utilizan para diferentes aplicaciones en la industria informática y 
        automotriz,  telecomunicaciones, industria médica y en una creciente variedad de dispositivos portátiles`,
        price: `$23.000 COP`

    },
    {
        img: `/imgPilas/sony.png`,
        name: `Blister Murata/Sony Óxido de Plata SR936SW / 394 (pack x5)`,
        description: `Sony Óxido de Plata SR936SW / 394`,
        price: `$20.400  COP`
    },
    {
        img: `/imgPilas/img2.png`,
        name: `Blister Murata/Sony Lithium CR2025 (pack x5)`,
        description: `CR2025`,
        price: `$23.000 COP`
    },
    {
        img: `/imgPilas/img3.png`,
        name: `Blister Murata/Sony Óxido de Plata SR512SW / 335 (pack x5)`,
        description: `Sony Óxido de Plata SR512SW / 335`,
        price: `$13.100 COP`
    },
    {
        img: `/imgPilas/img4.png`,
        name: `Blister Murata/Sony Alcalina LR41/192 (pack x5)`,
        description: `Sony Óxido de Plata SR416SW / 337`,
        price: `$13.300 COP`
    },
    {
        img: `/imgPilas/energizer.png`,
        name: `Murata/Sony CR1620 (blister x5 unds) – 3V`,
        description: `Las baterías de litio se utilizan para diferentes aplicaciones en la industria informática y
        automotriz, telecomunicaciones, industria médica y en una creciente variedad de dispositivos portátiles`,
        price: `$16.000 COP`
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
