import React, { useState } from 'react';

const Contacts = ({ chats, onSelectChat }) => {
  const [contactList, setContactList] = useState(chats);

  const [sortOrder, setSortOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');

  const toggleSortOrder = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
    sortChats(newSortOrder);
  };

  const sortChats = (order) => {
    const sortedChats = [...contactList].sort((a, b) => {
      if (order === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setContactList(sortedChats);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredChats = contactList.filter((chat) =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <aside className="aside">
      <header className="header-chats">
        <h2 className="title-chats">Contacts</h2>
        <span onClick={toggleSortOrder} style={{ cursor: 'pointer' }}>
          <i className={`fa-solid fa-arrow-${sortOrder === 'asc' ? 'down' : 'up'}-a-z`}></i>
        </span>
      </header>

      <div className="input-search-container">
        <svg className="icon-input-search" aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
        <input
          placeholder="Search"
          className="input-search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <section className="container-barchat-contacts">
        {filteredChats.map((chat) => (
         <div
         className="barchat"
         key={chat.id}
         onClick={() => onSelectChat(chat)}
       >
            <div className="profile-img-chat margin-top">
              <img src={chat.img} alt="" />
            </div>
            <div className="info-chat">
              <span className="info-contact">
                {chat.name} <span className="content-chat">{chat.info}</span>
              </span>
            </div>
          </div>
        ))}
      </section>
    </aside>
  );
};

export default Contacts;
