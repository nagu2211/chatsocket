import React from 'react';
import Chats from './Chats';

const Aside = ({ infoContacts, onSelectChat }) => {
  return (
    <aside className="aside">
      <Chats chats={infoContacts} onSelectChat={onSelectChat} />
    </aside>
  );
};

export default Aside;
