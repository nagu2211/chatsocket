import React from 'react';
import Chats from './Chats';

const Aside = ({ infoContacts, onSelectChat, user,windowWidth }) => {
  return (
    <aside className="aside">
      <Chats chats={infoContacts} onSelectChat={onSelectChat} userInfo={user} windowWidth={windowWidth}/>
    </aside>
  );
};

export default Aside;
