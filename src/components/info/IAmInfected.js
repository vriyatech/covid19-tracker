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



class IAmInfected extends Component{
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
        
        
        <h3>{ipage_n_e.info_IAmInfected[this.state.lan]}</h3>
        <small>{ipage_n_e.info_IAmInfected_source[this.state.lan]}</small><br/><br/>
        
        <p>{ipage_n_e.info_IAmInfected_p1[this.state.lan]}</p><br/>
        <h4>{ipage_n_e.info_IAmInfected_t1[this.state.lan]}</h4>
        <ul>
          <li><strong>{ipage_n_e.info_IAmInfected_t1_t1_p[this.state.lan]+' - '}</strong><span>{ipage_n_e.info_IAmInfected_t1_t1_p1[this.state.lan]}</span></li>
          <li><strong>{ipage_n_e.info_IAmInfected_t1_t2_p[this.state.lan]+' - '}</strong><span>{ipage_n_e.info_IAmInfected_t1_t2_p1[this.state.lan]}</span></li>
          <li><strong>{ipage_n_e.info_IAmInfected_t1_t3_p[this.state.lan]+' - '}</strong><span>{ipage_n_e.info_IAmInfected_t1_t3_p1[this.state.lan]}</span></li>
          
        </ul>
        <h4>{ipage_n_e.info_IAmInfected_t2[this.state.lan]}</h4>
        <ul>
          <li><strong>{ipage_n_e.info_IAmInfected_t2_t1_p[this.state.lan]+' - '}</strong><span>{ipage_n_e.info_IAmInfected_t2_t1_p1[this.state.lan]}</span></li>
          <li><strong>{ipage_n_e.info_IAmInfected_t2_t2_p[this.state.lan]+' - '}</strong><span>{ipage_n_e.info_IAmInfected_t2_t2_p1[this.state.lan]}</span></li>
          <li><span>{ipage_n_e.info_IAmInfected_t2_t3_p[this.state.lan]}</span></li>
          
        </ul>
        <h4>{ipage_n_e.info_IAmInfected_t3[this.state.lan]}</h4>
        <ul>
          <li>{ipage_n_e.info_IAmInfected_t3_p[this.state.lan]}</li>
                    
        </ul>
        <h4>{ipage_n_e.info_IAmInfected_t4[this.state.lan]}</h4>
        <ul>
          <li><strong>{ipage_n_e.info_IAmInfected_t4_t1_p[this.state.lan]+' - '}</strong><span>{ipage_n_e.info_IAmInfected_t4_t1_p1[this.state.lan]}</span></li>
          <li><strong>{ipage_n_e.info_IAmInfected_t4_t2_p[this.state.lan]+' - '}</strong><span>{ipage_n_e.info_IAmInfected_t4_t2_p1[this.state.lan]}</span></li>
                    
        </ul>
        <h4>{ipage_n_e.info_IAmInfected_t5[this.state.lan]}</h4>
        <ul>
          <li><strong>{ipage_n_e.info_IAmInfected_t5_t1_p[this.state.lan]+' - '}</strong><span>{ipage_n_e.info_IAmInfected_t5_t1_p1[this.state.lan]}</span></li>
          <li><strong>{ipage_n_e.info_IAmInfected_t5_t2_p[this.state.lan]+' - '}</strong><span>{ipage_n_e.info_IAmInfected_t5_t2_p1[this.state.lan]}</span></li>
          <li><strong>{ipage_n_e.info_IAmInfected_t5_t3_p[this.state.lan]+' - '}</strong><span>{ipage_n_e.info_IAmInfected_t5_t3_p1[this.state.lan]}</span></li>
          
