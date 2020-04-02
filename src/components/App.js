import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'reactstrap'
import './App.css'
import * as str from '../utils/strings'
import Homepage from './Homepage'
import Infopage from './Infopage'
import CheckSymptoms from './CheckSymptoms'
import CheckSymptoms_home from './checksymptom_home'
import NepalMap from './NepalMap'
import App from './App_corona'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Sponsorpage from './sponsors'
import Footer from './Footer'
import {NepalView} from './Tableview'
import store from '../redux/store'
import TermOfServices from './TermOfServices'

class Application extends Component {
    state = {
        lan: 'np',
        npcondition:[],
        worldcondition:[]
        
    }
    
    togglelang = () => {
        let data= '';
        this.state.lan ==='en'?data='np':data='en';
        let action = {type:'Update_Lan',data:data};
        store.dispatch(action);
        this.setState({lan:store.getState().reducer.lan});

    
    };
        
    componentDidMount(){
        const urlnp = 'https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest?iso2=NP&onlyCountries=False';
        fetch(urlnp).then(resp => resp.json().then(datan => this.setState({npcondition:datan})));
    }
    
    render(){
        return<Router>
        
            <div className='nav-bar' color='light'>
            
                {/* <div className='col'><Link to="/"><div className='nav-bar-icon-u'>{this.state.lan==='np'?"होम":"Home"}</div></Link></div> */}
                <div className='col'><Link to="/"><div className='nav-bar-icon-u'>{this.state.lan==='np'?"लक्षण जाँच:":"Check Symptoms"}</div></Link></div>
                <div className='col'><Link to="/info"><div className='nav-bar-icon-u'>{this.state.lan==='np'?"जानकारी":"Info"}</div></Link></div>
                <div className='col'><Link to="/nepalmap"><div className='nav-bar-icon-u'>{this.state.lan==='np'?"नेपाल स्थिति:":"Nepal Now"}</div></Link></div>
                <div className='col'><Link to="/heatmap"><div className='nav-bar-icon-u'>{this.state.lan==='np'?"वर्तमान स्थिति:":"World Now"}</div></Link></div>              
                <div className='col'><NepalView npcondition={this.state.npcondition} lan={this.state.lan} /></div>
                               
            </div>
            <input type='button' className='btn-primary'  value={this.state.lan==='np'?'नेपाली':'English'} onClick={this.togglelang}/>

            
    
        
            <Switch>
                <Route exact path="/">
                {/* <Homepage {...this.state} />   */}
                <CheckSymptoms_home {...this.state} /> 
                </Route>
                <Route path="/info">
                <Infopage {...this.state}/>
                </Route>
                <Route path="/tracksymptoms">
                <CheckSymptoms {...this.state} />                    
                </Route>
                <Route path="/heatmap">
                <App {...this.state}/>
                </Route>
                <Route path="/sponsors">
                <Sponsorpage {...this.state}/>
                </Route>
                <Route path="/TermOfServices">
                <TermOfServices {...this.state}/>
                </Route>

            </Switch>
            <Footer/>
              
        </Router>
    }

}

export default Application;



