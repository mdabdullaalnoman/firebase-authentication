import React from 'react';
import AllAuthentications from './Components/AllAuthentications';
import EmailSignInSingUp from './Components/EmailSignInSingUp';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Header from './Components/Header';
import Register from './Components/Register';


const App = () => {
  return (
    // <div className="app">
    //   <AllAuthentications/>
    //   <EmailSignInSingUp/>
    // </div>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;


