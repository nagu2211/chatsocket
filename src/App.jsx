import Sidebar from './components/Sidebar';
import Aside from './components/Aside';
import Main from './components/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import Contacts from './components/Contacts';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [userInfo, setUserInfo] = useState({
    id: 1,
    imgUser: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWl-pf1jCsz-QnUJjwNC3MVgJpDBw10cVqiX2KIEF5g&s',
    name: 'Santiago A',
    info: 'Lorem ipsum dolor sit amet asd',
  });
  const infoChats = [
    {
      id: 1,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWl-pf1jCsz-QnUJjwNC3MVgJpDBw10cVqiX2KIEF5g&s',
      name: 'Santiago A',
      info: 'Lorem ipsum dolor sit amet asd',
      msgs: [
        { type: 'to', msg: 'Hello Santiago A!' },
        { type: 'from', msg: 'Hi! How are you?' },
        { type: 'to', msg: 'I am good, thank you!😊' },
      ],
      lastMessage: 'I am good, thank you!😊',
      pinned: true,
      muted: false,
      newMsg: 1,
    },
    {
      id: 2,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWl-pf1jCsz-QnUJjwNC3MVgJpDBw10cVqiX2KIEF5g&s',
      name: 'Santiago B',
      info: 'Lorem ipsum dolor sit amet asd',
      msgs: [
        { type: 'to', msg: 'Hello Santiago B!' },
        { type: 'from', msg: 'Hi! What are you doing?' },
        { type: 'to', msg: 'Just working on a project.' },
      ],
      lastMessage: 'Just working on a project.',
      pinned: false,
      muted: true,
      newMsg: 3,
    },
    {
      id: 3,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWl-pf1jCsz-QnUJjwNC3MVgJpDBw10cVqiX2KIEF5g&s',
      name: 'Santiago C',
      info: 'Lorem ipsum dolor sit amet asd',
      msgs: [
        { type: 'to', msg: 'Hello Santiago C!' },
        { type: 'from', msg: 'Hi! What are you doing?' },
        { type: 'to', msg: 'Just working on a project.' },
      ],
      lastMessage: 'Just working on a project.',
      pinned: false,
      muted: false,
      newMsg: 0,
    },
    {
      id: 4,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWl-pf1jCsz-QnUJjwNC3MVgJpDBw10cVqiX2KIEF5g&s',
      name: 'Santiago D',
      info: 'Lorem ipsum dolor sit amet asd',
      msgs: [
        { type: 'to', msg: 'Hello Santiago D!' },
        { type: 'from', msg: 'Hi! What are you doing?' },
        { type: 'to', msg: 'Just working on a project.' },
      ],
      lastMessage: 'Just working on a project.',
      pinned: false,
      muted: false,
      newMsg: 0,
    },
    {
      id: 5,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWl-pf1jCsz-QnUJjwNC3MVgJpDBw10cVqiX2KIEF5g&s',
      name: 'Santiago E',
      info: 'Lorem ipsum dolor sit amet asd',
      msgs: [
        { type: 'to', msg: 'Hello Santiago E!' },
        { type: 'from', msg: 'Hi! What are you doing?' },
        { type: 'to', msg: 'Just working on a project.' },
      ],
      lastMessage: 'Just working on a project.',
      pinned: false,
      muted: false,
      newMsg: 0,
    },
    {
      id: 6,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWl-pf1jCsz-QnUJjwNC3MVgJpDBw10cVqiX2KIEF5g&s',
      name: 'Santiago F',
      info: 'Lorem ipsum dolor sit amet asd',
      msgs: [
        { type: 'to', msg: 'Hello Santiago F!' },
        { type: 'from', msg: 'Hi! What are you doing?' },
        { type: 'to', msg: 'Just working on a project.' },
      ],
      lastMessage: 'Just working on a project.',
      pinned: false,
      muted: false,
      newMsg: 2,
    },
    {
      id: 7,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWl-pf1jCsz-QnUJjwNC3MVgJpDBw10cVqiX2KIEF5g&s',
      name: 'Santiago G',
      info: 'Lorem ipsum dolor sit amet asd',
      msgs: []
    },
    {
      id: 8,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWl-pf1jCsz-QnUJjwNC3MVgJpDBw10cVqiX2KIEF5g&s',
      name: 'Santiago H',
      info: 'Lorem ipsum dolor sit amet asd',
      msgs: []
    },
    {
      id: 9,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWl-pf1jCsz-QnUJjwNC3MVgJpDBw10cVqiX2KIEF5g&s',
      name: 'Santiago I',
      info: 'Lorem ipsum dolor sit amet asd',
      msgs: []
    },
    {
      id: 10,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWl-pf1jCsz-QnUJjwNC3MVgJpDBw10cVqiX2KIEF5g&s',
      name: 'Santiago J',
      info: 'Lorem ipsum dolor sit amet asd',
      msgs: []
    },
  ];
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
