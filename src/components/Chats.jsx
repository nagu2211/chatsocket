import React from 'react';

const Chats = () => {
  return (
    <>
      <header class="header-chats">
        <h2 class="title-chats">Chats</h2>
        <span>
          <i class="fas fa-solid fa-user-plus"></i>
        </span>
      </header>
      <div class="me-barchat">
        <div class="me-profile-img">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWl-pf1jCsz-QnUJjwNC3MVgJpDBw10cVqiX2KIEF5g&s" alt="" />
        </div>
        <div class="me-info-chat">
          <span class="me-name"> Santiago Espindola </span>
          <span class="me-online"> Available </span>
        </div>
      </div>

      <div class="input-search-container">
        <svg class="icon-input-search" aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
        <input placeholder="Search" class="input-search" />
      </div>
      <div class="btn-aside-container">
        <button class="btn-aside">
          <span>All</span>
        </button>
        <button class="btn-aside">
          <span>Not read</span>
        </button>
      </div>

      <section class="container-barchat">
        <h4 class="sub-title-aside">PINNED CHATS</h4>
        <div class="barchat">
          <div class="profile-img-chat">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWl-pf1jCsz-QnUJjwNC3MVgJpDBw10cVqiX2KIEF5g&s" alt="" />
          </div>
          <div class="info-chat">
            <span class="name-chat">
              Santiago E<span class="content-chat"> - Lorem ipsum dolor sit am... </span>
            </span>
          </div>
          <div class="pin-aside">
            <i class="fa-solid fa-thumbtack"></i>
          </div>
          {/* <div class="noti-aside">3</div> */}
        </div>
        <div class="barchat">
          <div class="profile-img-chat">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWl-pf1jCsz-QnUJjwNC3MVgJpDBw10cVqiX2KIEF5g&s" alt="" />
          </div>
          <div class="info-chat">
            <span class="name-chat">
              Santiago E<span class="content-chat"> - Lorem ipsum dolor sit am... </span>
            </span>
          </div>
          <div class="pin-aside">
            <i class="fa-solid fa-thumbtack"></i>
          </div>
        </div>
        <h4 class="sub-title-aside">RECENT CHATS</h4>
        <div class="barchat">
          <div class="profile-img-chat">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWl-pf1jCsz-QnUJjwNC3MVgJpDBw10cVqiX2KIEF5g&s" alt="" />
          </div>
          <div class="info-chat">
            <span class="name-chat">
              Santiago E<span class="content-chat"> - Lorem ipsum dolor sit am... </span>
            </span>
          </div>

          <div class="noti-aside">3</div>
        </div>
        <div class="barchat">
          <div class="profile-img-chat">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWl-pf1jCsz-QnUJjwNC3MVgJpDBw10cVqiX2KIEF5g&s" alt="" />
          </div>
          <div class="info-chat">
            <span class="name-chat">
              {' '}
              Santiago E <span class="content-chat"> - Lorem ipsum dolor sit amet </span>
            </span>
          </div>
        </div>
        <div class="barchat">
          <div class="profile-img-chat">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWl-pf1jCsz-QnUJjwNC3MVgJpDBw10cVqiX2KIEF5g&s" alt="" />
          </div>
          <div class="info-chat">
            <span class="name-chat">
              {' '}
              Santiago E <span class="content-chat"> - Lorem ipsum dolor sit amet </span>
            </span>
          </div>
        </div>
        <div class="barchat">
          <div class="profile-img-chat">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWl-pf1jCsz-QnUJjwNC3MVgJpDBw10cVqiX2KIEF5g&s" alt="" />
          </div>
          <div class="info-chat">
            <span class="name-chat">
              {' '}
              Santiago E <span class="content-chat"> - Lorem ipsum dolor sit amet </span>
            </span>
          </div>
        </div>
        <h4 class="sub-title-aside">MUTED CHATS</h4>
        <div class="barchat">
          <div class="profile-img-chat">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWl-pf1jCsz-QnUJjwNC3MVgJpDBw10cVqiX2KIEF5g&s" alt="" />
          </div>
          <div class="info-chat">
            <span class="name-chat">
              {' '}
              Santiago E <span class="content-chat"> - Lorem ipsum dolor sit amet </span>
            </span>
          </div>
        </div>
        <div class="barchat">
          <div class="profile-img-chat">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWl-pf1jCsz-QnUJjwNC3MVgJpDBw10cVqiX2KIEF5g&s" alt="" />
          </div>
          <div class="info-chat">
            <span class="name-chat">
              {' '}
              Santiago E <span class="content-chat"> - Lorem ipsum dolor sit amet </span>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Chats;
