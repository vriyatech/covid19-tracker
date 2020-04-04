import React from 'react'
// import SimpleImageSlider from "react-simple-image-slider";
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import img1 from '../images/who_test/fifa-who-step-1.png'
import img2 from '../images/who_test/fifa-who-step-2.png'
import img3 from '../images/who_test/fifa-who-step-3.png'
import img4 from '../images/who_test/fifa-who-step-4.png'
import img5 from '../images/who_test/fifa-who-step-5.png'


class ImageSlider extends React.Component {
    render() {
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };
    // render() {
    //     const images = [
    //         { url: img1 },
    //         { url: img2 },
    //         { url: img3 },
    //         { url: img4 },
    //         { url: img5 },
    //         { url: img6 },
    //         { url: img7 },
    //         { url: img8 },
    //     ];

        return (
            // <div className='responsive'>
            //     <SimpleImageSlider
            //         width={1200}
            //         height={600}
            //         images={images}
            //     />
            // </div>
            <div className="center" >
            
            <Slider {...settings}>
              <div><img src ={img1} /></div>
              <div><img src ={img2} /></div>
              <div><img src ={img3} /></div>
              <div><img src ={img4} /></div>
              <div><img src ={img5} /></div>
               
            </Slider>
          </div>
        );
    }
}

export default ImageSlider;