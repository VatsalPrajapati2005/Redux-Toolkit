import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
console.log("check.......");

//Type -1
const initialState={
    userData:[],
    counter:0,
    name :"Vatsal"
}
const userSlice =createSlice ({
  name : "users",
  initialState,
  //Type -2
//   initialState:{
//     userData:[],
//     counter:0,
//     name:"Vatsal"
//   }
  reducers:{
    addUser:(state,action)=>{
        console.log(action);
        console.log(action.payload);
        state.userData.push(action.payload)
         },

    deleteUser:(state,action)=>{
      console.log(action.payload);
      const id=action.payload
      const filterData=state.userData.filter((user)=>{
        return user.id!==id
      })
      state.userData=filterData  
    },
    updateUser:(state,action)=>{
      console.log(action.payload);
      const {id}=action.payload
      console.log(id);
      
      //find index number
      const index=state.userData.findIndex((user)=>{
        return user.id===id
      })


      
      //if data not found then return -1
      if(index!= -1){
        state.userData[index]=action.payload
      }
    }
  }
  })

export const {addUser,deleteUser,updateUser}=userSlice.actions
export default userSlice.reducer