import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import {  useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../Redux-toolkit/userSlice'

const Update = () => {
      const {register,handleSubmit,reset}=useForm()
      const {userId}=useParams()
      const dispatch=useDispatch()
      const redirect=useNavigate()
      console.log(userId);

  //get all user Data
  const {userData}=useSelector(state=>state)
    console.log(userData);

    const singleUser=userData.find((user)=>{
      return user.id===userId
    })
      console.log(singleUser);
          
  useEffect(()=>{
    reset(singleUser)
  },[])

  function update(data){
    console.log(data);
    dispatch(updateUser(data))
    redirect('/view')
  }
  return (
    <>
    <h1>Update Form</h1>
    <div className="container my-5 p-5 shadow">
            <form action="" method="post" onSubmit={handleSubmit(update)}>
                <div className="mt-4">
                    <input type="text"{...register('username')} className="form-control" placeholder="Enter Username"/>
                </div>
                <div className="mt-4">
                    <input type="text"{...register('email')} className="form-control" placeholder="Enter Email"/>
                </div>
                <div className="mt-4">
                    <input type="number"{...register('mobile')} className="form-control" placeholder="Enter Mobile"/>
                </div>
                <div className="mt-4">
                    <input type="date" {...register('date')} className="form-control" placeholder="Enter date"/>
                </div>
                <div className="mt-3 d-flex ">
                    <input type="radio"{...register('gender')} value="male" className="form-check  "/>Male
                    <input type="radio"{...register('gender')} value="female" className="form-check ms-3"/>Female
                    <input type="radio"{...register('gender')} value="other" className="form-check ms-3"/>Other
                </div>
                <div className="mt-3 d-flex ">
                    <input type="checkbox"{...register('hobbies')} value="playing" className="form-check"/>Playing
                    <input type="checkbox"{...register('hobbies')} value="reading" className="form-check ms-3"/>Reading
                    <input type="checkbox"{...register('hobbies')} value="other" className="form-check ms-3"/>Other
                </div>
                <div className="mt-4">
                    <textarea placeholder="Enter Address"{...register('address')} className="form-control"></textarea>
                </div>
                <div className="mt-4">
                    <button className="btn btn-warning w-100">Update</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default Update