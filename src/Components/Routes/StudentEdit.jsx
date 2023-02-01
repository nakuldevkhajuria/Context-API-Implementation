import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import context from '../Context/DataContext'
import './Student.css'

function StudentEdit() {
  const myContext = useContext(context);
  const location = useLocation(); // returns the location object 
  console.log(location.state.data) // the id present with the state property of the l;ocation object
  const navigate = useNavigate();
  const index = (location.state.data);
  console.log(myContext)
   // array of objects : context.entries
   // function         : context.updateFunction


   // the object in which the changes will be done 
   const newObj = {
       name : myContext.entries[index].name,
       age : myContext.entries[index].age,
       course : myContext.entries[index].course,
       batch : myContext.entries[index].batch
      

   }
   
   console.log("Index : " + index)
   const handleChange = (event) =>
   {
       newObj[event.target.name] = event.target.value;
      // console.log(newObj);     
   }

  const handleUpdate = (event) =>{
      console.log(myContext.entries[index])
      myContext.updateFunction(
       (prevObj)=>{
           prevObj[index] = newObj;
           return (prevObj)
       }
      );
      navigate('/student');
   }
   const handleCancel = ()=>{
    navigate('/student');
   } 
  
    // let index = 
  return (
    <>
    <div className='form'>
      <div>
       <div className='item'>
       <label>Name : </label>
        <input name='name' onChange={handleChange} defaultValue={myContext.entries[index].name}  />
        </div> 
        <div className='item'>
        <label>Age : </label>
        <input name='age' onChange={handleChange} defaultValue={myContext.entries[index].age}  />
        </div></div>
        <div>
        <div className='item'>
        <label>Course : </label>
        <input name='course' onChange={handleChange} defaultValue={myContext.entries[index].course}  />
        </div>
        <div className='item'>
        <label>Batch : </label>
        <input name='batch' onChange={handleChange} defaultValue={myContext.entries[index].batch}  />
        </div></div>
        
    </div>
    <div className='twoBox'>
    <button className='button' onClick={handleCancel}>Cancel</button>
    <button className='button' onClick={handleUpdate}>Update</button>
    </div>
    </>
  )
}

export default StudentEdit