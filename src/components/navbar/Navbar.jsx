import React from 'react'
import { FigureImage, Image } from 'react-bootstrap'
import logo from './../../assets/Images/linkedin-logo.svg'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <div className='navbar-wrapper'>
        <div className="navbar-container">
          <Image src={logo} width={'50px'}/>
          <SearchBar/>
        </div>
    </div>
  )
}

export default Navbar