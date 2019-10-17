import React from 'react';
import Sidebar from './Sidebar';
import Main from './Main';
import './App.css';
import store from './store';

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
