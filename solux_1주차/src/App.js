import logo from './logo.svg';
import Login from './Login';  
import Signup from './Signup';
import './App.css';
import React, { useState } from 'react';
function App() {
const [LoginView, setLoginView] = useState(true);
const toggleView = () => {
    setLoginView(!LoginView);
  };

  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>

      {LoginView ? (
        <Login onSwitch={toggleView} />
      ) : (
        <Signup onSwitch={toggleView} />
      )}
    </div>
  );
}

export default App;