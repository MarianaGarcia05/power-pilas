import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/ProductDetails.css';
import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const ProductDetails = () => {
  // tarer la informacion del producto necesario
  const { state } = useLocation();
  const product = state.product;
  const [isOpen, setIsOpen] = useState(false);

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
          <button className='contentEntrega' onClick={() => setIsOpen((prev) => !prev)}>
            <h1>Modo de entrega</h1>
            {!isOpen ? (
              <FaIcons.FaCaretDown className='text-white' />
            ) : (
              <FaIcons.FaCaretUp className='text-white' />
            )}
          </button>
          {isOpen && (
            <div className="itemsDetails">
              <p>{product.item1}</p>
              <p>{product.item2}</p>
              <p>{product.item3}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
