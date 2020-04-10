import React, { Component } from 'react'
import {
  HashRouter  as Router, Route, Link
} from "react-router-dom";
import {
    Table
  } from 'reactstrap';
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined
} from "@ant-design/icons";
import '../../App.css'
import ACoronavirusAndLockdown from '../../../data/CoronavirusAndLockdown.yml'
import RakeshBam from './author/Rakesh-Bam.jpg'




class CoronavirusAndLockdown extends Component{
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
      
    
      <div className="content">
        <div >
            <img  src={RakeshBam} />
            <div >
                <h3>{ACoronavirusAndLockdown.CoronavirusAndLockdown_Author[this.state.lan]}</h3>
                <p style={{textAlign:'justify',margin:'5px'}}>{ACoronavirusAndLockdown.CoronavirusAndLockdown_Author_p[this.state.lan]}</p>
            </div>
        </div>
        <div className='content'>
        <h3>{ACoronavirusAndLockdown.CoronavirusAndLockdown_t1[this.state.lan]}</h3>
        <p style={{textAlign:'justify',margin:'5px'}}>{ACoronavirusAndLockdown.CoronavirusAndLockdown_t1_p1[this.state.lan]}</p>
        <p style={{textAlign:'justify',margin:'5px'}}>{ACoronavirusAndLockdown.CoronavirusAndLockdown_t1_p2[this.state.lan]}</p>
        <p style={{textAlign:'justify',margin:'5px'}}>{ACoronavirusAndLockdown.CoronavirusAndLockdown_t1_p3[this.state.lan]}</p>
        <h3>{ACoronavirusAndLockdown.CoronavirusAndLockdown_t1[this.state.lan]}</h3>
        <p style={{textAlign:'justify',margin:'5px'}}>{ACoronavirusAndLockdown.CoronavirusAndLockdown_Author_p[this.state.lan]}</p>
        <p style={{textAlign:'justify',margin:'5px'}}>{ACoronavirusAndLockdown.CoronavirusAndLockdown_Author_p[this.state.lan]}</p>
        <p style={{textAlign:'justify',margin:'5px'}}>{ACoronavirusAndLockdown.CoronavirusAndLockdown_Author_p[this.state.lan]}</p>

        </div>
        <h3>{'This is Artical page'}</h3>
        <br/>
        
       
        
        
         


            
    </div>
    );
  }
}

export default CoronavirusAndLockdown;