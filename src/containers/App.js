import React from 'react';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import './App.css';
import store from '../store';

function App() {
  const { contacts } = store.getState();

  return (
    <div className="App">
      <Sidebar contacts={Object.values(contacts)} />
      <Main />
    </div>
  );
}

export default App;
