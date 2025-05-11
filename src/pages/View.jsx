import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../Redux-toolkit/userSlice';
import { FaTrash } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { FaPencil } from 'react-icons/fa6';

const View = () => {
    //method-1
    // const user=useSelector(state=>state)
    // console.log(user);
    // console.log(user.userData);
    
    //method-2
    const {userData}=useSelector(state=>state)
    console.log(userData);

    const dispatch=useDispatch()
    function trash(id){
        if(confirm("Do You Want Delete this Data ?"))
        dispatch(deleteUser(id))
    }
  return (
    <>
    <h1>View Page</h1>
    <table className='table table-striped table-hover table successs'>
        <thead className='table-dark'>
            <tr>
                <th>#</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>DoB</th>
                <th>Gender</th>
                <th>Hobbies</th>
                <th>Address</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                userData && userData.map((user,index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.mobile}</td>
                            <td>{user.date}</td>
                            <td>{user.gender}</td>
                            <td>{[user.hobbies].join(",")}</td>
                            <td>{user.address}</td>
                            <td>
                                <button onClick={()=>trash(user.id)} className='btn btn-outline-danger mx-3'><FaTrash/></button>
                                <NavLink className="btn btn-outline-warning" to={`/update/${user.id}`}><FaPencil/></NavLink>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
    </>
  )
}

export default View