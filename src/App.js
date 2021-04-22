import React, { Component, useState, useEffect } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Main } from './pages/Main';
import { store } from './redux/store';
import { initAuth } from './redux/actions/userActions';
import './App.css';


function App() {
  const { user } = store.getState();
  console.log(user);

  useEffect(()=>{
    initAuth();
  }, []);
  
  if (!user) {
    return (
      <Route component={Login}/>
    )
  }
  else {
    return (
      <Provider store={store}>
          <div className="App">
              <Switch>
                  <Route exact path='/login' component={Login}/>
                  <Route exact path='/register' component={Register}/>
                  <Route exact path='/dashboard' component={Main}/>
              </Switch>
          </div>
        </Provider>
    );
  }
}

export default App;
