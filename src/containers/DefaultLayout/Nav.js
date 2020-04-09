import React, { useState } from 'react';
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
  NavbarText
} from 'reactstrap';
import { Link } from 'react-router-dom';
import {css} from 'emotion'
import store from '../../redux/store'

const tableCSS = css({
  'Navbar > Collapse > Nav > NavItem > NavLink': {
    backgroundColor: '#00879f',
    color: '#fff'
  }
});

const Nav_Bar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const lan= window.localStorage.getItem("lan") ? window.localStorage.getItem("lan") : window.localStorage.setItem("lan", 'np');

  const toggle = () => setIsOpen(!isOpen);

  const togglelang = () => {
    let data= '';
    lan ==='en'?data='np':data='en';
    let action = {type:'Update_Lan',data:data};
    store.dispatch(action);
    window.localStorage.setItem("lan", data);
    window.location.reload();
  }

  return (
    <div>
      <Navbar  className="container-fluid" color="light" light expand="md" style={{whiteSpace:'nowrap'}}>
        <Link style={{marginBottom:'10px',paddingLeft:'10px',paddingRight:'10px',marginRight:'20px'}} className='nav-bar-icon-u '  to='/'><div >{lan==='np'?"होम":"Home"}</div></Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto row" navbar>
            
              <Link className='navlink_margin'  to="/info"><div className='col nav-bar-icon-u' >{lan==='np'?"जानकारी":"Info"}</div></Link>
            
              <Link className='navlink_margin' to="/nepalmap"><div className='col nav-bar-icon-u'>{lan==='np'?"नेपाल स्थिति:":"Nepal Now"}</div></Link>
           
             <Link className='navlink_margin' to="/heatmap"><div className='col nav-bar-icon-u'>{lan==='np'?"वर्तमान स्थिति:":"World Now"}</div></Link>
            
            
          </Nav>
          <NavbarText><strong> Vriya Technologies</strong><br/>
            {/* <input type='button' className='nav-bar-icon-u' style={{alignSelf:'right'}}  value={lan==='np'?'English':'नेपाली'} onClick={togglelang}/> */}
          </NavbarText>        
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Nav_Bar;