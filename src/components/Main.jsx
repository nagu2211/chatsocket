import React, { useRef, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

const Main = ({ selectedChat }) => {
  const boxMessages = useRef(null);
  const message = useRef("");
  const [messages, setMessages] = useState([]);
  const [clientId, setClientId] = useState('');

  useEffect(() => {
    socket.on('connect', () => {
      setClientId(socket.id);
    });

    socket.on('message', (data) => {
      if (data.senderId !== clientId) {
        setMessages(prevMessages => [...prevMessages, { type: 'to', msg: data.msg }]);
      }
    });

    return () => {
      socket.off('connect');
      socket.off('message');
    };
  }, [clientId]);

  const scrollBottom = () => {
    if (boxMessages.current) {
      boxMessages.current.scrollTop = boxMessages.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollBottom();
  }, [messages]);

  const send = () => {
    if (message.current.value.trim() === '') {
      message.current.focus();
    } else {
      const msg = message.current.value.trim();
      const msgId = `${clientId}-${Date.now()}`;
      setMessages(prevMessages => [...prevMessages, { type: 'from', msg }]);
      socket.emit('message', { id: msgId, senderId: clientId, msg });
      message.current.value = '';
    }
  };

  return (
    <main className="main">
      <div className="chat-wrap">
        <div className="header">
          {selectedChat ? (
            <>
              <img className="img-perfil-user" src={selectedChat.img} alt="user image" />
              <div className="detalles">
                <span id="nombre-to-name">{selectedChat.name}</span>
                <p>{selectedChat.info}</p>
              </div>
            </>
          ) : (
            <p>Select a contact to start chatting</p>
          )}
        </div>
        <div ref={boxMessages} className="chat-box" id="chat-box">
          {messages.map((message, index) => (
            <div key={index} className={`chat ${message.type === 'from' ? 'from-message' : 'to-message'}`}>
              <div className="detalles">
                <p>{message.msg}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-area">
          <button className='btn-archive' type="button" id="btn-archive">
            <i className="bi bi-paperclip"></i>
          </button>
          <input ref={message} type="text" className="mensaje" id="message-area" placeholder="Aa" />
          <button className='btn-send' type="button" onClick={send}>
            <i className="bi bi-send"></i>
          </button>
          <button type="button" className="btn-stycker">
            <i className="bi bi-emoji-smile"></i>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Main;
