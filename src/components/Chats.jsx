import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Chats = ({ chats, onSelectChat, userInfo, windowWidth }) => {
  const [hoveredChatId, setHoveredChatId] = useState(null);

  const [chatList, setChatList] = useState(chats);

  const [filter, setFilter] = useState('all');

  const navigate = useNavigate();

  const togglePin = (id) => {
    setChatList((prevList) => prevList.map((chat) => (chat.id === id ? { ...chat, pinned: !chat.pinned } : chat)));
  };

  const toggleMute = (id) => {
    setChatList((prevList) => prevList.map((chat) => (chat.id === id ? { ...chat, muted: !chat.muted } : chat)));
  };

  const markAsRead = (id) => {
    setChatList(chatList.map((chat) => (chat.id === id ? { ...chat, newMsg: 0 } : chat)));
  };

  const pinnedChats = chatList.filter((chat) => chat.pinned && !chat.muted);
  const recentChats = chatList.filter((chat) => !chat.pinned && !chat.muted);
  const mutedChats = chatList.filter((chat) => chat.muted);

  const filteredChats = (chatsArray) => {
    if (filter === 'notRead') {
      return chatsArray.filter((chat) => chat.newMsg > 0);
    }
    return chatsArray;
  };


  return (
    <>
      <header className="header-chats">
        <h2 className="title-chats">Chats</h2>
        
      </header>
      <Link to="/profile">
        <div className="me-barchat">
          <div className="me-profile-img">
            <img src={userInfo.imgUser} alt="user image profile" />
          </div>
          <div className="me-info-chat">
            <span className="me-name">{userInfo.name}</span>
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
        {filteredChats(pinnedChats).map((chat) =>
          chat.msgs.length === 0 ? null : (
            <div key={chat.id}>
              <div
                className="barchat"
                onClick={() => {
                  markAsRead(chat.id);
                  onSelectChat(chat);
                  if (windowWidth < 1080) {
                    navigate(`/chat/${chat.id}`);
                  }
                }}
              >
                {' '}
                <div className="profile-img-chat">
                  <img src={chat.img} alt="" />
                </div>
                <div className="info-chat">
                  <span className="name-chat">
                    {chat.name} <span className="content-chat"> - {chat.lastMessage} </span>
                  </span>
                </div>
                <div className="icons-action-barchat">
                  {chat.newMsg > 0 ? <div className="noti-aside">{chat.newMsg}</div> : <div className="noti-aside hidden"></div>}
                  <div
                    className="pin-aside"
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePin(chat.id);
                    }}
                  >
                    <i className="fa-solid fa-thumbtack"></i>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
        <h4 className="sub-title-aside">RECENT CHATS</h4>
        {filteredChats(recentChats).map((chat) =>
          chat.msgs.length === 0 ? null : (
            <div key={chat.id}>
              <div
                className="barchat"
                key={chat.id}
                onClick={() => {
                  markAsRead(chat.id);
                  onSelectChat(chat);
                  if (windowWidth < 1080) {
                    navigate(`/chat/${chat.id}`);
                  }
                }}
                onMouseEnter={() => setHoveredChatId(chat.id)}
                onMouseLeave={() => setHoveredChatId(null)}
              >
                <div className="profile-img-chat">
                  <img src={chat.img} alt="" />
                </div>
                <div className="info-chat">
                  <span className="name-chat">
                    {chat.name} <span className="content-chat"> - {chat.lastMessage} </span>
                  </span>
                </div>
                {chat.newMsg > 0 ? (
                  <div className="noti-aside">{chat.newMsg}</div>
                ) : (
                  hoveredChatId === chat.id && (
                    <div className="icons-action-barchat">
                      <div
                        className="action-barchat mute"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleMute(chat.id);
                        }}
                      >
                        <i className="fa-solid fa-volume-xmark"></i>
                      </div>
                      <div
                        className="action-barchat pin"
                        onClick={(e) => {
                          e.stopPropagation();
                          togglePin(chat.id);
                        }}
                      >
                        <i className="fa-solid fa-thumbtack"></i>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          )
        )}

        <h4 className="sub-title-aside">MUTED CHATS</h4>
        {filteredChats(mutedChats).map((chat) =>
          chat.msgs.length === 0 ? null : (
            <div key={chat.id}>
              <div
                className="barchat"
                key={chat.id}
                onClick={() => {
                  markAsRead(chat.id);
                  onSelectChat(chat);
                  if (windowWidth < 1080) {
                    navigate(`/chat/${chat.id}`);
                  }
                }}
              >
                <div className="profile-img-chat">
                  <img src={chat.img} alt="" />
                </div>
                <div className="info-chat">
                  <span className="name-chat">
                    {chat.name} <span className="content-chat"> - {chat.lastMessage} </span>
                  </span>
                </div>
                <div className="icons-action-barchat">
                  {chat.newMsg > 0 ? <div className="noti-aside">{chat.newMsg}</div> : <div className="noti-aside hidden"></div>}
                  <div
                    className="pin-aside"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMute(chat.id);
                    }}
                  >
                    <i className="fa-solid fa-volume-xmark"></i>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </section>
    </>
  );
};

export default Chats;
