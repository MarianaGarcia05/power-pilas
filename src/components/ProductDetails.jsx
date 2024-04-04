import React from 'react';
import Navbar from './Navbar';
import '../styles/ProductDetails.css';
import { useLocation } from 'react-router-dom';

const ProductDetails = () => {
  // tarer la informacion del producto necesario
  const { state } = useLocation();
  const product = state.product;

  return (
    <>
      <Navbar />
      <div className="contentProductDetails">

        <div className="img-ProductDetails">
          <div className="additional-img">
            <img src={product.additionalImg1} />
            <img src={product.additionalImg2} />
            <img src={product.additionalImg3} />
          </div>
          <img className='main-img' src={product.img} />
        </div>

        <div className="info-ProductDetails">
          <h1 className='name-ProductDetails'>{product.name}</h1>
          <p className='description-ProductDetails'>{product.description}</p>
          <div className="contentEntrega shadow-lg shadow-green-800">
            <h1>Modo de entrega</h1>
            <p>{product.delivery}</p>
          </div>
        </div>

      </div>
    </>
  );
};

export default ProductDetails;
