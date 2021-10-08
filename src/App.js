import React from 'react';
import AllAuthentications from './Components/AllAuthentications';
import EmailSignInSingUp from './Components/EmailSignInSingUp';
import './App.css';
import OrginalAuthentication from './Components/OrginalAuthentication';

const App = () => {
  return (
    <div className="app">
      {/* <EmailSignInSingUp/>
      <AllAuthentications /> */}
      <OrginalAuthentication/>
    </div>
  );
};

export default App;