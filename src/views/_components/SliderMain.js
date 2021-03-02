import React from "react";
import Slider from "react-slick";

import imageWeddingSlide from '../../images/services/fryzury-slubne-mobile-salon.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';




const NextArrow = ({ className, style, onClick }) => {
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
            <FontAwesomeIcon icon={faAngleRight} />
        </div>
    );
}

const PrevArrow = ({ className, style, onClick }) => {
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
            <FontAwesomeIcon icon={faAngleLeft} />
        </div>

    );
}

const SliderMain = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }

    return (
        <div className="container-slider-main">
            <Slider {...settings}>
                <div className="box-image-big">
                    <div className="box-image">
                        <img src={imageWeddingSlide} alt="" className="image" />
                    </div>
                </div>
                <div className="box-image-big">
                    <div className="box-image">
                        <img src={imageWeddingSlide} alt="" className="image" />
                    </div>
                </div>
                <div className="box-image-big">
                    <div className="box-image">
                        <img src={imageWeddingSlide} alt="" className="image" />
                    </div>
                </div>


            </Slider>
        </div>
    );
}

export default SliderMain;