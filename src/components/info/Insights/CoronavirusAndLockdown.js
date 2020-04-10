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
      
    
      <div className="content" style={{textAlign:'justify',margin:'2%'}}>
        <div >
            <img  src={RakeshBam} style={{margin:'10px',float:'right',maxHeight:'300px'}} />
            
                <h3>{ACoronavirusAndLockdown.CoronavirusAndLockdown_Author[this.state.lan]}</h3><hr/>
                <p style={{textAlign:'justify',margin:'5px'}}>{ACoronavirusAndLockdown.CoronavirusAndLockdown_Author_p[this.state.lan]}</p>
           
        </div>
        <hr/>
        <div className='content' style={{textAlign:'justify'}}>
            <h4><u>{ACoronavirusAndLockdown.CoronavirusAndLockdown_t1[this.state.lan]}</u></h4>
            <p>{ACoronavirusAndLockdown.CoronavirusAndLockdown_t1_p1[this.state.lan]}</p>
            <p>{ACoronavirusAndLockdown.CoronavirusAndLockdown_t1_p2[this.state.lan]}</p>
            <p>{ACoronavirusAndLockdown.CoronavirusAndLockdown_t1_p3[this.state.lan]}</p>
            <hr/>
            <h4><u>{ACoronavirusAndLockdown.CoronavirusAndLockdown_t1_t1[this.state.lan]}</u></h4>
            <p >{ACoronavirusAndLockdown.CoronavirusAndLockdown_t1_t1_p1[this.state.lan]}</p>
            <hr/>
            <h4><u>{ACoronavirusAndLockdown.CoronavirusAndLockdown_t1_t2[this.state.lan]}</u></h4>
            <p >{ACoronavirusAndLockdown.CoronavirusAndLockdown_t1_t2_p1[this.state.lan]}</p>
            <hr/>
            <h4><u>{ACoronavirusAndLockdown.CoronavirusAndLockdown_t1_t3[this.state.lan]}</u></h4>
            <p >{ACoronavirusAndLockdown.CoronavirusAndLockdown_t1_t3_p1[this.state.lan]}</p>
            <p >{ACoronavirusAndLockdown.CoronavirusAndLockdown_t1_t3_p2[this.state.lan]}</p>
            <hr/>
            <h4><u>{ACoronavirusAndLockdown.CoronavirusAndLockdown_t1_t4[this.state.lan]}</u></h4>
            <p >{ACoronavirusAndLockdown.CoronavirusAndLockdown_t1_t4_p1[this.state.lan]}</p>
            <p >{ACoronavirusAndLockdown.CoronavirusAndLockdown_t1_t4_p2[this.state.lan]}</p>
            <p >{ACoronavirusAndLockdown.CoronavirusAndLockdown_t1_t4_p3[this.state.lan]}</p>
            <hr/>
            <h4><u>{ACoronavirusAndLockdown.CoronavirusAndLockdown_t1_t5[this.state.lan]}</u></h4>
            <p >{ACoronavirusAndLockdown.CoronavirusAndLockdown_t1_t5_p1[this.state.lan]}</p>
            <p >{ACoronavirusAndLockdown.CoronavirusAndLockdown_t1_t5_p2[this.state.lan]}</p>
            <p >{ACoronavirusAndLockdown.CoronavirusAndLockdown_t1_t5_p3[this.state.lan]}</p>
        
        </div>
       
        
       
        
        
         


            
    </div>
    );
  }
}

export default CoronavirusAndLockdown;