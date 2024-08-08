import React from 'react';
import Swal from 'sweetalert2';

const Profile = ({ userInfo, setUserInfo }) => {
  const uploadImg = async () => {
    const { value: url } = await Swal.fire({
      input: "url",
      inputLabel: "URL address",
      inputPlaceholder: "Enter the URL",
    });
    if (url) {
      setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,
        imgUser: url,
      }));
      Swal.fire('Image updated successfully!');
    }
  };

  const handleEdit = (field) => {
    const newValue = prompt(`Edit your ${field}:`, userInfo[field]);
    if (newValue) {
      setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,
        [field]: newValue,
      }));
    }
  };

  return (
    <aside className="aside">
      <header className="header-chats">
        <h2 className="title-chats">Profile</h2>
      </header>
      <div className="me-profile">
        <div className="me-profile-user-img">
          <img src={userInfo.imgUser} alt="profile image" onClick={uploadImg} />
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
