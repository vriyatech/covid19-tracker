import React, { Component } from 'react'
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
    Col
  } from 'reactstrap';
  import {GetRecord} from '../services/apiLink'
  import {RecordView} from './Tableview'

  export default class NepalMap extends Component{
    state={
      record:[]
    }

    componentDidMount(){
      const urlr = GetRecord;
      fetch(urlr).then(resp => resp.json().then(datan => this.setState({record:datan})));
    }

    render(){
    return (
      <div>
        <RecordView record={this.state.record} />
      </div>
    );
  }}