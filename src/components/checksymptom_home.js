import React, { Component } from 'react'  
import VriyaCovidImg from '../images/Homepage/Vriya_COVID19_Tracker_1000x_alt.png'
import {Link} from 'react-router-dom'

// import serializeForm from 'form-serialize'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Container,
    Row,
    Col,
    Table
  } from 'reactstrap'
import symptom_n_e from '../data/symptom_n_e.yml'
import { color } from 'd3';

  class CheckSymptoms_home extends Component {
    constructor(props) {
      super(props);
      this.state = {
        fever:'',
        cough:'',
        breathing:'',
        age:'',
        otherdiseases:'',
        outsidevisit:'',
        rwinfection:'',
        myip:'',
        location:'',
        lan: window.localStorage.getItem("lan") ? window.localStorage.getItem("lan") : window.localStorage.setItem("lan", 'np')
  
      }
       

    }

    
    componentDidMount(){
    };
      
    render() {
      return (<div className ='container-fluid'>
         
        <div className="row">
         
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6"><img src={VriyaCovidImg} width='100%' height='auto'/></div>
         
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" style={{alignSelf:"center",textAlign:"justify"}}>
          {/* <hr/> */}
          {/* <u><label name='set_language'>{this.state.lan==='np'?'भाषा परिवर्तनको लागि कृपया यहाँ क्लिक गर्नुहोस्! => ':'Please click here to change language! => '}<input type='button' name='set_language' value={this.state.lan==='np'?'नेपाली':'English'} onClick={this.togglelang}/></label></u> */}
          {/* <h5><u>{symptom_n_e.SYM_Disclaimer[this.state.lan]}:</u></h5> */}
          {/* <p>{symptom_n_e.Home_CheckSymptom_Notice[this.state.lan]}<a href='/termofservices'>&nbsp;{symptom_n_e.Terms_of_Service[this.state.lan]}&nbsp;</a>{symptom_n_e.Home_CheckSymptom_Notice_L[this.state.lan]}</p> */}
          <p>{this.state.lan==='en'?"Vriya Technology's COVID-19 Tracker provides a platform for collecting and providing real time information regarding the spread of COVID-19 in your local municipality, district, and around the nation. This is an online screening tool to provide information on COVID-19 solely for the purpose to help increase awareness of the spread of COVID-19 by informing Nepalese healthcare systems of relevant information. Only information about symptoms will be collected and shown at an aggregated level. Please review our ":"भ्रिया टेक्नोलोजीको COVID-19 ट्रयाकरले COVID-19 को प्रसारको बारेमा तपाईंको स्थानीय नगरपालिका, जिल्ला र देशभरिका वास्तविक जानकारी सम्बन्धीत तथ्याड़क र सूचना प्रदान गर्न प्लेटफर्म प्रदान गर्दछ। यो अनलाइन स्क्रीनिंग उपकरण केवल COVID-19 को बारेमा जानकारी प्रदान गर्न, यसको संक्रमण बारेमा सचेतना बढाउनु का साथै नेपालको स्वास्थ्य सेवा प्रणालीहरूलाई आवश्यक खबर सूचित गर्न मात्र प्रयोग गरिन्छ। केवल लक्षणहरूको जानकारी सङ्कलन गरेर एकीकृत तहमा प्रस्त्रुत गरेर देखाईनेछ। यस विषयमा तपाईंको कुनै आपत्ति भएमा कृपया हाम्रो"}<a href='/termofservices'>&nbsp;{this.state.lan==='en'?'Terms of Service':'सेवाका सर्तहरु'}&nbsp;</a>{this.state.lan==='en'?'for any concerns.':'हेर्नुहोस्।'}</p>
          {/* <h5><u>{symptom_n_e.Home_CheckSymptom_How_Are_you_feeling_title[this.state.lan]}</u></h5>
          <p>{symptom_n_e.Home_CheckSymptom_How_Are_you_feeling_p1[this.state.lan]}</p> */}
          {/* <p>{symptom_n_e.Home_CheckSymptom_How_Are_you_feeling_p2[this.state.lan]}</p> */}
         <hr/>
         <Link to='/tracksymptoms'><input type='button' className ='nav-bar-icon-u' value ={this.state.lan==='en'?'Fill Symptoms to View Result':'परिणाम हेर्न लक्षणहरू भर्नुहोस्।'}/></Link>
          </div>
          </div>
        </div>
      );
      
      
    }
  }
export default CheckSymptoms_home;
