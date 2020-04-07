import React, { Component } from 'react'
import { Table, Input, Button, Typography  } from "antd";
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
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
  import { css } from 'emotion'
  
 

  export default class NepalMap extends Component{
    state={
      lan: window.localStorage.getItem("lan") ? window.localStorage.getItem("lan") : window.localStorage.setItem("lan", 'np'),
      record:[],
      searchText: '',
      searchedColumn: '',
      timeout: 0,
      totalSurvey:'',
      totalPotential: '',
      totalVulnurable:'',
      totalLowRisk:'',
      filteredRecord:[]
    }

    getColumnSearchProps = dataIndex => ({
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            ref={node => {
              this.searchInput = node;
            }}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onInput = {e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onChange={() => this.doSearch(selectedKeys, confirm, dataIndex)}

            onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={"<SearchOutlined />"}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </div>
      ),
      filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
      onFilter: (value, record) =>
        record[dataIndex]
          .toString()
          .toLowerCase()
          .includes(value.toLowerCase()),
      onFilterDropdownVisibleChange: visible => {
        if (visible) {
          setTimeout(() => this.searchInput.select());
        }
      },
      render: text =>
        this.state.searchedColumn === dataIndex ? (
          <Highlighter
            highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
            searchWords={[this.state.searchText]}
            autoEscape
            textToHighlight={text.toString()}
          />
        ) : (
          text
        ),
    });
  
    handleSearch = (selectedKeys, confirm, dataIndex) => {
      confirm();
      this.setState({
        searchText: selectedKeys[0],
        searchedColumn: dataIndex
      });
    };

    doSearch(selectedKeys, confirm, dataIndex){
      if(this.timeout) clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        //search function
        this.handleSearch(selectedKeys, confirm, dataIndex)
      }, 1000);
    }
  
    handleReset = clearFilters => {
      clearFilters();
      this.setState({ searchText: '' });
    };

    componentDidMount(){
      const urlr = GetRecord;
      fetch(urlr, {method:'GET', mode:'cors'}).then(resp => resp.json()).then(datan => this.setState({record:datan.recordset}))
      .then(r =>this.setState({totalPotential:this.state.record.map(r =>r.Potential).reduce((tpotential,potential) =>(tpotential+potential))}))
      .then(r =>this.setState({totalVulnurable:this.state.record.map(r =>r.Vulnerable).reduce((tpotential,potential) =>(tpotential+potential))}))
      .then(r =>this.setState({totalLowRisk:this.state.record.map(r =>r['Low Risk']).reduce((tpotential,potential) =>(tpotential+potential))}))
      .then(r =>this.setState({totalSurvey:this.state.record.map(r =>r.Total).reduce((tpotential,potential) =>(tpotential+potential))}))
      // .then(r => this.setState({filteredRecord:this.state.record.map(rec => rec).filter(r => !(r.Potential===0&r.Vulnerable===0))}))
      .then(r => this.setState({record:this.state.record.map(rec => rec).filter(r => !(r.Potential===0&r.Vulnerable===0))}))
      // .then(r =>console.log(this.state));
           
    
    }

    render(){
      const columns = [
        // {
        //   title: this.state.lan==='en'?"Province":"प्रदेश",
        //   dataIndex: "Province",
        //   key: "Province",
        //   ...this.getColumnSearchProps('Province'),
        //   render: (price, record) => (
        //     <Typography.Text style={{ fontSize: 12,padding:0,whiteSpace: 'nowrap' }}>
        //       {price}
        //     </Typography.Text>
        //   )
        // },
        //   {
        //     title: this.state.lan==='en'?"District":"जिल्ला",
        //     dataIndex: "Province",
        //     key: "Province",
        //     ...this.getColumnSearchProps('Province'),
        //     render: (price, record) => (
        //       <Typography.Text style={{ fontSize: 12,whiteSpace: 'nowrap' }}>
        //         {price}
        //       </Typography.Text>
        //     )
        //   },
        // {
        //   title: this.state.lan==='en'?"Municipality":"नगरपालिका",
        //   dataIndex: "Municipality",
        //   key: "Municipality",
        //   ...this.getColumnSearchProps('Municipality'),  render: (price, record) => (
        //     <Typography.Text style={{ fontSize: 12,whiteSpace: 'nowrap' }}>
        //       {price}
        //     </Typography.Text>
        //   )
        // },
        {
          title: this.state.lan==='en'?"Location":"नगरपालिका",
          dataIndex: "Location",
          key: "Location",
          ...this.getColumnSearchProps('Location'),  render: (price, record) => (
            <Typography.Text style={{ fontSize: 12,whiteSpace: 'nowrap' }}>
              {price}
            </Typography.Text>
          )
        },
        // {
        //   title: this.state.lan==='en'?"Low Risk":"जोखिम",
        //   dataIndex: "Low Risk",
        //   key: "Low Risk",
        //   ...this.getColumnSearchProps('Low Risk'),  render: (price, record) => (
        //     <Typography.Text style={{ fontSize: 12,padding:1,whiteSpace: 'nowrap' }}>
        //       {price}
        //     </Typography.Text>
        //   )
        // },
        {
          title: this.state.lan==='en'?"Potential":"जोखिम",
          dataIndex: "Potential",
          key: "Potential",
          // ...this.getColumnSearchProps('Potential'), 
           render: (price, record) => (
            <Typography.Text style={{ fontSize: 12,padding:1,whiteSpace: 'nowrap' }}>
              {price}
            </Typography.Text>
          )
        },
        {
          title: this.state.lan==='en'?"Vulnerable":"गणना",
          dataIndex: "Vulnerable",
          key: "Vulnerable",
          // fixed: 'left',
          // width: 100,
            render: (price, record) => (
            <Typography.Text style={{ fontSize: 12,padding:0,whiteSpace: 'nowrap' }}>
              {price}
            </Typography.Text>
          )
        }
      ];

      const tableCSS = css({
        'thead > tr > th': {
          fontSize:'12'
        }
      });

    return (<React.Fragment>
      <div style={{textAlign:'left', margin:'10px'}}>
        <span><strong>Total Survey:{" " + this.state.totalSurvey +" | "}</strong></span>
        <span><strong>Vulnerable:{" " + this.state.totalVulnurable + " | "}</strong></span>
        <span><strong>Potential:{" " + this.state.totalPotential }</strong></span>
      </div>
   
        <Table
          className={tableCSS}
          rowKey={obj => obj.Location}
          dataSource={this.state.record}
          columns={columns}
        />
        </React.Fragment>
      
    );
  }}