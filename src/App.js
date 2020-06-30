import React from 'react';
import Header from './components/Header'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Home from './pages/Home/Home'
import Create from './pages/Create/Create'
import Edit from './pages/Edit/Edit'
import JobPage from './pages/JobPage/JobPage'
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import PrivateRoute from './helper/PrivateRoute'

var routes = {
  login: '/login',
  register: '/register',
  home: '/home',
  jobpage: '/job',
  create: '/create',
  edit: '/edit/:id'
}

function App() {
  return (
    <div>
      <Header/>
      <div className="container login">
          <Switch>
            <Redirect exact from="/" to={routes.login}></Redirect>
            <Route exact path={routes.login} component={Login}></Route>
          </Switch>
      </div>
      <div className="container">
          <Switch>
              <Route exact path={routes.register} component={Register}></Route>
              <PrivateRoute exact path={routes.home} component={Home}></PrivateRoute>
              <PrivateRoute exact path={routes.jobpage} component={JobPage}></PrivateRoute>
              <PrivateRoute exact path={routes.create} component={Create}></PrivateRoute>
              <PrivateRoute exact path={routes.edit} component={Edit}></PrivateRoute>
              
          </Switch>
      </div>
    </div>
  );
}

export default App;
