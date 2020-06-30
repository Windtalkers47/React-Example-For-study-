import React from 'react'
import './regis.css'
export default function Register() {
  return (
    <div className='reg'>
      <div style={{ textAlign: 'center' }}>
          <img src={ process.env.PUBLIC_URL + 'assets/images/user.png' } width="200"></img>
      </div>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">E-mail</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="form-group">
          <label for="examplename">Name</label>
          <input type="text" class="form-control" id="exampleInputname"/>
        </div>
        <div class="form-group">
          <label for="exampleInputID">Custumer-ID</label>
          <input type="number" class="form-control" id="exampleInputid"/>
        </div>
        <div class="form-group">
          <label for="exampleInputDepartment">Department</label>
          <input type="text" class="form-control" id="exampleInputDepartment"/>
        </div>
        <button type="submit" class="btn btn-success btn-block">Register</button>
      </form>
    </div>
  )
}
