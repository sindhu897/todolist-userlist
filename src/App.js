import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,Redirect
} from "react-router-dom";
import Todo from './todo'
import User from './user.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './nav'

function App() {
  return (
    <div className="bg-clr p-0">
    
    <Router>
    <Nav/>
      <Switch>
      <Route exact path="/">
        <Redirect to="/todo" /> 
      </Route>
      
        <Route path="/todo">
          <Todo />
        </Route>
        <Route path="/userlist">
          <User />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;