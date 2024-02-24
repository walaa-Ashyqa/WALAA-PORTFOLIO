import React from 'react'
 import { Link, NavLink } from 'react-router-dom'

import './Navbar.css'
import { Button, NavbarBrand, NavbarText } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { HashLink} from 'react-router-hash-link';

function Mynavbar() {
  const openLinked =()=>{
    window.open("https://www.linkedin.com/in/wala-hashayki-799154192/")
      }
      const openGit =()=>{
        window.open("https://github.com/walaa-Ashyqa")
      }
      const openBehance =()=>{
        window.open("https://www.behance.net/walaali2")
      }
      const openInstagram =()=>{
        window.open("https://www.instagram.com/hashayki/")
      }
  return (
  <div>
<nav>
<div className="container">

<NavbarBrand href="#home" className='NavbarBrand'>
            <img
              src="./image 4.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
         <NavbarText className='NavbarText'>
              WALA' ASHYQA
          </NavbarText>
     
          </NavbarBrand>
<ul>
    <li>
        <HashLink className='link' to="#header" smooth>Home </HashLink>
    </li>
    <li>
        <HashLink className='link' to="#skills" smooth>Skills </HashLink>
    </li>
    <li>
        <HashLink className='link' to="#sections" smooth>Projects </HashLink>
    </li>
    <li>
      <button onClick={openLinked} className="nav-icons"><FontAwesomeIcon icon={faLinkedinIn} /></button>
      <button onClick={openGit}  className="nav-icons"><FontAwesomeIcon icon={faGithub} /></button>
      <button onClick={openBehance}  className="nav-icons"><FontAwesomeIcon icon={faBehance} /></button>
    </li>
    
    <li>
    <Button className='button-nav' > <HashLink to="#submit" smooth>Submit</HashLink></Button>
    </li>
</ul>

</div>

</nav>
</div>
      
   
  )
}

export default Mynavbar