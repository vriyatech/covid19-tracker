import React, { Component } from 'react'
import {
  HashRouter  as Router, Route, Link
} from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Container,
    Row,
    Col
  } from 'reactstrap';
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined
} from "@ant-design/icons";
import '../App.css'
import ipage_n_e from '../../data/ipage_n_e.yml'



class Who_Info extends Component{
  constructor(props) {
    super(props);
    this.state = {
     
      lan: window.localStorage.getItem("lan") ? window.localStorage.getItem("lan") : window.localStorage.setItem("lan", 'np')

    }
     
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }


 

  render(){

    return (
      
    
    <div className="context">
        
       
          {/* <label name='set_language'>{this.state.lan==='np'?'भाषा परिवर्तनको लागि कृपया यहाँ क्लिक गर्नुहोस्! => ':'Please click here to change language! => '}<input type='button' name='set_language' value={this.state.lan==='np'?'नेपाली':'English'} onClick={this.togglelang}/>
          </label> */}
        <h3>{ipage_n_e.info_page_WHO_Information[this.state.lan]}</h3>
        <small>{ipage_n_e.info_SOURCE[this.state.lan]}</small><br/>
        {/* <small>{ipage_n_e.info_DISCLAIMER[this.state.lan]}</small> */}

            {/* <h3><u>{ipage_n_e.info_TITLE[this.state.lan]}</u></h3> */}
     
        
        {/* <h3><u>{ipage_n_e.info_OVERVIEW[this.state.lan]}:</u></h3>     */}
            {/* <h4><u>बारेमा</u></h4> */}
            <hr/>
       
        <u>{ipage_n_e.info_ABOUT[this.state.lan]}:</u>   
            <p>{ipage_n_e.info_ABOUT_text[this.state.lan]}</p>
        
            <hr/>
            <u>{ipage_n_e.info_HOW_IT_SPREADS[this.state.lan]}:</u>
            <p>{ipage_n_e.info_HOW_IT_SPREADS_text[this.state.lan]}</p>
            <hr/>
            <u>{ipage_n_e.info_SYMPTOMS[this.state.lan]}:</u>
            
                <p>{ipage_n_e.info_SYMPTOMS_text_p1[this.state.lan]}</p>
                <p>{ipage_n_e.info_SYMPTOMS_text_p2[this.state.lan]}</p>
                <p>{ipage_n_e.info_SYMPTOMS_text_p3[this.state.lan]}</p>
                <ul>
                    <li>{ipage_n_e.info_SYMPTOMS_text_p3_b1[this.state.lan]}</li>
                    <li>{ipage_n_e.info_SYMPTOMS_text_p3_b2[this.state.lan]}</li>
                    <li>{ipage_n_e.info_SYMPTOMS_text_p3_b3[this.state.lan]}</li>
                    <li>{ipage_n_e.info_SYMPTOMS_text_p3_b4[this.state.lan]}</li>
                </ul>
            
            <hr/>
            <u>{ipage_n_e.info_PREVENTION[this.state.lan]}:</u>
            
                <p>{ipage_n_e.info_PREVENTION_text1[this.state.lan]}</p>
                <p>{ipage_n_e.info_PREVENTION_DO[this.state.lan]}:</p>
                <ul>
                    <li>{ipage_n_e.info_PREVENTION_DO1[this.state.lan]}</li>
                    <li>{ipage_n_e.info_PREVENTION_DO2[this.state.lan]}</li>
                    <li>{ipage_n_e.info_PREVENTION_DO3[this.state.lan]}</li>
                    <li>{ipage_n_e.info_PREVENTION_DO4[this.state.lan]}</li>
                </ul>
                <hr/>
                <p>{ipage_n_e.info_PREVENTION_DONT[this.state.lan]}:</p>
                <ul>
                    <li>{ipage_n_e.info_PREVENTION_DONT1[this.state.lan]}</li>
                    
                </ul>

            
            <hr/>
            <ul><u>{ipage_n_e.info_TREATMENTS[this.state.lan]}:</u></ul>
            
                <p>{ipage_n_e.info_TREATMENTS_text[this.state.lan]}</p>
                <p><u>{ipage_n_e.info_SELF_CARE[this.state.lan]}:</u></p>
                <p>{ipage_n_e.info_SELF_CARE_text[this.state.lan]}:</p>
                <ul>
                    <li>{ipage_n_e.info_SELF_CARE_text_b1[this.state.lan]}</li>
                    <li>{ipage_n_e.info_SELF_CARE_text_b2[this.state.lan]}</li>
                    <li>{ipage_n_e.info_SELF_CARE_text_b3[this.state.lan]}</li>
                    <li>{ipage_n_e.info_SELF_CARE_text_b4[this.state.lan]}</li>
                </ul>   
            
            <hr/>
            <u>{ipage_n_e.info_MEDICAL_TREATMENTS[this.state.lan]}</u>
            {ipage_n_e.info_MEDICAL_TREATMENTS_text[this.state.lan]}
         
    </div>
    );
  }
}

export default Who_Info;