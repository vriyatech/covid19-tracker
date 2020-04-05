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



class OldPeopleAndPeopleWIssue extends Component{
  constructor(props) {
    super(props);
    this.state = {
    
      lan: window.localStorage.getItem("lan") ? window.localStorage.getItem("lan") : window.localStorage.setItem("lan", 'np')

    }
     
  }

  

  render(){
    

    return (
      
    
      <div className="context">
        
        
        <h3>{ipage_n_e.info_OldPeopleWithMedicalIssue[this.state.lan]}</h3>
        
         <p>{ipage_n_e.info_OldPeopleWithMedicalIssue_p1[this.state.lan]}</p>
         <p>{ipage_n_e.info_OldPeopleWithMedicalIssue_p2[this.state.lan]}</p>
       <hr/>
       <Table>
         <thead>
           <tr>
             <th>{this.state.lan==='en'?'Age Group':'आयु समूह'}</th>
             <th>{this.state.lan==='en'?'Mortality Rate %':'मृत्यु दर%'}</th>
           </tr>
         </thead>
         <tbody>
           <tr>
             <td>{this.state.lan==='en'?'80 +':'८०+'}</td>
             <td>{this.state.lan==='en'?'14.8 %':'१४.८%'}</td>
           </tr>
           <tr>
             <td>{this.state.lan==='en'?'70 - 79':'७० - ७९'}</td>
             <td>{this.state.lan==='en'?'8 %':'८%'}</td>
           </tr>
           <tr>
             <td>{this.state.lan==='en'?'50 - 59':'५० - ५९'}</td>
             <td>{this.state.lan==='en'?'1.3%':'१.३%'}</td>
           </tr>
           <tr>
             <td>{this.state.lan==='en'?'40 -':'४० -'}</td>
             <td>{this.state.lan==='en'?'< 0.5 %':'< ०.५%'}</td>
           </tr>
         </tbody>
       </Table>
       <hr/>

       <p>{ipage_n_e.info_OldPeopleWithMedicalIssue_p3[this.state.lan]}</p>
       <p>{ipage_n_e.info_OldPeopleWithMedicalIssue_p4[this.state.lan]}</p>
        <hr/>
       <Table>
         <thead>
           <tr>
             <th>{this.state.lan==='en'?'Medical Condition':'स्वास्थ्य अवस्था'}</th>
             <th>{this.state.lan==='en'?'Mortality Rate %':'मृत्यु दर%'}</th>
           </tr>
         </thead>
         <tbody>
           <tr>
             <td>{this.state.lan==='en'?'Cardiovascular Disease':'हृदय रोग'}</td>
             <td>{this.state.lan==='en'?'10.5 %':'१०.५%'}</td>
           </tr>
           <tr>
             <td>{this.state.lan==='en'?'Diabetes':'मधुमेह'}</td>
             <td>{this.state.lan==='en'?'7.3 %':'७.३%'}</td>
           </tr>
           <tr>
             <td>{this.state.lan==='en'?'Chronic Respiratory Disease':'जीर्ण श्वसन रोग'}</td>
             <td>{this.state.lan==='en'?'6.3 %':'६.३%'}</td>
           </tr>
           <tr>
             <td>{this.state.lan==='en'?'Hypertension':'उच्च रक्तचाप'}</td>
             <td>{this.state.lan==='en'?'6.0 %':'६.०%'}</td>
           </tr>
           <tr>
             <td>{this.state.lan==='en'?'Cancer':'क्यान्सर'}</td>
             <td>{this.state.lan==='en'?'5.6 %':'५.६%'}</td>
           </tr>
           <tr>
             <td>{this.state.lan==='en'?'No Health Condition':'ककेहि स्वस्थ स्तिथि नभाको'}</td>
             <td>{this.state.lan==='en'?'0.9 %':'०.९%'}</td>
           </tr>
         </tbody>
       </Table>
       <hr/>
       <p>{ipage_n_e.info_OldPeopleWithMedicalIssue_p5[this.state.lan]}</p>
       <h3>{ipage_n_e.info_OldPeopleWithMedicalIssue_t1[this.state.lan]}</h3>
       <p>{ipage_n_e.info_OldPeopleWithMedicalIssue_t1_p1[this.state.lan]}</p>
       <ul>
        <li>{ipage_n_e.info_OldPeopleWithMedicalIssue_t1_p1_1[this.state.lan]}</li>
        <li>{ipage_n_e.info_OldPeopleWithMedicalIssue_t1_p1_2[this.state.lan]}</li>
        <li>{ipage_n_e.info_OldPeopleWithMedicalIssue_t1_p1_3[this.state.lan]}</li>
        <li>{ipage_n_e.info_OldPeopleWithMedicalIssue_t1_p1_4[this.state.lan]}</li>
        <li>{ipage_n_e.info_OldPeopleWithMedicalIssue_t1_p1_5[this.state.lan]}</li>
      </ul>
      <h3>{ipage_n_e.info_OldPeopleWithMedicalIssue_t2[this.state.lan]}</h3>
      
       <ul>
        <li>{ipage_n_e.info_OldPeopleWithMedicalIssue_t2_p1[this.state.lan]}</li>
        <li>{ipage_n_e.info_OldPeopleWithMedicalIssue_t2_p2[this.state.lan]}</li>
        <li>{ipage_n_e.info_OldPeopleWithMedicalIssue_t2_p3[this.state.lan]}</li>
       </ul>

       <h3>{ipage_n_e.info_OldPeopleWithMedicalIssue_t3[this.state.lan]}</h3>
       <p>{ipage_n_e.info_OldPeopleWithMedicalIssue_t3_p1[this.state.lan]}</p>
       <ul>
        <li>{ipage_n_e.info_OldPeopleWithMedicalIssue_t3_p1_1[this.state.lan]}</li>
        <li>{ipage_n_e.info_OldPeopleWithMedicalIssue_t3_p1_2[this.state.lan]}</li>
   
       </ul>


            
    </div>
    );
  }
}

export default OldPeopleAndPeopleWIssue;