import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import context from './DataContext';
import  './Table.css'

function Table() {
    const myContext = useContext(context);
  return (
    <div>
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Change</th>
                </tr>
            </thead>
            <tbody>
    
      { myContext.entries.map((value,index) => {
        return (
            <tr key={index}>
                <td>{value.name}</td>
                <td>{value.age}</td>
                <td>{value.course}</td>
                <td>{value.batch}</td>
                <td>
                   
                    <Link to='/student-edit' state={{data:index}}>
                    <button>  Edit
                        </button>  </Link>
                 
                </td>
            </tr>
        )
      })}
            </tbody>
        </table>

    </div>
  )
}

export default Table