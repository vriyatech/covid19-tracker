import React, { Component } from 'react'  
import CommingSoon from '../images/Homepage/Heatmap_Coming_Soon.jpeg'
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

    togglelang = () => this.state.lan ==='en'?this.setState({lan:'np'}):this.setState({lan:'en'});
    
    componentDidMount(){
    };
      
    render() {
      return (<div className ='container-fluid'>
        <div className="row">
          <div className="col"><img src={CommingSoon} width='500px' height='400px'/></div>
         
          <div className="col" style={{alignSelf:"center",textAlign:"justify"}}>
          <hr/>
          {/* <u><label name='set_language'>{this.state.lan==='np'?'भाषा परिवर्तनको लागि कृपया यहाँ क्लिक गर्नुहोस्! => ':'Please click here to change language! => '}<input type='button' name='set_language' value={this.state.lan==='np'?'नेपाली':'English'} onClick={this.togglelang}/></label></u> */}
          {/* <h5><u>{symptom_n_e.SYM_Disclaimer[this.state.lan]}:</u></h5> */}
          <p>{symptom_n_e.Home_CheckSymptom_Notice[this.state.lan]}<a href='/termofservices'>&nbsp;{symptom_n_e.Terms_of_Service[this.state.lan]}&nbsp;</a>{symptom_n_e.Home_CheckSymptom_Notice_L[this.state.lan]}</p>
          {/* <h5><u>{symptom_n_e.Home_CheckSymptom_How_Are_you_feeling_title[this.state.lan]}</u></h5>
          <p>{symptom_n_e.Home_CheckSymptom_How_Are_you_feeling_p1[this.state.lan]}</p> */}
          {/* <p>{symptom_n_e.Home_CheckSymptom_How_Are_you_feeling_p2[this.state.lan]}</p> */}
         <hr/>
         <Link to='/tracksymptoms'><input type='button' className ='btn-primary' value ={symptom_n_e.Home_CheckSymptom_Click[this.state.lan]}/></Link>
          </div>
          </div>
        </div>
      );
      
      
    }
  }
export default CheckSymptoms_home;
