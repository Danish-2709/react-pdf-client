import React from 'react'
// import { a } from "react-router-dom"
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";

export default function AdminPanel() {
  return (
    <>
<div>
<nav className="navbar bg-body-tertiarys shadow-sm mb-1  ">
  <div className="container-fluid">
  <form className="d-flex mt-0" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-primary" type="submit">Search</button>
      </form>
      <div className="dropdown mx-3">
      <p className="d-flex align-items-center text-dark text-decoration-none dropdown-toggle mb-0" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
        <strong className='text-dark'>Admin</strong>
      </p>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a className="dropdown-item" href="/" style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
        <NotificationsRoundedIcon style={{ marginRight: '8px' }} />New Project..</a></li>
        <li><a className="dropdown-item" href="/" style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
        <SettingsApplicationsRoundedIcon style={{ marginRight: '8px' }} />Settings</a></li>
        <li><a className="dropdown-item" href="/" style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
        <AccountCircleRoundedIcon style={{ marginRight: '8px' }} />Profile</a></li>
        <li><hr className="dropdown-divider"  /></li>
        <li><a className="dropdown-item" href="/" style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
        <LogoutRoundedIcon style={{ marginRight: '8px' }} />Log out</a></li>
      </ul>
    </div>  
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Close</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-a active" aria-current="page" href="/PDF">Dashboard</a>
          </li>
          <li className="nav-item">
            <a className="nav-a" href="/PDF">Upload File</a>
          </li>
        </ul>
        <form className="d-flex mt-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
</div> 
    </>
  )
}
