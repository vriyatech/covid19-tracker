import React, { Component } from 'react'
import { components } from 'react-select'
import ImageSlider from '../utils/ImageSlider'
import store from '../redux/store'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'

class CheckResult extends Component{
  state=store.getState();
  viewmessage =() =>{
    
    
    switch(this.state.checkSymptom.newRecord.risk){
      // case "no risk": return ReactDOM.render(
      //   <h2 style={{color:"Green"}}>{this.state.checkSymptom.newRecord.risk}</h2>,
      //   document.getElementById('result')
      // );
      
      
      case "Vulnerable": return ReactDOM.render(
        <h2 style={{color:"Red"}}>{this.state.checkSymptom.newRecord.risk}</h2>,
        document.getElementById('result')
      );
      case "Potential": return ReactDOM.render(
        <h2 style={{color:"Yellow"}}>{this.state.checkSymptom.newRecord.risk}</h2>,
        document.getElementById('result')
      );
      default: return ReactDOM.render(
        <h2 style={{color:"Green"}}>Low Risk</h2>,
        document.getElementById('result')
      );
      
      

  }};

  render(){
  return <React.Fragment>
      <div className='container-fluid' onLoad={this.viewmessage}>
        <div className='row'>
            {/* <div className="col-sm-3"><h2>{store.getState().checkSymptom.newRecord.risk}</h2></div> */}
            <div className="col-12"><div id='result' ></div></div><hr/>
            <div className="col-12" style={{aligItems:'center'}}>
              <div><ImageSlider /></div>
            </div>
        </div>
        <br />
        <Link to='/info'><input type='button' className='nav-bar-icon-u' value ='Click here to view Information'/> </Link>
        &nbsp;       
        <Link to='/NepalMap'><input type='button' className='nav-bar-icon-u' value ='Click here to view condition of Nepal'/> </Link>       
      </div>
  
  </React.Fragment>
  }


}

export default CheckResult;