import React from 'react'
import './Login.css'

export default function Login(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.history.push('/job')
  }

  
  return (
    <div className = "home-size">
      <div style={{ textAlign: 'center' }}>
          <img src={ process.env.PUBLIC_URL + 'assets/images/logo-login.png' } width="200"></img>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="exampleInputEmail1">Username</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <button type="submit" className="btn btn-danger btn-block">Login</button>
      </form>
    </div>
  )
}
