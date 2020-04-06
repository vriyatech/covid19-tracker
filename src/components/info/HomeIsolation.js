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
        
        
        <h3>Home Isolation comming soon..</h3>
        <br/>
        
        
        
         


            
    </div>
    );
  }
}

export default HomeIsolation;