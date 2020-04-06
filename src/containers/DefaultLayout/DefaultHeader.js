import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link, NavLink, Redirect } from "react-router-dom";
import {
  Badge,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem
} from "reactstrap";
import PropTypes from "prop-types";

import store from '../../redux/store'

import {NepalView} from '../../components/Tableview';
import Nav_Bar from './Nav'


const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};

class DefaultHeader extends Component {

  state = {
    lan: window.localStorage.getItem("lan") ? window.localStorage.getItem("lan") : window.localStorage.setItem("lan", 'np'),
    npcondition:[],
    worldcondition:[],
    confirmedCount:[],
    deadCount:[],
    curedCount:[]
   
  }


  togglelang = () => {
    let data= '';
    this.state.lan ==='en'?data='np':data='en';
    let action = {type:'Update_Lan',data:data};
    store.dispatch(action);
    window.localStorage.setItem("lan", data);
    window.location.reload();
    // this.setState({lan:store.getState().reducer.lan});


};

componentDidMount(){
  const urlnp = 'https://raw.githubusercontent.com/stevenliuyi/covid19/master/public/data/all_minified.json';
  fetch(urlnp).then(resp => resp.json().then(r=> r.尼泊尔).then(datan => this.setState({npcondition:datan,confirmedCount:datan.confirmedCount,curedCount:datan.curedCount,deadCount:datan.deadCount})));
  
}
 

  render() {

    // eslint-disable-next-line
    const { user, children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <Nav_Bar/>
      
      <div className='container-fluid' style={{width:'100%'}}>

        {/* <div className='row' color='light'> */}
            
          {/* <div className='col'><Link to="/"><div className='nav-bar-icon-u'>{this.state.lan==='np'?"लक्षण जाँच:":"Check Symptoms"}</div></Link></div> */}
          {/* <div className='col-xs-12 col-sm-3 col-md-3 col-lg-3'><Link to="/"><div className='nav-bar-icon-u'>{this.state.lan==='np'?"होम":"Home"}</div></Link></div>
          <div className='col-xs-12 col-sm-3 col-md-3 col-lg-3'><Link to="/info"><div className='nav-bar-icon-u'>{this.state.lan==='np'?"जानकारी":"Info"}</div></Link></div>
          <div className='col-xs-12 col-sm-3 col-md-3 col-lg-3'><Link to="/nepalmap"><div className='nav-bar-icon-u'>{this.state.lan==='np'?"नेपाल स्थिति:":"Nepal Now"}</div></Link></div>
          <div className='col-xs-12 col-sm-3 col-md-3 col-lg-3'><Link to="/heatmap"><div className='nav-bar-icon-u'>{this.state.lan==='np'?"वर्तमान स्थिति:":"World Now"}</div></Link></div>               */}
         
        {/* </div> */}
        
        <div className='row'>
        <div className='col-xs-10 col-sm-10 col-md-10 col-lg-10' style={{textAlign:'left'}}><NepalView npcondition={this.state.npcondition} lan={this.state.lan} /></div>
        <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2'><input type='button' className='nav-bar-icon-u' style={{alignSelf:'right'}}  value={this.state.lan==='np'?'English':'नेपाली'} onClick={this.togglelang}/></div>
        </div>
        <hr />
      </div>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
