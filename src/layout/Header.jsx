import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <>
    <div>
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Header</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul class="navbar-nav mx-5" >
         <li><NavLink to='/' className="mx-4 text-decoration-none">Home</NavLink></li>
         <li><NavLink to='/view' className="mx-4 text-decoration-none">View</NavLink></li>
         <li><NavLink to={'/update/:blogId'} className="mx-4 text-decoration-none">Update</NavLink></li>
         <li><NavLink to='/viewwwddd'className="mx-4 text-decoration-none">Error</NavLink></li>
          </ul>
        
    </div>
  </div>
</nav>
    
    </div>
    </>
  )
}

export default Header



//