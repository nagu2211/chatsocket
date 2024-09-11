import React from 'react';
import Chats from './Chats';

const Aside = ({ infoChats, onSelectChat, user,windowWidth }) => {
  return (
    <aside className="aside">
      <Chats chats={infoChats} onSelectChat={onSelectChat} userInfo={user} windowWidth={windowWidth} />
    </aside>
  );
};

export default Aside;
