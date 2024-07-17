import Sidebar from './components/Sidebar';
import Aside from './components/Aside';
import Main from './components/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import Contacts from './components/Contacts';
import React, { useState } from 'react';
import './App.css';

function App() {
  const infoContacts = [{
      id: 1,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWl-pf1jCsz-QnUJjwNC3MVgJpDBw10cVqiX2KIEF5g&s',
      name: 'Santiago A',
      info:'Lorem ipsum dolor sit amet asd',
      message: 'Lorem ipsum dolor sit amet',
      pinned: true,
      muted: false,
      newMsg: 1,
    },
    {
      id: 2,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWl-pf1jCsz-QnUJjwNC3MVgJpDBw10cVqiX2KIEF5g&s',
      name: 'Santiago B',
      info:'Lorem ipsum dolor sit amet asd',
      message: 'Lorem ipsum dolor sit amet',
      pinned: false,
      muted: true,
      newMsg: 3,
    },
    {
      id: 3,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWl-pf1jCsz-QnUJjwNC3MVgJpDBw10cVqiX2KIEF5g&s',
      name: 'Santiago C',
      info:'Lorem ipsum dolor sit amet asd',
      message: 'Lorem ipsum dolor sit amet',
      pinned: false,
      muted: false,
      newMsg: 0,
    },
    {
      id: 4,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWl-pf1jCsz-QnUJjwNC3MVgJpDBw10cVqiX2KIEF5g&s',
      name: 'Santiago D',
      info:'Lorem ipsum dolor sit amet asd',
      message: 'Lorem ipsum dolor sit amet',
      pinned: false,
      muted: false,
      newMsg: 0,
    },
    {
      id: 5,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWl-pf1jCsz-QnUJjwNC3MVgJpDBw10cVqiX2KIEF5g&s',
      name: 'Santiago E',
      info:'Lorem ipsum dolor sit amet asd',
      message: 'Lorem ipsum dolor sit amet',
      pinned: false,
      muted: false,
      newMsg: 0,
    },
    {
      id: 6,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWl-pf1jCsz-QnUJjwNC3MVgJpDBw10cVqiX2KIEF5g&s',
      name: 'Santiago F',
      info:'Lorem ipsum dolor sit amet asd',
      message: 'Lorem ipsum dolor sit amet',
      pinned: false,
      muted: false,
      newMsg: 2,
    },
  ];

  const [selectedChat, setSelectedChat] = useState(null);

  const handleSelectChat = (chat) => {
    setSelectedChat(chat);
  };

  return (
    <div id="app" className="appClass">
      <BrowserRouter>
        <Sidebar />
        <Routes>
        <Route exact path="/" element={<Aside infoContacts={infoContacts} onSelectChat={handleSelectChat} />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/contacts" element={<Contacts chats={infoContacts} onSelectChat={handleSelectChat}/> } />
        </Routes>
      </BrowserRouter>
      <Main selectedChat={selectedChat} />
    </div>
  );
}

export default App;
