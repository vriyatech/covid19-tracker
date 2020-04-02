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


const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};

class DefaultHeader extends Component {

  state = {
    lan: window.localStorage.getItem("lan") ? window.localStorage.getItem("lan") : window.localStorage.setItem("lan", 'np'),
    npcondition:[],
    worldcondition:[]
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
  const urlnp = 'https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest?iso2=NP&onlyCountries=False';
  fetch(urlnp).then(resp => resp.json().then(datan => this.setState({npcondition:datan})));
};
 

  render() {

    // eslint-disable-next-line
    const { user, children, ...attributes } = this.props;

    return (
      <React.Fragment>
      <div className='container-fluid' style={{width:'100%'}}>
        <div className='row' color='light'>
            
          {/* <div className='col'><Link to="/"><div className='nav-bar-icon-u'>{this.state.lan==='np'?"लक्षण जाँच:":"Check Symptoms"}</div></Link></div> */}
          <div className='col-xs-12 col-sm-2 col-md-2 col-lg-2'><Link to="/"><div className='nav-bar-icon-u'>{this.state.lan==='np'?"होम":"Home"}</div></Link></div>
          <div className='col-xs-12 col-sm-2 col-md-2 col-lg-2'><Link to="/info"><div className='nav-bar-icon-u'>{this.state.lan==='np'?"जानकारी":"Info"}</div></Link></div>
          <div className='col-xs-12 col-sm-2 col-md-2 col-lg-2'><Link to="/nepalmap"><div className='nav-bar-icon-u'>{this.state.lan==='np'?"नेपाल स्थिति:":"Nepal Now"}</div></Link></div>
          <div className='col-xs-12 col-sm-2 col-md-2 col-lg-2'><Link to="/heatmap"><div className='nav-bar-icon-u'>{this.state.lan==='np'?"वर्तमान स्थिति:":"World Now"}</div></Link></div>              
          <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'><NepalView npcondition={this.state.npcondition} lan={this.state.lan} /></div>
                           
        </div>
        <input type='button' className='btn-primary'  value={this.state.lan==='np'?'English':'नेपाली'} onClick={this.togglelang}/>
        <hr />
      </div>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
