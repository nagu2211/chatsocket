import React from 'react'

const Sidebar = () => {
  return (
    <section class="sidebar">
        <nav>
          <ul>
            <li>
              <i class="fas fa-solid fa-comments"></i>
              <span class="tooltipdwn">Chats</span>
            </li>
            <li>
              <i class="fas fa-solid fa-users"></i>
              <span class="tooltip">Groups</span>
            </li>
            <li>
              <i class="fas fa-solid fa-gear"></i>
              <span class="tooltip">Config</span>
            </li>
            <li class="logout">
              <i class="fas fa-sign-out-alt"></i>
              <span class="tooltip">Logout</span>
            </li>
          </ul>
        </nav>
      </section>
  )
}

export default Sidebar