import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="/home">Open Shift</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                {/* <a class="nav-link" href="#">Register</a> */}
                <NavLink activeStyle={{ color: 'red' }} className="nav-link" to="/job">Job</NavLink>
              </li>
              <li class="nav-item active">
                {/* <a class="nav-link" href="#">Login</a> */}
                <NavLink activeStyle={{ color: 'red' }} className="nav-link" to="/login">Login</NavLink>
              </li>
              <li class="nav-item">
                {/* <a class="nav-link" href="#">Register</a> */}
                <NavLink activeStyle={{ color: 'red' }} className="nav-link" to="/register">Register</NavLink>
              </li>
            </ul>
          </div>
        </nav>
    </div>
  )
}
