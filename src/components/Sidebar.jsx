import React from 'react';

const Sidebar = () => {
  return (
    <section className="sidebar">
      <nav>
        <ul>
          <li>
            <i className="fas fa-solid fa-comments"></i>
            <span className="tooltipdwn">Chats</span>
          </li>
          <li>
            <i className="fas fa-solid fa-users"></i>
            <span className="tooltip">Groups</span>
          </li>
          <li>
            <i className="fas fa-solid fa-gear"></i>
            <span className="tooltip">Config</span>
          </li>
          <li className="logout">
            <i className="fas fa-sign-out-alt"></i>
            <span className="tooltip">Logout</span>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Sidebar;
