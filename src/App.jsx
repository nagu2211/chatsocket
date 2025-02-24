import Sidebar from './components/Sidebar';
import Aside from './components/Aside';
import Main from './components/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import Contacts from './components/Contacts';
import React, { useState, useEffect } from 'react';
import infoChatsJson from './infoChats.json';
import './App.css';

function App() {
  const [userInfo, setUserInfo] = useState({
    imgUser: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWl-pf1jCsz-QnUJjwNC3MVgJpDBw10cVqiX2KIEF5g&s',
    name: 'Santiago A',
    info: 'Lorem ipsum dolor sit amet asd',
  });
  const [infoChats, setInfoChats] = useState(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts'));
    return storedContacts || infoChatsJson;
  });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState(
    infoChats.reduce((acc, contact) => {
      acc[contact.id] = contact.msgs;
      return acc;
    }, {})
  );
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSelectChat = (chat) => {
    setSelectedChat(chat);
  };

  const handleSendMessage = (msg, contactId) => {
    setMessages((prevMessages) => {
      const contactMessages = prevMessages[contactId] || [];
      return {
        ...prevMessages,
        [contactId]: [...contactMessages, { type: 'from', msg }],
      };
    });
  };
  return (
    <div id="app" className="appClass">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Aside infoChats={infoChats} onSelectChat={handleSelectChat} user={userInfo} windowWidth={windowWidth} />} />
          <Route exact path="/profile" element={<Profile userInfo={userInfo} setUserInfo={setUserInfo} />} />
          <Route exact path="/contacts" element={<Contacts chats={infoChats} onSelectChat={handleSelectChat} />} />
          <Route
            exact
            path="/chat/:id"
            element={<Main selectedChat={selectedChat} messages={messages[selectedChat ? selectedChat.id : null] || []} onSendMessage={handleSendMessage} windowWidth={windowWidth} />}
          />
        </Routes>
      </BrowserRouter>
      <Main selectedChat={selectedChat} messages={messages[selectedChat ? selectedChat.id : null] || []} onSendMessage={handleSendMessage} />
    </div>
  );
}

export default App;
