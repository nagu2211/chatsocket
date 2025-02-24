import React, { useRef, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import UploadFile from './UploadFile';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const socket = io('http://localhost:3000');

const Main = ({ selectedChat, messages, onSendMessage, windowWidth }) => {
  const { id } = useParams();
  const boxMessages = useRef(null);
  const messageInput = useRef('');

  const [clientId, setClientId] = useState('');

  useEffect(() => {
    const handleConnect = () => {
      setClientId(socket.id);
    };
    const handleMessage = (data) => {
      if (data.senderId !== clientId && selectedChat && selectedChat.id === data.contactId) {
        onSendMessage(data.msg, data.contactId);
      }
    };
    socket.on('connect', handleConnect);
    socket.on('message', handleMessage);
    return () => {
      socket.off('connect', handleConnect);
      socket.off('message', handleMessage);
    };
  }, [clientId, selectedChat, onSendMessage]);

  const scrollBottom = () => {
    if (boxMessages.current) {
      boxMessages.current.scrollTop = boxMessages.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollBottom();
  }, [messages]);

  const send = () => {
    if (messageInput.current.value.trim() === '') {
      messageInput.current.focus();
    } else {
      const msg = messageInput.current.value.trim();
      const msgId = `${clientId}-${Date.now()}`;
      onSendMessage(msg, selectedChat.id);
      socket.emit('message', { id: msgId, senderId: clientId, contactId: selectedChat.id, msg });
      messageInput.current.value = '';
    }
  };

  const handleSendMessage = (chatId, type = 'from') => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    const messageText = messageInput.current.value.trim();
    const updatedContacts = storedContacts.map((contact) => {
      if (contact.id === chatId) {
        const newMessage = { type, msg: messageText };
        const updatedMsgs = [...(contact.msgs || []), newMessage];
        return {
          ...contact,
          newMsg: 0,
          msgs: updatedMsgs,
          lastMessage: messageText,
        };
      }
      return contact;
    });

    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  const handleKeyPress = (event, selectedChatId) => {
    if (event.key === 'Enter') {
      handleSendMessage(selectedChatId);
      event.preventDefault();
      send(event);
    }
  };

  const handleFileSend = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'gqbxwa5u');
    formData.append('api_key', '679415584296546');

    const res = await fetch('https://api.cloudinary.com/v1_1/dimstmrjw/image/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    const msg = `<img src="${data.secure_url}" alt="submitted image" className="chat-image" />`;

    const msgId = `${clientId}-${Date.now()}`;
    onSendMessage(msg, selectedChat.id);
    socket.emit('message', { id: msgId, senderId: clientId, contactId: selectedChat.id, msg });
  };

  const handleImageClick = (url) => {
    Swal.fire({
      imageUrl: url,
      imageHeight: 600,
      imageAlt: 'Submitted image',
    });
  };

  useEffect(() => {
    const chatBox = document.getElementById('chat-box');
    if (chatBox) {
      chatBox.addEventListener('click', (event) => {
        const target = event.target;
        if (target.tagName === 'IMG' && target.classList.contains('chat-image')) {
          handleImageClick(target.src);
        }
      });
    }

    return () => {
      if (chatBox) {
        chatBox.removeEventListener('click', (event) => {
          const target = event.target;
          if (target.tagName === 'IMG' && target.classList.contains('chat-image')) {
            handleImageClick(target.src);
          }
        });
      }
    };
  }, [messages]);

  return (
    <main className={`main ${windowWidth < 1080 ? 'show-chat' : ''} `}>
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
                <p dangerouslySetInnerHTML={{ __html: message.msg }} />
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={send}>
          <div className="text-area">
            <UploadFile onFileSend={handleFileSend} />
            <input ref={messageInput} type="text" className="mensaje" id="message-area" placeholder="Aa" onKeyDown={(event) => handleKeyPress(event, selectedChat?.id)} required />
            <button className="btn-send" type="submit">
              <i className="bi bi-send"></i>
            </button>
            <button type="button" className="btn-stycker">
              <i className="bi bi-emoji-smile"></i>
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Main;
