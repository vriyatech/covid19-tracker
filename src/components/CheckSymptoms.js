import React, { Component } from 'react'  
import { connect } from 'react-redux';
import store from '../redux/store'
import Recaptcha from 'react-recaptcha'

// import serializeForm from 'form-serialize'
import {
    Table,
    Button
  } from 'reactstrap'
import symptom_n_e from '../data/symptom_n_e.yml'
import {Municipality_select} from '../utils/Municipalities'
import { addRecord } from "../redux/actions/checkSymtomsActions";
import ReactDOM from 'react-dom'


  class CheckSymptoms extends Component {
    constructor(props) {
      super(props);
      this.state = {
        fever:'',
        cough:'',
        breathing:'',
        age:'',
        otherdiseases:'',
        outsidevisit:'',
        rwinfection:'',
        myip:'',
        location:'',
        lan: window.localStorage.getItem("lan") ? window.localStorage.getItem("lan") : window.localStorage.setItem("lan", 'np'),
        provience:'',
       district:'',
       municipality:'',
       isVerified:true,
       token:''
  
      }
     
    }   
    

    handlechange = (e) =>{
      let{name,value} = e.target;

      this.setState({[e.target.name]:e.target.value});
      // console.log(this.state);      
      switch(name){
        case 'location':
          let testvalue = value.split(', ');
          let loc = testvalue[0];

          this.setState({location:loc,provience:testvalue[0].replace("Province ",""),district:testvalue[1],municipality:testvalue[2]});
          break;
        default:
          this.setState({[e.target.name]:e.target.value});
      }
    }
   
    //prevent submitting and call post to api
    handleSubmit = (e) =>{
      e.preventDefault();

      if(this.state.fever===''|this.state.cough===''|this.state.breathing===''|this.state.age===''|this.state.otherdiseases===''|this.state.outsidevisit===''|this.state.rwinfection===''){
        ReactDOM.render(
          <span style={{color:"white", backgroundColor:'red'}}>{this.state.lan==='en'?'Please select your symptoms!':'कृपया आफ्नो लक्षणमा टिक लगाउनुहोस!'}</span>,
          document.getElementById('form-error')
        );        
      }      
      else if(this.state.provience===''|this.state.district===''|this.state.municipality===''|this.state.district===undefined|this.state.municipality===undefined){
        ReactDOM.render(
          <span style={{color:"white", backgroundColor:'red'}}>{this.state.lan==='en'?'Please select your Municipality from dropdown!':'कृपया ड्रपडाउनबाट आफ्नो नगरपालिका रोजनुहोस्!'}</span>,
          document.getElementById('form-error')
        );
      }
        
      
      else{
        if(this.state.isVerified){
          // console.log(this.state);
          const { addRecord, history } = this.props;
          const formData = this.state;
          addRecord({ formData, history });
          //this.insertrecords(this.state);
          ReactDOM.render(
            <span style={{color:"white", backgroundColor:'green'}}>{this.state.lan==='en'?'Your Syptoms are being submitted!':'तपाइको लक्षणहरू  बुझाइदै छ!'}</span>,
            document.getElementById('form-error')
          );
        }

        else{
          ReactDOM.render(
            <span style={{color:"white", backgroundColor:'red'}}>{this.state.lan==='en'?'Please verify that your are not a robot!':'कृपया प्रमाणित गर्नुहोस् कि तपाई रोबोट होइन!'}</span>,
            document.getElementById('form-error')
          );          
        }       
      }      
    }


    async componentDidMount(){
      const url = 'https://api.ipify.org/?format=json';
      const response = await fetch(url);
      const data = await response.json();
      this.setState({myip:data.ip,loading:false});
    };
   
    // callback = () => {
    //   // console.log('Done!!!!');
    // };
     
    // // specifying verify callback function
    // verifyCallback = (response) => {
    //   // console.log(response);
    //   this.setState({isVerified:true,token:response})
    // };

    render() {


    


        
      return (
      <div className ='context' >
          {/* <u>
            <label name='set_language'>{this.state.lan==='np'?'भाषा परिवर्तनको लागि कृपया यहाँ क्लिक गर्नुहोस्! => ':'Please click here to change language! => '}<input type='button' name='set_language' value={this.state.lan==='np'?'नेपाली':'English'} onClick={this.togglelang}/>
            </label></u> */}
          {/* <h5><u>{symptom_n_e.SYM_Disclaimer[this.state.lan]}:</u></h5>
          <p>{symptom_n_e.SYM_Disclaimer_p1[this.state.lan]}</p>
          <p>{symptom_n_e.SYM_Disclaimer_p2[this.state.lan]}</p>
          <p>{symptom_n_e.SYM_Disclaimer_p3[this.state.lan]}</p> */}
          <h5><u>{symptom_n_e.Home_CheckSymptom_How_Are_you_feeling_title[this.state.lan]}</u></h5>
          <p>{symptom_n_e.Home_CheckSymptom_How_Are_you_feeling_p1[this.state.lan]}<a href='/termofservices'>&nbsp;{symptom_n_e.Terms_of_Service[this.state.lan]}&nbsp;</a>{symptom_n_e.Home_CheckSymptom_Notice_L[this.state.lan]}</p>
          <p>{symptom_n_e.Home_CheckSymptom_How_Are_you_feeling_p2[this.state.lan]}</p>
        <form onSubmit={this.handleSubmit} className='symptomtable'>

          <Table bordered hover>
            <thead>
              <tr>
                <th>{symptom_n_e.SYM_QUESTIONS[this.state.lan]}</th>
                <th>{this.state.lan==="np"?'छ':'Yes'}</th>
                <th>{this.state.lan==="np"?'छैन':'No'}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><label name='fever'>{symptom_n_e.SYM_QUESTIONS1[this.state.lan]}</label></td> 
                <td><Button color='info' name='fever' value="Yes" active={this.state.fever==='Yes'} onClick={this.handlechange}>{this.state.lan==="np"?'छ':'Yes'}</Button></td>
                <td><Button color='info' name='fever' value="No" active={this.state.fever==='No'} onClick={this.handlechange}>{this.state.lan==="np"?'छैन':'No'}</Button></td>
                
              </tr>

              <tr>
                <td><label name='cough'>{symptom_n_e.SYM_QUESTIONS2[this.state.lan]}</label></td> 
                <td><Button color='info' name='cough' value="Yes" active={this.state.cough==='Yes'} onClick={this.handlechange}>{this.state.lan==="np"?'छ':'Yes'}</Button></td>
                <td><Button color='info' name='cough' value="No" active={this.state.cough==='No'} onClick={this.handlechange}>{this.state.lan==="np"?'छैन':'No'}</Button></td> 
              </tr>
              <tr>
                <td><label name='breathing'>{symptom_n_e.SYM_QUESTIONS3[this.state.lan]}</label></td> 
                <td><Button color='info' active={this.state.breathing==='Yes'} name='breathing' value="Yes" onClick={this.handlechange}>{this.state.lan==='np'?'छ':'Yes'}</Button></td>
                <td><Button color='info' active={this.state.breathing==='No'} name='breathing' value="No" onClick={this.handlechange}>{this.state.lan==='np'?'छैन':'No'}</Button></td> 
              </tr>
              <tr>
                <td><label name='age'>{symptom_n_e.SYM_QUESTIONS4[this.state.lan]}</label></td> 
                <td><Button color='info' active={this.state.age==='Yes'} name='age' value="Yes" onClick={this.handlechange}>{this.state.lan==='np'?'छ':'Yes'}</Button></td>
                <td><Button color='info' active={this.state.age==='No'} name='age' value="No" onClick={this.handlechange}>{this.state.lan==='np'?'छैन':'No'}</Button></td> 
              </tr>
              <tr>
                <td><label name='otherdiseases'>{symptom_n_e.SYM_QUESTIONS5[this.state.lan]}</label></td> 
                <td><Button color='info' active={this.state.otherdiseases==='Yes'} name='otherdiseases' value="Yes" onClick={this.handlechange}>{this.state.lan==='np'?'छ':'Yes'}</Button></td>
                <td><Button color='info' active={this.state.otherdiseases==='No'} name='otherdiseases' value="No" onClick={this.handlechange}>{this.state.lan==='np'?'छैन':'No'}</Button></td>  
              </tr>
              <tr>
                <td><label name='outsidevisit'>{symptom_n_e.SYM_QUESTIONS6[this.state.lan]}</label></td> 
                <td><Button color='info' active={this.state.outsidevisit==='Yes'} name='outsidevisit' value="Yes" onClick={this.handlechange}>{this.state.lan==='np'?'छ':'Yes'}</Button></td>
                <td><Button color='info' active={this.state.outsidevisit==='No'} name='outsidevisit' value="No" onClick={this.handlechange}>{this.state.lan==='np'?'छैन':'No'}</Button></td>  
              </tr>
              <tr>
                <td><label name='rwinfection'>{symptom_n_e.SYM_QUESTIONS7[this.state.lan]}</label> </td> 
                <td><Button color='info' active={this.state.rwinfection==='Yes'} name='rwinfection' value="Yes" onClick={this.handlechange}>{this.state.lan==='np'?'छ':'Yes'}</Button></td>
                <td><Button color='info' active={this.state.rwinfection==='No'} name='rwinfection' value="No" onClick={this.handlechange}>{this.state.lan==='np'?'छैन':'No'}</Button></td>
              </tr>              
            </tbody>
          </Table>
        
          <label name='location'>{symptom_n_e.SYM_Location[this.state.lan]}: <span id='municipality'>
            {/* <input type='text' name='location' onChange={this.handlechange}/> */}
            
           <Municipality_select Municipality ={store.getState().reducer.municipalities} fun ={this.handlechange}/>
            </span>
          </label>
          <hr/>
          {/* <Recaptcha
            sitekey="6LfFHegUAAAAAEZJIGGzko1yH2Zfqs3jjSlMLJ85"
            render="explicit"
            verifyCallback={this.verifyCallback}
            onloadCallback={this.callback}
          /> */}
                  
          <input type="submit" className='nav-bar-icon-u' value={this.state.lan==='np'?"बुझाउनुहोस्:":"Submit"} /><div id='form-error'></div>

        </form>
        </div>
        
      );
      
      
    }
  }

export default connect(null, { addRecord })(CheckSymptoms);
