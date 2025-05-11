import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import userSlice from './userSlice'

const Store = configureStore({
  reducer :userSlice
})


export default Store