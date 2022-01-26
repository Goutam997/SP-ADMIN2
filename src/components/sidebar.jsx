import React from 'react';
import {Link} from "react-router-dom";

function Sidebar(){
  return <div>
            <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                </div>
                <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

            
            <hr class="sidebar-divider my-0"/>

            
            <li class="nav-item active">
              <Link to="/dashboard">
                <a class="nav-link" href="index.html">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></a>
              </Link>      
            </li>

            <hr class="sidebar-divider"/>
            <div class="sidebar-heading">
                Interface
            </div>

            <li class="nav-item">
              <Link to="/add-student">
                <a class="nav-link" href="#">
                    <i class="fas fa-fw fa-chart-area"></i>
                    <span>Add Student</span></a>
              </Link>      
            </li>

            <li class="nav-item">
              <Link to="/all-students">
                <a class="nav-link" href="#">
                    <i class="fas fa-fw fa-table"></i>
                    <span>All Students</span></a>
              </Link>      
            </li>
        </ul>
  </div>
}

export default Sidebar;