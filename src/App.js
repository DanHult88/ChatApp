import React from 'react';
import './App.css';
import Chat from './components/Chat';
import Login from './components/Login';  // Assuming you have a Login component
import SignUp from './components/SignUp';  // Assuming you have a SignUp component

function App() {
  return (
    <div className="App">
      {/* Assuming you have a router or some logic to switch between components */}
      <Chat />
      {/* Add Login and SignUp components as needed */}
    </div>
  );
}

export default App;
