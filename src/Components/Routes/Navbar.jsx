import React from 'react'
import { NavLink } from 'react-router-dom'
// import Routing from '../Routing'

function Home() {
  return (
    <div>
    <div >
       
      <div className='navbar'>
   <NavLink to='/' style={{color:'white'}}> <span> Home</span></NavLink>
      <NavLink to='/student'  style={{color:'white'}}>Students</NavLink>
      <NavLink to='/contactus' style={{color:'white'}}>Contact Us</NavLink>
        
      </div>
      
      {/* <div className='downBack'>

      </div> */}
   
    </div>
 
    </div>
  )
}

export default Home