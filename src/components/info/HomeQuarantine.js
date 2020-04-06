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



class HomeQuarantine extends Component{
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
        
        
        <h3>{ipage_n_e.info_HomeQuarantine[this.state.lan]}</h3>
        <br/>
        
        <p>{ipage_n_e.info_HomeQuarantine_p[this.state.lan]}</p><br/>
        <h4>{ipage_n_e.info_HomeQuarantine_t1[this.state.lan]}</h4>
        <ul>
            <li>{ipage_n_e.info_HomeQuarantine_t1_p1[this.state.lan]}</li><br/>
            <li>{ipage_n_e.info_HomeQuarantine_t1_p2[this.state.lan]}</li><br/>

        </ul>
        <h4>{ipage_n_e.info_HomeQuarantine_t2[this.state.lan]}</h4>
        <p>{ipage_n_e.info_HomeQuarantine_t2_p[this.state.lan]}</p>

        <ul>
            <li>{ipage_n_e.info_HomeQuarantine_t2_p_1[this.state.lan]}</li><br/>
            <li>{ipage_n_e.info_HomeQuarantine_t2_p_2[this.state.lan]}</li><br/>
            <li>{ipage_n_e.info_HomeQuarantine_t2_p_3[this.state.lan]}</li><br/>
            <li>{ipage_n_e.info_HomeQuarantine_t2_p_4[this.state.lan]}</li><br/>
            <li>{ipage_n_e.info_HomeQuarantine_t2_p_5[this.state.lan]}</li><br/>
            <li>{ipage_n_e.info_HomeQuarantine_t2_p_6[this.state.lan]}</li><br/>
            <li>{ipage_n_e.info_HomeQuarantine_t2_p_7[this.state.lan]}</li><br/>
            <li>{ipage_n_e.info_HomeQuarantine_t2_p_8[this.state.lan]}</li><br/>
            <li>{ipage_n_e.info_HomeQuarantine_t2_p_9[this.state.lan]}</li><br/>
            <li>{ipage_n_e.info_HomeQuarantine_t2_p_10[this.state.lan]}</li><br/>
            <li>{ipage_n_e.info_HomeQuarantine_t2_p_11[this.state.lan]}</li><br/>
            <li>{ipage_n_e.info_HomeQuarantine_t2_p_12[this.state.lan]}</li><br/>
            <li>{ipage_n_e.info_HomeQuarantine_t2_p_13[this.state.lan]}</li><br/>
            <li>{ipage_n_e.info_HomeQuarantine_t2_p_14[this.state.lan]}</li><br/>

        </ul>
        
         


            
    </div>
    );
  }
}

export default HomeQuarantine;