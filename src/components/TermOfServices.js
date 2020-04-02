import React, { Component } from 'react'  

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
import postsaverecord from './apilink'
import symptom_n_e from '../data/symptom_n_e.yml'

  class TermOfServices extends Component {
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
        lan:'np'
  
      }
       

     
    }

    togglelang = () => this.state.lan ==='en'?this.setState({lan:'np'}):this.setState({lan:'en'});
    

    

    render() {

        
      return (<div className ='context'>
          {/* <u><label name='set_language'>{this.state.lan==='np'?'भाषा परिवर्तनको लागि कृपया यहाँ क्लिक गर्नुहोस्! => ':'Please click here to change language! => '}<input type='button' name='set_language' value={this.state.lan==='np'?'नेपाली':'English'} onClick={this.togglelang}/></label></u> */}
          <h5><u>Terms of Service:</u></h5>
          <p>{symptom_n_e.Terms_of_Service_text[this.state.lan]}</p>
          <h5><u>{symptom_n_e.Terms_of_Service_s1[this.state.lan]}</u></h5>
          <p>{symptom_n_e.Terms_of_Service_s1_p1[this.state.lan]}</p>

          <p>{symptom_n_e.Terms_of_Service_s1_p1_1[this.state.lan]}</p>
          <p>{symptom_n_e.Terms_of_Service_s1_p1_2[this.state.lan]}</p>
          <h5><u>{symptom_n_e.Terms_of_Service_s2[this.state.lan]}</u></h5>
          <p>{symptom_n_e.Terms_of_Service_s2_p1[this.state.lan]}</p>
          <p>{symptom_n_e.Terms_of_Service_s2_p2[this.state.lan]}</p>
          <h5><u>{symptom_n_e.Terms_of_Service_s3[this.state.lan]}</u></h5>
          <p>{symptom_n_e.Terms_of_Service_s3_p1[this.state.lan]}</p>
          <p>{symptom_n_e.Terms_of_Service_s3_p2[this.state.lan]}</p>
          <p>{symptom_n_e.Terms_of_Service_s3_p3[this.state.lan]}</p>
          <h5><u>{symptom_n_e.Terms_of_Service_s4[this.state.lan]}</u></h5>
          <p>{symptom_n_e.Terms_of_Service_s4_p1[this.state.lan]}</p>
         
          
        
        </div>
      );
      
      
    }
  }
export default TermOfServices;
