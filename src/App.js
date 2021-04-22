import React, { Component, useState, useEffect } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { auth, db } from './services/firebase';
import Login from './pages/Login';
import Register from './pages/Register';
import Main from './pages/Main';
import { store } from './redux/store';
import './App.css';


function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
      db.collection('tasks')
      .get()
      .then(querySnapshot => {
          const tasks = [];
          querySnapshot.forEach(doc => {
              tasks.push({
                id: doc.id, 
                ...doc.data()});
          });
          setTasks(tasks);
          console.log(tasks);
      })
      .catch(error => {
          console.log(error);
      });
  }, []);

  return (
    <Provider store={store}>
      <Router>
          <div className="App">
              <Switch>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/register' component={Register}/>
                <Route exact path='/dashboard' component={Main}/>
              </Switch>
          </div>
        </Router>
      </Provider>
  );
}

export default App;
