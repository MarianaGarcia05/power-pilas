import React from 'react';
import '../styles/Products.css';
import { useNavigate } from 'react-router-dom';
import dataProductos from '../datosProductos.json'; 

const Products = () => {
    const navigate = useNavigate();

    const handleProductClick = (product) => {
        navigate(`/productDetails/${product.id}`, { state: { product } });
    };  

    return (
        <div className='contentProducts'>
            <div className='products'>
                {dataProductos.map((product) => (
                    <button key={product.id} className='btnProducts flex items-center' onClick={() => handleProductClick(product)}>
                        <div className='bgImg-Products'>
                            <img className='imgProducts' src={product.img} alt="" />
                        </div>

                        <div className='column'>
                            <p className='nameProducts'>{product.name}</p>
                            <p className='descriptionProducts'>{product.description}</p>
                            {/* <p className='priceProducts'>{product.price}</p> */}
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Products
