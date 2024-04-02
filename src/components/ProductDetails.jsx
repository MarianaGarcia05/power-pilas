import Navbar from './Navbar';
import '../styles/ProductDetails.css';
import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';

const ProductDetails = () => {
  // tarer la informacion del producto necesario
  const { state } = useLocation();
  const product = state.product;

  // no admitir valores negativos en la cantidad de productos
  const [value, setValue] = useState(1);
  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue >= 0 ? inputValue : '');
  };

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

          <div className="prices-ProductDetails">
            <p className='line-through' >{product.before}</p>
            <p>|</p>
            <p className='text-zinc-700' >{product.price}</p>
          </div>

          <div className="paymentMethods">
            <h1>Medios de pago</h1>
            <div className="paymentMethods-img">
              <img className='visaCard' src={product.paymentMethod1} />
              <img className='bancolombiaCard' src={product.paymentMethod2} />
              <img className='mastercardCard' src={product.paymentMethod3} />
            </div>
          </div>

          <div className="cant">
            <h1>Cantidad</h1>
            <input 
              min={1}
              type="number" 
              value={value} 
              onChange={handleChange} 
            />
          </div>

          <div className="addToCart">
            <button>Agregar al carrito</button>
          </div>
          
        </div>

      </div>

      <div className="contentProductDetails2">
        <div>
          <h1>Descripción</h1>
          <p>{product.description}</p>
        </div>
        <div>
          <h1>Modo de entrega</h1>
          <p>{product.delivery}</p>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
