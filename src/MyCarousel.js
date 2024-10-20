import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './MyCarousel.css'

function MyCarousel(){
    var settings = {
        centerMode: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        fade: true,
        autoplaySpeed: 5000,
        useCSS: true,
        className: "center",  
    };
    return(
        <div className="mySliderContainer">
            <Slider {...settings}>
                <div className="slide"><img src="./slide1.jpg"/></div>
                <div className="slide"><img src="./slide2.jpg"/></div>
                <div className="slide"><img src="./slide3.jpg"/></div>
                <div className="slide"><img src="./slide4.jpg"/></div>
            </Slider>
        </div>
    );
}

export default MyCarousel