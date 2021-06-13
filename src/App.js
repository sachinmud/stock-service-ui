import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import Login from './components/login/Login'
import Home from './components/login/Home'
import Register from './components/register/Register'
import Header from './components/common/Header';
import Permission from './components/permission/Permission';
import PermissionSearch from './components/permission/PermissionSearch';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.slim.min.js';
import 'popper.js/dist/popper.min.js'
import React from 'react';

const store = require('./reducers').init();
class App extends React.Component {
  render(){
    return (
      <Provider store={store} >
        <BrowserRouter>
          <div className="App container-fluid">
            <div>
              <Route exact path='/' render={()=><Redirect to='/login'/>} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/home' component={Home} />
              <Route exact path='/permission' component={Permission} />
              <Route path='/permission/search/' component={PermissionSearch} />
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  };
}

export default App;
