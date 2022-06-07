import React from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImgSlider.css';
import Slider from "react-slick";

function ImgSlider(){

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }

    return(
        <div className="imgSlider">
            <Slider className="imgSlider__slider" {...settings}>
                <div className="imgSlider__wrap">
                    <a>
                        <img src="/images/slider-badag.jpg" alt=""/>
                    </a>
                </div>
                <div className="imgSlider__wrap">
                    <a>
                        <img src="/images/slider-badging.jpg" alt=""/>
                    </a>
                </div>
                <div className="imgSlider__wrap">
                    <a>
                        <img src="/images/slider-scale.jpg" alt=""/>
                    </a>
                </div>  
                <div className="imgSlider__wrap">
                    <a>
                        <img src="/images/slider-scales.jpg" alt=""/>
                    </a>
                </div>            
            </Slider>
        </div>
    )
}

export default ImgSlider;