import React, { useEffect } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { Main } from './pages/Main';
import { PrivateRoute } from './components/privateRoute';
import { PublicRoute } from './components/publicRoute';
import { initAuth } from './redux/actions/userActions';
import './App.css';

function App() {
  const user = useSelector(store => store.user?.user);
  const dispatch = useDispatch();

  console.log('User', user);

  useEffect(()=>{
    initAuth(dispatch);
  }, []);
  
    return (
          <div className="App">
              <Switch>
                  <PublicRoute exact path='/login' isAuth={user!==null} component={Login}></PublicRoute>
                  <PublicRoute exact path='/register' isAuth={user!==null} component={Register}></PublicRoute>
                  <PrivateRoute path="/" isAuth={ user!==null } component={Main}></PrivateRoute>
              </Switch>
          </div>
    );
}

export default App;
