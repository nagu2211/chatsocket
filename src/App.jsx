import Sidebar from './components/Sidebar';
import Aside from './components/Aside';
import Main from './components/Main';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Profile from './components/Profile';

function App() {
  return (
    <div id="app" className="appClass">
      <BrowserRouter>
      <Sidebar />
      <Routes>
      <Route exact path="/" element={<Aside/>}/>
      <Route exact path="/profile" element={<Profile/>}/>
      </Routes>
        
      </BrowserRouter>
      <Main />
    </div>
  );
}

export default App;
