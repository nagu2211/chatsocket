import Sidebar from './components/Sidebar';
import Aside from './components/Aside';
import Main from './components/Main';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from './components/Profile';
import Contacts from './components/Contacts';
import './App.css';

function App() {
  return (
    <div id="app" className="appClass">
      <BrowserRouter>
      <Sidebar />
      <Routes>
      <Route exact path="/" element={<Aside/>}/>
      <Route exact path="/profile" element={<Profile/>}/>
      <Route exact path="/contacts" element={<Contacts/>}/>
      </Routes>
        
      </BrowserRouter>
      <Main />
    </div>
  );
}

export default App;