        </ul>
        <h4>{ipage_n_e.info_IAmInfected_t6[this.state.lan]}</h4>
        <ul>
          <li><strong>{ipage_n_e.info_IAmInfected_t6_t1_p[this.state.lan]+' - '}</strong><span>{ipage_n_e.info_IAmInfected_t6_t1_p1[this.state.lan]}</span></li>
          <li><strong>{ipage_n_e.info_IAmInfected_t6_t2_p[this.state.lan]+' - '}</strong><span>{ipage_n_e.info_IAmInfected_t6_t2_p1[this.state.lan]}</span></li>
          <li><strong>{ipage_n_e.info_IAmInfected_t6_t3_p[this.state.lan]+' - '}</strong><span>{ipage_n_e.info_IAmInfected_t6_t3_p1[this.state.lan]}</span></li>
          <li><strong>{ipage_n_e.info_IAmInfected_t6_t4_p[this.state.lan]+' - '}</strong><span>{ipage_n_e.info_IAmInfected_t6_t4_p1[this.state.lan]}</span></li>
          
        </ul>
        <h4>{ipage_n_e.info_IAmInfected_t7[this.state.lan]}</h4>
        <ul>
          <li><strong>{ipage_n_e.info_IAmInfected_t7_t1_p[this.state.lan]+' - '}</strong><span>{ipage_n_e.info_IAmInfected_t7_t1_p1[this.state.lan]}</span></li>
          <li><strong>{ipage_n_e.info_IAmInfected_t7_t2_p[this.state.lan]+' - '}</strong><span>{ipage_n_e.info_IAmInfected_t7_t2_p1[this.state.lan]}</span></li>
          
          
        </ul>
        <h4>{ipage_n_e.info_IAmInfected_t8[this.state.lan]}</h4>
        <ul>
          <li><strong>{ipage_n_e.info_IAmInfected_t8_t1_p[this.state.lan]+' - '}</strong><span>{ipage_n_e.info_IAmInfected_t8_t1_p1[this.state.lan]}</span></li>
          <li><strong>{ipage_n_e.info_IAmInfected_t8_t2_p[this.state.lan]+' - '}</strong><span>{ipage_n_e.info_IAmInfected_t8_t2_p1[this.state.lan]}</span></li>
          <li><strong>{ipage_n_e.info_IAmInfected_t8_t3_p[this.state.lan]+' - '}</strong><span>{ipage_n_e.info_IAmInfected_t8_t3_p1[this.state.lan]}</span></li>
                    
        </ul>
        <h4>{ipage_n_e.info_IAmInfected_t9[this.state.lan]}</h4>
        <ul>
          <li><strong>{ipage_n_e.info_IAmInfected_t9_t1_p[this.state.lan]+' - '}</strong><span>{ipage_n_e.info_IAmInfected_t9_t1_p1[this.state.lan]}</span></li>
          <li><strong>{ipage_n_e.info_IAmInfected_t9_t2_p[this.state.lan]+' - '}</strong><span>{ipage_n_e.info_IAmInfected_t9_t2_p1[this.state.lan]}</span></li>
          <li><strong>{ipage_n_e.info_IAmInfected_t9_t3_p[this.state.lan]+' - '}</strong><span>{ipage_n_e.info_IAmInfected_t9_t3_p1[this.state.lan]}</span></li>
          <li><strong>{ipage_n_e.info_IAmInfected_t9_t4_p[this.state.lan]+' - '}</strong><span>{ipage_n_e.info_IAmInfected_t9_t4_p1[this.state.lan]}</span></li>
          
        </ul>
        <h4>{ipage_n_e.info_IAmInfected_t10[this.state.lan]}</h4>
        <ul>
          <li><strong>{ipage_n_e.info_IAmInfected_t10_t1_p[this.state.lan]+' - '}</strong><span>{ipage_n_e.info_IAmInfected_t10_t1_p1[this.state.lan]}</span></li>
          <li><strong>{ipage_n_e.info_IAmInfected_t10_t2_p[this.state.lan]+' - '}</strong><span>{ipage_n_e.info_IAmInfected_t10_t2_p1[this.state.lan]}</span></li>
                   
        </ul>
        
        
        
        
        
         


            
    </div>
    );
  }
}

export default IAmInfected;