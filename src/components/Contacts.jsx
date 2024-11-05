import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';

const Contacts = ({ chats, onSelectChat }) => {
  const [contactList, setContactList] = useState(chats);
  const [modalIsOpen, setIsOpen] = useState(false);
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

  const filteredChats = contactList.filter((chat) => chat.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const addAdress = watch('addAdress');
  Modal.setAppElement('#root');
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <aside className="aside">
      <header className="header-chats">
        <h2 className="title-chats">Contacts</h2>
        <div style={{ cursor: 'pointer' }}>
          <span onClick={openModal}>
            <i className="fas fa-solid fa-user-plus"></i>
          </span>
          <span onClick={toggleSortOrder}>
            <i className={`fa-solid fa-arrow-${sortOrder === 'asc' ? 'down' : 'up'}-a-z`}></i>
          </span>
        </div>
      </header>

      <div className="input-search-container">
        <svg className="icon-input-search" aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
        <input placeholder="Search" className="input-search" value={searchTerm} onChange={handleSearchChange} />
      </div>

      <section className="container-barchat-contacts">
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
          <section className="container">
            <header>Add Contact</header>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <div className="input-box">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  {...register('name', {
                    required: true,
                  })}
                />
                {errors.name?.type === 'required' && <p>⚠️name is required</p>}
              </div>

              <div className="input-box">
                <label>Email Address</label>
                <input
                  type="text"
                  placeholder="Enter email address"
                  {...register('email', {
                    pattern: /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />
                {errors.email?.type === 'pattern' && <p>⚠️Invalid email format.</p>}
              </div>

              <div className="column">
                <div className="input-box">
                  <label>Phone Number</label>
                  <input
                    type="number"
                    placeholder="Enter phone number"
                    {...register('phoneNumber', {
                      required: true,
                    })}
                  />
                  {errors.phoneNumber?.type === 'required' && <p>⚠️Phone number is required</p>}
                </div>
                <div className="input-box">
                  <label>Birth Date</label>
                  <input type="date" placeholder="Enter birth date" {...register('birthDate')} />
                </div>
              </div>
              <div className="gender-box">
                <h3>Gender</h3>

                <div className="gender-option">
                  <select {...register('gender')}>
                    <option value="male">Male</option>
                    <option value="fem">Female</option>
                    <option value="unk">Prefer not to say</option>
                  </select>
                </div>
              </div>
              <div className="labelAddAdress">
                <label>Add address?</label>
                <input type="checkbox" {...register('addAdress')} />
              </div>
              <div className="input-box address">
                {addAdress && (
                  <div>
                    <div className="column">
                      <input type="text" placeholder="Enter street address" {...register('streetAdress')} />

                      <input type="number" placeholder="Enter number street adress" {...register('streetNumberAdress')} />
                    </div>
                    <input type="text" placeholder="City" {...register('city')} />
                    <input type="number" placeholder="Postal code" {...register('postalCode')} />
                    <input type="text" placeholder="State/Province" {...register('state')} />
                  </div>
                )}
              </div>
              <div className="column">
              <input type="submit" value="Add Contact" className='buttons-submit green'/>
              <button onClick={closeModal} className='buttons-submit grey'>Close</button>
              </div>
            </form>
          </section>
        </Modal>
        {filteredChats.map((chat) => (
          <div className="barchat" key={chat.id} onClick={() => onSelectChat(chat)}>
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
