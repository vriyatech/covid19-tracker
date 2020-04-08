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
    Col,
    Table
  } from 'reactstrap';
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined
} from "@ant-design/icons";
import '../App.css'
import ipage_n_e from '../../data/ipage_n_e.yml'



class SomeoneIKnowIsInfected extends Component{
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
        
        
        <h3>{ipage_n_e.info_SomeOneIKnowIsInfected[this.state.lan]}</h3>
        <small>{ipage_n_e.info_SomeOneIKnowIsInfected_Source[this.state.lan]}</small><br/><br/>
        
        <p>{ipage_n_e.info_SomeOneIKnowIsInfected_p[this.state.lan]}</p><br/>
        <h4>{ipage_n_e.info_SomeOneIKnowIsInfected_t1[this.state.lan]}</h4>
        <ul>
          <li>{ipage_n_e.info_SomeOneIKnowIsInfected_t1_p1[this.state.lan]}</li>
          <li>{ipage_n_e.info_SomeOneIKnowIsInfected_t1_p2[this.state.lan]}</li>
          <li>{ipage_n_e.info_SomeOneIKnowIsInfected_t1_p3[this.state.lan]}</li>
          <li>{ipage_n_e.info_SomeOneIKnowIsInfected_t1_p4[this.state.lan]}</li>
          <li>{ipage_n_e.info_SomeOneIKnowIsInfected_t1_p5[this.state.lan]}</li>
          <li>{ipage_n_e.info_SomeOneIKnowIsInfected_t1_p6[this.state.lan]}</li>
          <li>{ipage_n_e.info_SomeOneIKnowIsInfected_t1_p7[this.state.lan]}</li>
          <li>{ipage_n_e.info_SomeOneIKnowIsInfected_t1_p8[this.state.lan]}</li>
          <li>{ipage_n_e.info_SomeOneIKnowIsInfected_t1_p9[this.state.lan]}</li>
          <li>{ipage_n_e.info_SomeOneIKnowIsInfected_t1_p10[this.state.lan]}</li>
          <li>{ipage_n_e.info_SomeOneIKnowIsInfected_t1_p11[this.state.lan]}
            <ul>
              <li>{ipage_n_e.info_SomeOneIKnowIsInfected_t1_p11_p1[this.state.lan]}</li>
              <li>{ipage_n_e.info_SomeOneIKnowIsInfected_t1_p11_p2[this.state.lan]}</li>
            </ul>
          </li>
          <li>{ipage_n_e.info_SomeOneIKnowIsInfected_t1_p12[this.state.lan]}</li>
          <li>{ipage_n_e.info_SomeOneIKnowIsInfected_t1_p13[this.state.lan]}
            <ul>
              <li>{ipage_n_e.info_SomeOneIKnowIsInfected_t1_p13_p1[this.state.lan]}</li> 
            </ul>
          </li>
          <li>{ipage_n_e.info_SomeOneIKnowIsInfected_t1_p14[this.state.lan]}
            <ul>
              <li>{ipage_n_e.info_SomeOneIKnowIsInfected_t1_p14_p1[this.state.lan]}</li>
              <li>{ipage_n_e.info_SomeOneIKnowIsInfected_t1_p14_p2[this.state.lan]}</li>
              <li>{ipage_n_e.info_SomeOneIKnowIsInfected_t1_p14_p3[this.state.lan]}</li>
            </ul>
          </li>
          <li>{ipage_n_e.info_SomeOneIKnowIsInfected_t1_p15[this.state.lan]}</li>
          <li>{ipage_n_e.info_SomeOneIKnowIsInfected_t1_p16[this.state.lan]}</li>

        </ul>
        
        
        
        
         


            
    </div>
    );
  }
}

export default SomeoneIKnowIsInfected;