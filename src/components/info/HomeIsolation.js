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



class HomeIsolation extends Component{
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
        
        <h3>{ipage_n_e.info_HomeIsolation[this.state.lan]}</h3>
        <br/>
        
        <p>{ipage_n_e.info_HomeIsolation_p[this.state.lan]}</p><br/>
        
        <ul>
          <li>{ipage_n_e.info_HomeIsolation_p_p1[this.state.lan]}</li>
          <li>{ipage_n_e.info_HomeIsolation_p_p2[this.state.lan]}</li>
          <li>{ipage_n_e.info_HomeIsolation_p_p3[this.state.lan]}</li>
          <li>{ipage_n_e.info_HomeIsolation_p_p4[this.state.lan]}</li>
          <li>{ipage_n_e.info_HomeIsolation_p_p5[this.state.lan]}</li>
          <li>{ipage_n_e.info_HomeIsolation_p_p6[this.state.lan]}</li>
          <li>{ipage_n_e.info_HomeIsolation_p_p7[this.state.lan]}
            <ul>
              <li>{ipage_n_e.info_HomeIsolation_p_p7_p1[this.state.lan]}</li>
              <li>{ipage_n_e.info_HomeIsolation_p_p7_p2[this.state.lan]}</li>
            </ul>
          </li>
          <li>{ipage_n_e.info_HomeIsolation_p_p8[this.state.lan]}
            <ul>
              <li>{ipage_n_e.info_HomeIsolation_p_p8_p1[this.state.lan]}</li>
              <li>{ipage_n_e.info_HomeIsolation_p_p8_p2[this.state.lan]}</li>
              <li>{ipage_n_e.info_HomeIsolation_p_p8_p3[this.state.lan]}</li>
            </ul>
          </li>
          <li>{ipage_n_e.info_HomeIsolation_p_p9[this.state.lan]}</li>
          <li>{ipage_n_e.info_HomeIsolation_p_p10[this.state.lan]}</li>
          <li>{ipage_n_e.info_HomeIsolation_p_p11[this.state.lan]}</li>
          <li>{ipage_n_e.info_HomeIsolation_p_p12[this.state.lan]}</li>
          <li>{ipage_n_e.info_HomeIsolation_p_p13[this.state.lan]}</li>
          <li>{ipage_n_e.info_HomeIsolation_p_p14[this.state.lan]}</li>

        </ul> 
        
        
        
         


            
    </div>
    );
  }
}

export default HomeIsolation;