import React from 'react';
import '../styles/ProductsView.css'
import Sidebar from '../components/Sidebar';
import Products from '../components/Products';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const ProductsView = () => {
    return (
        <>
            <Navbar />
            <div className='contentProductsView'>
                <div className='side'>
                    <Sidebar />
                </div>
                <div className="linea-vertical"></div>
                <div className='ml-24'>
                    <Products />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductsView
