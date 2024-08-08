import React from 'react';
import Chats from './Chats';

const Aside = ({ infoContacts, onSelectChat, user }) => {
  return (
    <aside className="aside">
      <Chats chats={infoContacts} onSelectChat={onSelectChat} userInfo={user}/>
    </aside>
  );
};

export default Aside;
