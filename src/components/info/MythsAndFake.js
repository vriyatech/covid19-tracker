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



class MythsAndFake extends Component{
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
        
        
        <h3>{ipage_n_e.info_MythsAndFakeNews[this.state.lan]}</h3>
        <small>{ipage_n_e.info_SOURCE[this.state.lan]}</small><br/><br/>
        
        <p>{ipage_n_e.info_MythsAndFakeNews_p1[this.state.lan]}</p><br/>
        <h4>{ipage_n_e.info_MythsAndFakeNews_t1[this.state.lan]}</h4>
        <p>{ipage_n_e.info_MythsAndFakeNews_t1_p1[this.state.lan]}</p><br/>
        <h4>{ipage_n_e.info_MythsAndFakeNews_t2[this.state.lan]}</h4>
        <p>{ipage_n_e.info_MythsAndFakeNews_t2_p1[this.state.lan]}</p><br/>
        <h4>{ipage_n_e.info_MythsAndFakeNews_t3[this.state.lan]}</h4>
        <p>{ipage_n_e.info_MythsAndFakeNews_t3_p1[this.state.lan]}</p><br/>
        <h4>{ipage_n_e.info_MythsAndFakeNews_t4[this.state.lan]}</h4>
        <p>{ipage_n_e.info_MythsAndFakeNews_t4_p1[this.state.lan]}</p><br/>
        <h4>{ipage_n_e.info_MythsAndFakeNews_t5[this.state.lan]}</h4>
        <p>{ipage_n_e.info_MythsAndFakeNews_t5_p1[this.state.lan]}</p><br/>
        <h4>{ipage_n_e.info_MythsAndFakeNews_t6[this.state.lan]}</h4>
        <p>{ipage_n_e.info_MythsAndFakeNews_t6_p1[this.state.lan]}</p><br/>
        <h4>{ipage_n_e.info_MythsAndFakeNews_t7[this.state.lan]}</h4>
        <p>{ipage_n_e.info_MythsAndFakeNews_t7_p1[this.state.lan]}</p><br/>
        <h4>{ipage_n_e.info_MythsAndFakeNews_t8[this.state.lan]}</h4>
        <p>{ipage_n_e.info_MythsAndFakeNews_t8_p1[this.state.lan]}</p><br/>
        <h4>{ipage_n_e.info_MythsAndFakeNews_t9[this.state.lan]}</h4>
        <p>{ipage_n_e.info_MythsAndFakeNews_t9_p1[this.state.lan]}</p><br/>
        <h4>{ipage_n_e.info_MythsAndFakeNews_t10[this.state.lan]}</h4>
        <p>{ipage_n_e.info_MythsAndFakeNews_t10_p1[this.state.lan]}</p><br/>
        <h4>{ipage_n_e.info_MythsAndFakeNews_t11[this.state.lan]}</h4>
        <p>{ipage_n_e.info_MythsAndFakeNews_t11_p1[this.state.lan]}</p><br/>
        <h4>{ipage_n_e.info_MythsAndFakeNews_t12[this.state.lan]}</h4>
        <p>{ipage_n_e.info_MythsAndFakeNews_t12_p1[this.state.lan]}</p><br/>
        <h4>{ipage_n_e.info_MythsAndFakeNews_t13[this.state.lan]}</h4>
        <p>{ipage_n_e.info_MythsAndFakeNews_t13_p1[this.state.lan]}</p><br/>
        <h4>{ipage_n_e.info_MythsAndFakeNews_t14[this.state.lan]}</h4>
        <p>{ipage_n_e.info_MythsAndFakeNews_t14_p1[this.state.lan]}</p><br/>
        <h4>{ipage_n_e.info_MythsAndFakeNews_t15[this.state.lan]}</h4>
        <p>{ipage_n_e.info_MythsAndFakeNews_t15_p1[this.state.lan]}</p><br/>
         


            
    </div>
    );
  }
}

export default MythsAndFake;