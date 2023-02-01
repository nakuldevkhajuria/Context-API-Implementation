// import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
// import context from '../Context/DataContext';
import Table from '../Context/Table'
import './Student.css'

function Students() {
  // const myContext = useContext(context);
  return (
    <div> 
      <div className='headButton'>
      <span> Student Details</span>
      <button><NavLink to='/student-add'>Add new student </NavLink></button>
      </div>
  <Table  />

    </div>
  )
}

export default Students