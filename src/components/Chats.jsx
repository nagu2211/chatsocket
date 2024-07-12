import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Chats = () => {
  const [hoveredChatId, setHoveredChatId] = useState(null);
  const [chats, setChats] = useState([
    { id: 1, name: 'Santiago A', message: 'Lorem ipsum dolor sit amet', pinned: true, muted: false, newMsg: 1 },
    { id: 2, name: 'Santiago B', message: 'Lorem ipsum dolor sit amet', pinned: false, muted: true, newMsg: 3 },
    { id: 3, name: 'Santiago C', message: 'Lorem ipsum dolor sit amet', pinned: false, muted: false, newMsg: 0 },
    { id: 4, name: 'Santiago D', message: 'Lorem ipsum dolor sit amet', pinned: false, muted: false, newMsg: 0 },
    { id: 5, name: 'Santiago E', message: 'Lorem ipsum dolor sit amet', pinned: false, muted: false, newMsg: 0 },
    { id: 6, name: 'Santiago F', message: 'Lorem ipsum dolor sit amet', pinned: false, muted: false, newMsg: 2 },
  ]);
  const [filter, setFilter] = useState('all');

  const togglePin = (id) => {
    setChats(chats.map((chat) => (chat.id === id ? { ...chat, pinned: !chat.pinned } : chat)));
  };

  const toggleMute = (id) => {
    setChats(chats.map((chat) => (chat.id === id ? { ...chat, muted: !chat.muted } : chat)));
  };

  const pinnedChats = chats.filter((chat) => chat.pinned && !chat.muted);
  const recentChats = chats.filter((chat) => !chat.pinned && !chat.muted);
  const mutedChats = chats.filter((chat) => chat.muted);

  const filteredChats = (chatsArray) => {
    if (filter === 'notRead') {
      return chatsArray.filter(chat => chat.newMsg > 0);
    }
    return chatsArray;
  };

  return (
    <>
      <header className="header-chats">
        <h2 className="title-chats">Chats</h2>
        <span>
          <i className="fas fa-solid fa-user-plus"></i>
        </span>
      </header>
      <Link to="/profile">
        <div className="me-barchat">
          <div className="me-profile-img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWl-pf1jCsz-QnUJjwNC3MVgJpDBw10cVqiX2KIEF5g&s" alt="" />
          </div>
          <div className="me-info-chat">
            <span className="me-name"> Santiago Espindola </span>
            <span className="me-online"> Available </span>
          </div>
        </div>
      </Link>
      <div className="btn-aside-container">
        <button className="btn-aside" onClick={() => setFilter('all')}>
          <span>All</span>
        </button>
        <button className="btn-aside" onClick={() => setFilter('notRead')}>
          <span>Not read</span>
        </button>
      </div>

      <section className="container-barchat">
        <h4 className="sub-title-aside">PINNED CHATS</h4>
        {filteredChats(pinnedChats).map((chat) => (
          <div className="barchat" key={chat.id}>
            <div className="profile-img-chat">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWl-pf1jCsz-QnUJjwNC3MVgJpDBw10cVqiX2KIEF5g&s" alt="" />
            </div>
            <div className="info-chat">
              <span className="name-chat">
                {chat.name} <span className="content-chat"> - {chat.message} </span>
              </span>
            </div>
            <div className="icons-action-barchat">
              {chat.newMsg > 0 ? <div className="noti-aside">{chat.newMsg}</div> : <div className="noti-aside hidden"></div>}
              <div className="pin-aside" onClick={() => togglePin(chat.id)}>
                <i className="fa-solid fa-thumbtack"></i>
              </div>
            </div>
          </div>
        ))}
        <h4 className="sub-title-aside">RECENT CHATS</h4>
        {filteredChats(recentChats).map((chat) => (
          <div className="barchat" key={chat.id} onMouseEnter={() => setHoveredChatId(chat.id)} onMouseLeave={() => setHoveredChatId(null)}>
            <div className="profile-img-chat">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWl-pf1jCsz-QnUJjwNC3MVgJpDBw10cVqiX2KIEF5g&s" alt="" />
            </div>
            <div className="info-chat">
              <span className="name-chat">
                {chat.name} <span className="content-chat"> - {chat.message} </span>
              </span>
            </div>
            {chat.newMsg > 0 ? (
              <div className="noti-aside">{chat.newMsg}</div>
            ) : (
              hoveredChatId === chat.id && (
                <div className="icons-action-barchat">
                  <div className="action-barchat" onClick={() => toggleMute(chat.id)}>
                    <i className="fa-solid fa-volume-xmark"></i>
                  </div>
                  <div className="action-barchat" onClick={() => togglePin(chat.id)}>
                    <i className="fa-solid fa-thumbtack"></i>
                  </div>
                </div>
              )
            )}
          </div>
        ))}

        <h4 className="sub-title-aside">MUTED CHATS</h4>
        {filteredChats(mutedChats).map((chat) => (
          <div className="barchat" key={chat.id}>
            <div className="profile-img-chat">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWl-pf1jCsz-QnUJjwNC3MVgJpDBw10cVqiX2KIEF5g&s" alt="" />
            </div>
            <div className="info-chat">
              <span className="name-chat">
                {chat.name} <span className="content-chat"> - {chat.message} </span>
              </span>
            </div>
            <div className="icons-action-barchat">
              {chat.newMsg > 0 ? <div className="noti-aside">{chat.newMsg}</div> : <div className="noti-aside hidden"></div>}
              <div className="pin-aside" onClick={() => toggleMute(chat.id)}>
                <i className="fa-solid fa-volume-xmark"></i>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Chats;
