import React from 'react'

const Profile = () => {
  return (
    <>
        <header class="header-chats">
          <h2 class="title-chats">Profile</h2>
        </header>
        <div class="me-profile">
          <div class="me-profile-user-img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWl-pf1jCsz-QnUJjwNC3MVgJpDBw10cVqiX2KIEF5g&s" alt="profile image" />
          </div>
        </div>
        <div >
          <div class="name-profile"> 
            <h5>Your Name</h5>
          </div>
          <div class="edit-profile">
            <p>
              Santy
            </p>
            <i class="fa-solid fa-pen"></i>
          </div>
          <div class="name-profile"> 
            <h5>Info</h5>
          </div>
          <div class="edit-profile">
            <p>
              Hola soy santiago!
            </p>
            <i class="fa-solid fa-pen"></i>
          </div>
        </div>
      </>
  )
}

export default Profile