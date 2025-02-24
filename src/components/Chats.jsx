import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Chats = ({ chats, onSelectChat, userInfo, windowWidth }) => {
  const [profile, setProfile] = useState(() => {
    const storedProfile = JSON.parse(localStorage.getItem('profile'));
    if (storedProfile && storedProfile.length > 0) {
      return storedProfile;
    } else {
      localStorage.setItem('profile', JSON.stringify(userInfo));
      return storedProfile;
    }
  });
  const [chatList, setChatList] = useState(() => {
    const chatsLs = JSON.parse(localStorage.getItem('contacts'));
    if (chatsLs && Array.isArray(chatsLs)) {
      return chatsLs.map((chat) => ({
        ...chat,
        msgs: chat.msgs || [],
      }));
    } else {
      localStorage.setItem('contacts', JSON.stringify(chats));
      return chats;
    }
  });
  const getShortMessage = (message) => {
    if (!message) return "";
  
    const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
    const segments = [...segmenter.segment(message)].map((s) => s.segment);
    
    return segments.length > 22 ? segments.slice(0, 22).join("") + "..." : message;
  };
  const getShortUserName = (name) => {
    return name.length > 16 ? name.slice(0, 16) : name;
  };
  useEffect(() => {
    const updateChatList = () => {
      const chatsLs = JSON.parse(localStorage.getItem('contacts')) || [];
      setChatList(chatsLs);
    };

    updateChatList();

    const handleStorageChange = () => {
      updateChatList();
    };

    window.addEventListener('storage', handleStorageChange);

    const originalSetItem = localStorage.setItem;
    localStorage.setItem = function (key, value) {
      originalSetItem.apply(this, arguments);
      handleStorageChange();
    };

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      localStorage.setItem = originalSetItem;
    };
  }, []);
  const [hoveredChatId, setHoveredChatId] = useState(null);

  const [filter, setFilter] = useState('all');

  const navigate = useNavigate();

  const togglePin = (id) => {
    setChatList((prevList) => {
      const updatedList = prevList.map((chat) => (chat.id === id ? { ...chat, pinned: !chat.pinned } : chat));
      localStorage.setItem('contacts', JSON.stringify(updatedList));
      return updatedList;
    });
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
            <img src={profile.imgUser} alt="user image profile" />
          </div>
          <div className="me-info-chat">
            <span className="me-name">{profile.name}</span>
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
          Array.isArray(chat.msgs) && chat.msgs.length === 0 ? null : (
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
                  {getShortUserName(chat.name)} <span className="content-chat"> - {getShortMessage(chat.lastMessage)}</span>
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
          Array.isArray(chat.msgs) && chat.msgs.length === 0 ? null : (
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
                  {getShortUserName(chat.name)} <span className="content-chat"> - {getShortMessage(chat.lastMessage)} </span>
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
          Array.isArray(chat.msgs) && chat.msgs.length === 0 ? null : (
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
                  {getShortUserName(chat.name)} <span className="content-chat"> - {getShortMessage(chat.lastMessage)} </span>
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
