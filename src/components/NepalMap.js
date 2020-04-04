import React, { Component } from 'react'
import { Table } from "antd";
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
      lan: window.localStorage.getItem("lan") ? window.localStorage.getItem("lan") : window.localStorage.setItem("lan", 'np'),
      record:[]
    }

    componentDidMount(){
      const urlr = GetRecord;
      fetch(urlr).then(resp => resp.json().then(datan => this.setState({record:datan})));
    }

    render(){
      const columns = [
        {
          title: this.state.lan==='en'?"Province":"प्रदेश",
          dataIndex: "province",
          key: "province"
        },
          {
            title: this.state.lan==='en'?"District":"जिल्ला",
            dataIndex: "district",
            key: "district"
          },
        {
          title: this.state.lan==='en'?"Municipality":"नगरपालिका",
          dataIndex: "municipality",
          key: "municipality"
        },
        {
          title: this.state.lan==='en'?"Risk":"जोखिम",
          dataIndex: "risk",
          key: "risk"
        },
        {
          title: this.state.lan==='en'?"Count":"गणना",
          dataIndex: "countValue",
          key: "countValue",
          // fixed: 'left',
          width: 100
        }
      ];
    return (
      <div className='container-fluid' style={{width:'100%'}}>
        <Table  columns={columns} dataSource={this.state.record} />
        {/* <RecordView record={this.state.record} lan={this.state.lan} style={{width:'100%', backgroundColor:'grey'}}/> */}
      </div>
    );
  }}