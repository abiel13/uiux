import React, { useState } from 'react'
import './navbar.css'
import {RiMenu3Line , RiCloseFill} from 'react-icons/ri'

function Navbar() {
  const [toggle,setToggle] = useState(false)
  const Menu = ()=>(
    <>
      <a href="#home">Home</a>
        <a href="#wcr">What is Crypt</a>
        <a href="#possibility">OpenAi</a>
        <a href="#features">Case Study</a>
        <a href="#blog">Libary</a>
    </>
  )

  return (
    <div className='nav'> 
    <div className="nav__links">
      <div className="nav__links_logo">Crypt</div>
      <div className="nav_links_container">
      <Menu />
 </div><div className='nav__signs'>
  <p>Sign In</p>
  <button type='button'>Sign Up</button>
</div>
<div className="nav_menu">
  {toggle?   <RiCloseFill size={27} color='white' cursor={'pointer'} onClick={
    ()=>{
      setToggle(prev => !prev)
    }
  } />:<RiMenu3Line size={27} color='white' cursor={'pointer'}  onClick={()=>{
    setToggle(prev => !prev)
  }}/>}
  {
    toggle && <div className='menu_items scale-up-center'>
     <div className='menu_items_links'>
     <Menu />
     </div>
     <div className='menu__signs'>
  <p>Sign In</p>
  <button type='button'>Sign Up</button>
</div>
    </div>
  }
</div>
    </div>
    </div>
  )
}

export default Navbar