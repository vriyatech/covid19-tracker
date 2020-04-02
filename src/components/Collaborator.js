import React, { Component } from 'react'
import {
    Container,
  } from 'reactstrap';
import HAMS from '../images/Collaborator/HAMS_Hospital_300x300.png'
import SagarmathaCement from '../images/Collaborator//Sagarmatha_Cement_Primary_300x300.png'
import StarHospital from '../images/Collaborator/Star_Hospital_300x300.png'
import TVS_EPL from '../images/Collaborator/TVS_EPL_300x300.png'






  class Collaborator extends Component {
    render(){
      
        return <Container>
        <div className='Container'>
        <img src={HAMS}/>
        <img src={SagarmathaCement}/>
        <img src={StarHospital}/>
        <img src={TVS_EPL}/>
        </div>
        
        </Container>
    }

}

export default Collaborator;