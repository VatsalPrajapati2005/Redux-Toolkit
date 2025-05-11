import React from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { addUser } from "../Redux-toolkit/userSlice"
import { useNavigate } from "react-router-dom"
// import { v4 as uuidv4 } from "uuid"
import { v4 as uuidv4 } from 'uuid';
const Home=()=>{
    const {register,handleSubmit,reset}=useForm()
    const dispatch=useDispatch()
    const redirect=useNavigate()
   async function submitdata(data){
    console.log({...data,id:uuidv4()});
   // const newData={...data,id:uuidv4}
   const newData = {...data, id: uuidv4()}

        dispatch(addUser(newData))
        alert("inserted....")
        redirect('/view')
        
    }
    
    return(
        <>
        <h1>Form</h1>
        <div className="container my-5 p-5 shadow">
            <form action="" method="post" onSubmit={handleSubmit(submitdata)}>
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
                    <input type="radio"{...register('gender')} value="male" className="form-check  "/>male
                    <input type="radio"{...register('gender')} value="female" className="form-check ms-3"/>female
                    <input type="radio"{...register('gender')} value="other" className="form-check ms-3"/>other
                </div>
                <div className="mt-3 d-flex ">
                    <input type="checkbox"{...register('hobbies')} value="playing" className="form-check"/>playing
                    <input type="checkbox"{...register('hobbies')} value="reading" className="form-check ms-3"/>reading
                    <input type="checkbox"{...register('hobbies')} value="other" className="form-check ms-3"/>other
                </div>
                <div className="mt-4">
                    <textarea placeholder="Enter Address"{...register('address')} className="form-control"></textarea>
                </div>
                <div className="mt-4">
                    <button className="btn btn-success w-100">Submit</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default Home
