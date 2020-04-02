import React, { Component } from 'react'
import { components } from 'react-select'
import ImageSlider from '../utils/ImageSlider'
import store from '../redux/store'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import "../index.css";
import img1 from '../images/slider/covid-19-symptoms-v03.png'
import img2 from '../images/slider/COVID19-symptoms.png'
import img3 from '../images/slider/ESx80erU4AATrBC.jpg'
import img4 from '../images/slider/ESXzdzJWsAAdkku.jpg'
import img5 from '../images/slider/seek_medical_advice.jpg'
import img6 from '../images/slider/social_distancing.png'
import img7 from '../images/slider/stay_home.jpg'
import img8 from '../images/slider/wash_hands_CDC.jpg'

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

class CheckResult extends Component{
  state=store.getState();
  viewmessage =() =>{
    
    
    switch(this.state.checkSymptom.newRecord.risk){
      // case "no risk": return ReactDOM.render(
      //   <h2 style={{color:"Green"}}>{this.state.checkSymptom.newRecord.risk}</h2>,
      //   document.getElementById('result')
      // );
      
      
      case "Vulnerable": return ReactDOM.render(
        <h2 style={{color:"Red"}}>{this.state.checkSymptom.newRecord.risk}</h2>,
        document.getElementById('result')
      );
      case "Potential": return ReactDOM.render(
        <h2 style={{color:"Yellow"}}>{this.state.checkSymptom.newRecord.risk}</h2>,
        document.getElementById('result')
      );
      default: return ReactDOM.render(
        <h2 style={{color:"Green"}}>{this.state.checkSymptom.newRecord.risk}</h2>,
        document.getElementById('result')
      );
      
      

  }};

  render(){
    return (
      <Carousel
        autoPlay={2000}
        animationSpeed={1000}
        infinite
      >
        <img src={img1} style={{height:'auto',width:'100%'}}/>
        <img src={img2} style={{height:'auto',width:'100%'}}/>
        <img src={img3} style={{height:'auto',width:'100%'}}/>
      </Carousel>
    );
  }


}

export default CheckResult;