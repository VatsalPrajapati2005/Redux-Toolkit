import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div>
    <h1>Header</h1>
    <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/view'>View</NavLink></li>
        <li><NavLink to='/viewwwddd'>Error</NavLink></li>
        {/* <li><NavLink to={'/singleblog/:id'}>View</NavLink></li>
        <li><NavLink to={'/update/:blogId'}>Update</NavLink></li> */}
    </ul>
    </div>
    </>
  )
}

export default Header