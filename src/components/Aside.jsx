import React from 'react';
import Chats from './Chats';
import Profile from './Profile';

const Aside = () => {
  return (
    <aside className="aside">
      <Chats />
      {/* <Profile/> */}
    </aside>
  );
};

export default Aside;
