import React from 'react';
import Slider from 'react-slick';
import MainBanner from './MainBanner';
import OfferBanner from './OfferBanner';
import '../styles/BannerCarousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BannerCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <div className="bannerCarousel">
            <Slider {...settings}>
                <div>
                    <MainBanner />
                </div>
                <div>
                    <OfferBanner />
                </div>
            </Slider>
        </div>
    )
}

export default BannerCarousel
