import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Aside from './components/Aside';
import Main from './components/Main';
import './App.css';

function App() {
  return (
    <div id="app" className="appClass">
      <Sidebar />
      <Aside />
      <Main/>
    </div>
  );
}

export default App;
