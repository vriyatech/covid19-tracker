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
            <div style={{maxWidth:'600px'}} >
            
            <Slider {...settings}>
              <div><h3><img src ={img1} width='100%' height='auto' max-width='1000px' /></h3></div>
              <div><h3><img src ={img2} width='100%' height='auto' max-width='1000px'/></h3></div>
              <div><h3><img src ={img3} width='100%' height='auto' max-width='1000px'/></h3></div>
              <div><h3><img src ={img4} width='100%' height='auto' max-width='1000px'/></h3></div>
              <div><h3><img src ={img5} width='100%' height='auto' max-width='1000px'/></h3></div>
               
            </Slider>
          </div>
        );
    }
}

export default ImageSlider;