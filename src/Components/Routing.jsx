import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Routes/Home'
import Students from './Routes/Students'
import Contactus from './Routes/Contactus'
import context from './Context/DataContext'
import StudentEdit from './Routes/StudentEdit'
import StudentAdd from './Routes/StudentAdd'
// import Home1 from './Routes/Home'
function Routing() {
  
  const [data,setData] = useState(
   [])
  return (
    <div>
        <Routes>
            <Route path='/' element={
           <Home />
            }></Route>
            <Route path='/student' element={
            <context.Provider value={{entries:data,updateFunction:setData}}>
            <Students />
            </context.Provider>
            }></Route>
            <Route path='/contactus' element={
             <Contactus />
            }></Route>
           <Route path='/student-add' element={
            <context.Provider value={{entries:data,updateFunction:setData}}>
            <StudentAdd />
            </context.Provider>
            }></Route>
             <Route path='/student-edit' element={
            <context.Provider value={{entries:data,updateFunction:setData}}>
            <StudentEdit />
            </context.Provider>
            }></Route>

        </Routes>
    </div>
  )
}

export default Routing