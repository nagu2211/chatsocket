import React from 'react';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <section className="sidebar">
      <nav>
        <ul>
        <Link to='/'>
          <li>
            <i className="fas fa-solid fa-comments"></i>
          </li>
        </Link>
          <li>
            <i className="fas fa-solid fa-users"></i>
          </li>
          <li>
            <i className="fas fa-solid fa-gear"></i>
          </li>
          <li className="logout">
            <i className="fas fa-sign-out-alt"></i>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Sidebar;
