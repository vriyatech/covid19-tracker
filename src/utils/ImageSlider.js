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

class ImageSlider extends React.Component {
    render() {
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

        return (
            <div className='responsive'>
                <SimpleImageSlider
                    width={1200}
                    height={600}
                    images={images}
                />
            </div>
        );
    }
}

export default ImageSlider;