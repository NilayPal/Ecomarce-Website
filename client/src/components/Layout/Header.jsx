import React from 'react'
import {NavLink, Link} from "react-router-dom"
import { useAuth } from '../../Context/Auth'
import toast from 'react-hot-toast'

const Header = () => {

  const [auth, setAuth]=useAuth()

  const handelLogout= ()=>{
    setAuth({
      ...auth,
      user:null,
      token:"",
    });
    localStorage.removeItem("auth");
    toast.success('Logout Succesfully');
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <Link to="/" className="navbar-brand" >🛒 Ecommarce App </Link>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/" className="nav-link " aria-current="page" href="#">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/category" className="nav-link " aria-current="page" href="#">Category</NavLink>
        </li>
       {
        !auth.user ? (<>
          <li className="nav-item">
          <NavLink to="/register" className="nav-link" href="#">Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/login" className="nav-link" href="#">Login</NavLink>
        </li>
        </>) : (<>
          <li className="nav-item">
          <NavLink onClick={handelLogout} to="/login" className="nav-link" href="#">Logout</NavLink>
        </li>
        </>)
       }
        <li className="nav-item">
          <NavLink to="/cart" className="nav-link" href="#">Cart (0)</NavLink>
        </li>
      </ul>

    </div>
  </div>
</nav>

    </>
  )
}

export default Header
