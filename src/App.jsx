import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Aside from './components/Aside';
import './App.css';

function App() {
  return (
    <div id="app" className="appClass">
      <Sidebar />
      <Aside />
    </div>
  );
}

export default App;
