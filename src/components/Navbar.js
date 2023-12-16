import './Navbar.css';
import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

function Navbar(props) {
 return (
  <nav className={`mainnavbar-${props.mode} bg-${props.mode}`}>
    <img className="logo" src={props.logopng} alt="" />
    <h3 className="headingtitle">{props.title}</h3>
    {/* <button className='colormode' style={{backgroundColor: 'red'}} onClick={changemodecolor('red')}></button>
    <button className='colormode' style={{backgroundColor: 'darkgreen'}} onClick={changemodecolor('blue')}></button>
    <button className='colormode' style={{backgroundColor: 'darkblue'}} onClick={changemodecolor('green')}></button> */}
    <a className="navfields" href="#">Home</a>
    {/* <Link to="/" className="navfields">Home</Link>
    <Link to="/about" className="navfields">About Us</Link> */}
    {/* <Link to="/" className="navfields">Contact</Link> */}
    <div className="form-check form-switch">
    <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.messagemode}</label>
   </div>
  </nav>
 );
}

Navbar.propTypes={
  title: PropTypes.string.isRequired,
  logopng: PropTypes.string
}

Navbar.defaultProps={
  title: 'Set Title Here',
  logopng: 'Insert Image'
}
export default Navbar;