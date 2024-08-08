import React from 'react';

const Profile = ({ userInfo, setUserInfo }) => {
  const handleEdit = (field) => {
    const newValue = prompt(`Edit your ${field}:`, userInfo[field]);
    if (newValue) {
      setUserInfo({
        ...userInfo,
        [field]: newValue,
      });
    }
  };

  return (
    <aside className="aside">
      <header className="header-chats">
        <h2 className="title-chats">Profile</h2>
      </header>
      <div className="me-profile">
        <div className="me-profile-user-img">
          <img src={userInfo.imgUser} alt="profile image" />
        </div>
      </div>
      <div>
        <div className="name-profile">
          <h5>Your Name</h5>
        </div>
        <div className="edit-profile">
          <p>{userInfo.name}</p>
          <i className="fa-solid fa-pen" onClick={() => handleEdit('name')}></i>
        </div>
        <div className="name-profile">
          <h5>Info</h5>
        </div>
        <div className="edit-profile">
          <p>{userInfo.info}</p>
          <i className="fa-solid fa-pen" onClick={() => handleEdit('info')}></i>
        </div>
      </div>
    </aside>
  );
};

export default Profile;
