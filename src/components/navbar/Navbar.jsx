import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import './navbar.css' 

const Menu = () => {
  return (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#gpt'>What is GPT</a></p>
    <p><a href='#possibility'>Open AI</a></p>
    <p><a href='#features'>Case Studies</a></p>
    <p><a href='#blog'>Library</a></p>
  </>
  )
}

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt_navbar">
      <div className="gpt_navbar-links">
        <div className="gpt_navbar-links-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt_navbar-links-container">
          <Menu />
        </div>
       </div>
        <div className="gpt_navbar-sign">
          <p>Sign IN</p>
          <button>Sign UP</button>
        </div>
        <div className="gpt_navbar-menu">
          {
            toggleMenu 
            ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} /> 
            : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
          }
          {
            toggleMenu && (
              <div className="gpt_navbar-menu-container scale-up-center">
                <div className="gpt_navbar-menu-container-links">
                  <Menu />
                  <div className="gpt_navbar-menu-container-links-sign">
                    <p>Sign IN</p>
                    <button>Sign UP</button>
                  </div>
                </div>
              </div>
            )
          }
        </div>
    </div>
  )
}

export default Navbar