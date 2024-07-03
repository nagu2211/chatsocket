import React from 'react';

const Profile = () => {
  return (
    <aside className="aside">
      <header className="header-chats">
        <h2 className="title-chats">Profile</h2>
      </header>
      <div className="me-profile">
        <div className="me-profile-user-img">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWl-pf1jCsz-QnUJjwNC3MVgJpDBw10cVqiX2KIEF5g&s" alt="profile image" />
        </div>
      </div>
      <div>
        <div className="name-profile">
          <h5>Your Name</h5>
        </div>
        <div className="edit-profile">
          <p>Santy</p>
          <i className="fa-solid fa-pen"></i>
        </div>
        <div className="name-profile">
          <h5>Info</h5>
        </div>
        <div className="edit-profile">
          <p>Hola soy santiago!</p>
          <i className="fa-solid fa-pen"></i>
        </div>
      </div>
    </aside>
  );
};

export default Profile;
