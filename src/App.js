import React, { useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { Main } from './pages/Main/Main';
import { PrivateRoute } from './components/privateRoute';
import { PublicRoute } from './components/publicRoute';
import { initAuth } from './redux/actions/userActions';
import './App.css';


function App(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((store) => store.user?.user);

  useEffect(()=>{
    if(!user) {
      initAuth(dispatch, history);
    }
  }, []);
    
  return (
          <div className="App">
              <Switch>
                  <PublicRoute exact path='/login' user={user} component={Login}></PublicRoute>
                  <PublicRoute exact path='/register' user={user} component={Register}></PublicRoute>
                  <PrivateRoute path="/" user={user} component={Main}></PrivateRoute>
              </Switch>
          </div>
    );
}

export default App;
