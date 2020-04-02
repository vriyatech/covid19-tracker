import React, { Component } from 'react'
import {Table  } from 'reactstrap';
import Tableview,{NepalView,WorldView} from './Tableview'





  class Homepage extends Component {
    state={
      lan:'np',
      loading:true,
      data:[],
      npcondition:[],
      worldcondition:[]
    }

    componentDidMount(){
      const urlnp = 'https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest?iso2=NP&onlyCountries=False';
      fetch(urlnp).then(resp => resp.json().then(datan => this.setState({npcondition:datan})));
     

      const urlw = 'https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/brief';
      fetch(urlw).then(resp => resp.json().then(dataw => this.setState({worldcondition:dataw})));
   

      // const url1 = 'https://apiflu.vriya.com:9092/flu/SurveyResult';
      // fetch(url1).then(resp => resp.json().then(data => this.setState({data:data})));
     
      
    };


    togglelang = () => this.state.lan ==='en'?this.setState({lan:'np'}):this.setState({lan:'en'});

    
    render(){


      return <div>
        <label name='set_language'>{this.state.lan==='np'?'भाषा परिवर्तनको लागि कृपया यहाँ क्लिक गर्नुहोस्! => ':'Please click here to change language! => '}<input type='button' name='set_language' value={this.state.lan==='np'?'नेपाली':'English'} onClick={this.togglelang}/></label>
      <h2>{this.state.lan==='np'?'समीक्षा:':'Overview'}</h2>
      <NepalView npcondition={this.state.npcondition} lan ={this.state.lan}/>
      <hr/>
      <WorldView worldcondition={this.state.worldcondition} lan ={this.state.lan}/>
      {/* <Table striped bordered hover>
        <thead>
          <tr>
            <th>{this.state.lan==='np'?'मिति:':'Date'}</th>
            <th>{this.state.lan==='np'?'प्रश्न:':'Question'}</th>
            <th>{this.state.lan==='np'?'स्थान:':'Address'}</th>
            <th>{this.state.lan==='np'?'उत्तर:':'Answer'}</th>
            <th>{this.state.lan==='np'?'गणना:':'Count'}</th>
          </tr>
        </thead>
        
          <Tableview tabledata={this.state.data} lan = {this.state.lan}/>
        
      </Table> */}
      </div>
    }

}

export default Homepage;