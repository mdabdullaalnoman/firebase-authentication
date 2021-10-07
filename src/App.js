import React from 'react';
import AllAuthentications from './Components/AllAuthentications';
import EmailSignInSingUp from './Components/EmailSignInSingUp';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <EmailSignInSingUp/>
      <AllAuthentications />
    </div>
  );
};

export default App;