import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import img1 from '../images/slider/covid-19-symptoms-v03.png'
import img2 from '../images/slider/COVID19-symptoms.png'
import img3 from '../images/slider/ESx80erU4AATrBC.jpg'
import img4 from '../images/slider/ESXzdzJWsAAdkku.jpg'
import img5 from '../images/slider/seek_medical_advice.jpg'
import img6 from '../images/slider/social_distancing.png'
import img7 from '../images/slider/stay_home.jpg'
import img8 from '../images/slider/wash_hands_CDC.jpg'
import Slider from "react-slick";
import "../index.css";


class ImageSlider extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };

        const images = [
            { url: img1 },
            { url: img2 },
            { url: img3 },
            { url: img4 },
            { url: img5 },
            { url: img6 },
            { url: img7 },
            { url: img8 },
        ];

        const width = '100%';

        return (
            // <div className='responsive single-slider'>
            //     <SimpleImageSlider
            //         width={width}
            //         height={600}
            //         images={images}
            //     />
            // </div>
            <div className="container">
        <Slider {...settings}>
          <div>
            <img src={img1} />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
        </Slider>
      </div>
        );
    }
}

export default ImageSlider;