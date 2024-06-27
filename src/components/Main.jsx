import React from 'react';

const Main = () => {
  return (
    <main class="main">
      <div class="chat-wrap">
        <div class="header">
          <img class="img-perfil-user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWl-pf1jCsz-QnUJjwNC3MVgJpDBw10cVqiX2KIEF5g&s" alt="user image" />
          <div class="detalles">
            <span id="nombre-to-name">Santiago Espindola</span>
          </div>
        </div>
        <div class="chat-box" id="chat-box"></div>
        <div class="text-area">
          <button type="button" id="btn-archive">
            <i class="bi bi-paperclip"></i>
          </button>
          <input type="text" class="mensaje" id="message-area" placeholder="Aa" />
          <button type="button" class="btn-stycker">
            <i class="bi bi-emoji-smile"></i>
          </button>
          <button type="button" id="send-message">
            <i class="bi bi-send"></i>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Main;
