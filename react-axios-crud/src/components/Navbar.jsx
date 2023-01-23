import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Navbar = () => {
  return (
    <div className='navbar'>

       <h2><Link to={'/'}>Blog</Link></h2> 
       <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/new'} className='newBtn'>NewPost</Link></li>
       </ul>
    </div>
  )
}

export default Navbar
