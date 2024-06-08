import React from 'react';
import Slider from 'react-slick';
import '../styles/Categories.css';
import 'slick-carousel/slick/slick.css';
import * as Fa6Icons from 'react-icons/fa6'
import 'slick-carousel/slick/slick-theme.css';
import datosCategorias from '../json/datosCategorias.json';

const CustomArrowPrev = ({ onClick }) => (
    <button type="button" onClick={onClick} className="flechaSliderL">
        <Fa6Icons.FaCaretLeft className='iconsFlecha' />
    </button>
);

const CustomArrowNext = ({ onClick }) => (
    <button type="button" onClick={onClick}className="flechaSliderR">
        <Fa6Icons.FaCaretRight className='iconsFlecha' />
    </button>
);

const Categories = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <CustomArrowPrev />,
        nextArrow: <CustomArrowNext />,
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 4
                },
            },
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 2
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1
                },
            },
        ]
    };
    return (
        <div className='contentCategories my-28'>
            <h1 className="tittleCategories"><span className='text-teal-600'>Categorias</span> Especiales</h1>
            <div className="sliderCategories">
                <Slider {...settings}>
                    {datosCategorias.map((Categories) => (
                        <button className='btnCategories' key={Categories.id}>
                            <div>
                                <img className='imgPilas' src={Categories.img} alt="" />
                            </div>

                            <div>
                                <p>{Categories.name}</p>
                            </div>
                        </button>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Categories;
