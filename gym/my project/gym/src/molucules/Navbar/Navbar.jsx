import React from 'react'
import logo from '../../atoms/images/logo.jpg'
import { useNavigate } from 'react-router-dom';
import About from '../AboutInfo/About'
import './Navbar.css'
function Navbar() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login'); // Navigates to the "/about" path
  };
 
  return (
    <div>

        <nav id="navbar-example2" class="navbar navbar-expand-lg navbar-light bg-light w-100 fixed-top" >
        <div class="container-fluid"  style={{backgroundColor:'rgb(40, 1, 1)',color:'white',boxShadow:'2px 2px 4px 8px black',fontSize:'2rem'}}>
    <a class="navbar-brand" href="#">
      <img src={logo} alt="logo" width="50" height="50" class="d-inline-block align-text-top"/> 
 <spam style={{color:'white' ,margin:'20px'}}>Fitfinity Gym</spam>
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" style={{backgroundColor:'white'}}></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
     {/* <spam style={{color:'white'}}>Fitfinity Gym</spam> */}
       <ul class="navbar-nav nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#scrollspyHeading1" style={{color:'white',fontSize:'1.5rem'}}>Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link navbtn" href="#scrollspyHeading2" style={{color:'white',fontSize:'1.5rem'}}>About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  navbtn" href="#scrollspyHeading3" style={{color:'white',fontSize:'1.5rem'}}>Classes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  navbtn" href="#scrollspyHeading4" style={{color:'white',fontSize:'1.5rem'}}>Our Team</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  navbtn" href="#scrollspyHeading5" style={{color:'white',fontSize:'1.5rem'}}>Pricing</a>
        </li>
       
      </ul>
      <button class="btn btn-danger" type="submit" onClick={handleLogin}>Join Us</button>
    </div>
  </div> 
</nav> 
    </div>
  )
}

export default Navbar