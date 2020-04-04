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
 

  export default class NepalMap extends Component{
    state={
      lan: window.localStorage.getItem("lan") ? window.localStorage.getItem("lan") : window.localStorage.setItem("lan", 'np'),
      record:[],
      searchText: '',
      searchedColumn: ''
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
            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
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
        searchedColumn: dataIndex,
      });
    };
  
    handleReset = clearFilters => {
      clearFilters();
      this.setState({ searchText: '' });
    };

    componentDidMount(){
      const urlr = GetRecord;
      fetch(urlr).then(resp => resp.json()).then(datan => datan.filter(dat => dat.risk!=='no risk')).then(datan => this.setState({record:datan}));
    
    }

    render(){
      const columns = [
        {
          title: this.state.lan==='en'?"Province":"प्रदेश",
          dataIndex: "province",
          key: "province",
          ...this.getColumnSearchProps('province'),
          render: (price, record) => (
            <Typography.Text style={{ fontSize: 12,padding:0,wordWrap:false,whiteSpace: 'nowrap' }}>
              {price}
            </Typography.Text>
          )
        },
          {
            title: this.state.lan==='en'?"District":"जिल्ला",
            dataIndex: "district",
            key: "district",
            ...this.getColumnSearchProps('district'),
            render: (price, record) => (
              <Typography.Text style={{ fontSize: 12,padding:0,wordWrap:false,whiteSpace: 'nowrap' }}>
                {price}
              </Typography.Text>
            )
          },
        {
          title: this.state.lan==='en'?"Municipality":"नगरपालिका",
          dataIndex: "municipality",
          key: "municipality",
          ...this.getColumnSearchProps('municipality'),  render: (price, record) => (
            <Typography.Text style={{ fontSize: 12,padding:0,wordWrap:false,whiteSpace: 'nowrap' }}>
              {price}
            </Typography.Text>
          )
        },
        {
          title: this.state.lan==='en'?"Risk":"जोखिम",
          dataIndex: "risk",
          key: "risk",
          ...this.getColumnSearchProps('risk'),  render: (price, record) => (
            <Typography.Text style={{ fontSize: 12,padding:1,wordWrap:false,whiteSpace: 'nowrap' }}>
              {price}
            </Typography.Text>
          )
        },
        {
          title: this.state.lan==='en'?"Count":"गणना",
          dataIndex: "countValue",
          key: "countValue",
          // fixed: 'left',
          // width: 100,
            render: (price, record) => (
            <Typography.Text style={{ fontSize: 12,padding:0,wordWrap:false,whiteSpace: 'nowrap' }}>
              {price}
            </Typography.Text>
          )
        }
      ];
      
    return (
      <div className='container-fluid' style={{width:'99%'}}>
        <Table size='large' scroll={{ y: '100%' }} style={{width: '99%', lineHeight:'20px'}} columns={columns} dataSource={this.state.record} />
        {/* <RecordView record={this.state.record} lan={this.state.lan} style={{width:'100%', backgroundColor:'grey'}}/> */}
      </div>
    );
  }}