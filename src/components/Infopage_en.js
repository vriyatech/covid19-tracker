import React, { Component } from 'react'
import {
  HashRouter  as Router, Route, Link
} from "react-router-dom";

import { Layout, Menu } from "antd";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from "@ant-design/icons";
import './App.css'
import ipage_n_e from '../data/ipage_n_e.yml'
import Who_Info from './info/Who_Info';
import OldPeopleAndPeopleWIssue from './info/OldPeopleAndPeopleWIssue';
import MythsAndFake from './info/MythsAndFake';
import HomeQuarantine from './info/HomeQuarantine';
import Aboutus from './Aboutus';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

class Infopage extends Component{
  constructor(props) {
    super(props);
    this.state = {
        collapsed: true,
      lan: window.localStorage.getItem("lan") ? window.localStorage.getItem("lan") : window.localStorage.setItem("lan", 'np')

    }
     
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  

 

  render(){

    return (
      
    <Router>
      <Layout>
        <Content >
      <Layout className="site-layout-background" >
        <Sider
        style={{
            // overflow: 'auto',
            height: '100%',

            position: 'fixed',
            left: 0,
          }}
       
          trigger={null}
          collapsible collapsed={this.state.collapsed}

        // breakpoint="md"
        collapsedWidth="0"
        // onBreakpoint={broken => {
        // //   console.log(broken);
        // }}
        // onCollapse={(collapsed, type) => {
        // //   console.log(collapsed, type);
        // }} 
        className="site-layout-background" width={300}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%" }}
          >
            <Menu.Item key="1" >{this.state.lan==='en'?'WHO Information':'विश्व स्वास्थ्य संगठनको जानकारी'}<Link key="1" to="/Who_Info" /></Menu.Item>
            <Menu.Item key="2">{this.state.lan==='en'?'Old People and People with Medical Issues':'जेष्ठ नागरिक र चिकित्सा सम्बन्धि समस्या भएका मानिसहरु'}<Link to="/OldPeopleAndPeopleWIssue" /></Menu.Item>
            <Menu.Item key="3">{this.state.lan==='en'?'Myths and Fake News':'काल्पनिक र नक्कली समाचार'}<Link to="/MythsAndFake" /></Menu.Item>
            <Menu.Item key="4">{this.state.lan==='en'?'Guidelines for Home Quarantine':'घर संगरोधका लागि दिशानिर्देशन'}<Link to="/HomeQuarantine" /></Menu.Item>
            <Menu.Item key="5">{this.state.lan==='en'?'Old People and People with Medical Issues':'जेष्ठ नागरिक र चिकित्सा सम्बन्धि समस्या भएका मानिसहरु'}<Link to="/OldPeopleAndPeopleWIssue" /></Menu.Item>
            
            
          </Menu>
        </Sider>
        <Content style={{ minHeight: 280 }}>
        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              style:{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
              },
              onClick: this.toggle,
            })}
          <Route  path="/" exact component={Who_Info} />  
          <Route  path="/Who_Info" component={Who_Info} />
          <Route path="/OldPeopleAndPeopleWIssue" component={OldPeopleAndPeopleWIssue} />
          <Route path="/MythsAndFake" component={MythsAndFake} />
          <Route path="/HomeQuarantine" component={HomeQuarantine} />
          {/* <Route path="/OldPeopleAndPeopleWIssue" component={OldPeopleAndPeopleWIssue} /> */}
        </Content>
      </Layout>
    </Content>
      </Layout>
    </Router>


    
    );
  }
}

export default Infopage;