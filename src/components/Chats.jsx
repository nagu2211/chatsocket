import React from 'react';

const Chats = () => {
  return (
    <>
      <header className="header-chats">
        <h2 className="title-chats">Chats</h2>
        <span>
          <i className="fas fa-solid fa-user-plus"></i>
        </span>
      </header>
      <div className="me-barchat">
        <div className="me-profile-img">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWl-pf1jCsz-QnUJjwNC3MVgJpDBw10cVqiX2KIEF5g&s" alt="" />
        </div>
        <div className="me-info-chat">
          <span className="me-name"> Santiago Espindola </span>
          <span className="me-online"> Available </span>
        </div>
      </div>

      <div className="input-search-container">
        <svg className="icon-input-search" aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
        <input placeholder="Search" className="input-search" />
      </div>
      <div className="btn-aside-container">
        <button className="btn-aside">
          <span>All</span>
        </button>
        <button className="btn-aside">
          <span>Not read</span>
        </button>
      </div>

      <section className="container-barchat">
        <h4 className="sub-title-aside">PINNED CHATS</h4>
        <div className="barchat">
          <div className="profile-img-chat">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWl-pf1jCsz-QnUJjwNC3MVgJpDBw10cVqiX2KIEF5g&s" alt="" />
          </div>
          <div className="info-chat">
            <span className="name-chat">
              Santiago E<span className="content-chat"> - Lorem ipsum dolor sit am... </span>
            </span>
          </div>
          <div className="pin-aside">
            <i className="fa-solid fa-thumbtack"></i>
          </div>
          {/* <div className="noti-aside">3</div> */}
        </div>
        <div className="barchat">
          <div className="profile-img-chat">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWl-pf1jCsz-QnUJjwNC3MVgJpDBw10cVqiX2KIEF5g&s" alt="" />
          </div>
          <div className="info-chat">
            <span className="name-chat">
              Santiago E<span className="content-chat"> - Lorem ipsum dolor sit am... </span>
            </span>
          </div>
          <div className="pin-aside">
            <i className="fa-solid fa-thumbtack"></i>
          </div>
        </div>
        <h4 className="sub-title-aside">RECENT CHATS</h4>
        <div className="barchat">
          <div className="profile-img-chat">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWl-pf1jCsz-QnUJjwNC3MVgJpDBw10cVqiX2KIEF5g&s" alt="" />
          </div>
          <div className="info-chat">
            <span className="name-chat">
              Santiago E<span className="content-chat"> - Lorem ipsum dolor sit am... </span>
            </span>
          </div>

          <div className="noti-aside">3</div>
        </div>
        <div className="barchat">
          <div className="profile-img-chat">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWl-pf1jCsz-QnUJjwNC3MVgJpDBw10cVqiX2KIEF5g&s" alt="" />
          </div>
          <div className="info-chat">
            <span className="name-chat">
              {' '}
              Santiago E <span className="content-chat"> - Lorem ipsum dolor sit amet </span>
            </span>
          </div>
        </div>
        <div className="barchat">
          <div className="profile-img-chat">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWl-pf1jCsz-QnUJjwNC3MVgJpDBw10cVqiX2KIEF5g&s" alt="" />
          </div>
          <div className="info-chat">
            <span className="name-chat">
              {' '}
              Santiago E <span className="content-chat"> - Lorem ipsum dolor sit amet </span>
            </span>
          </div>
        </div>
        <div className="barchat">
          <div className="profile-img-chat">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWl-pf1jCsz-QnUJjwNC3MVgJpDBw10cVqiX2KIEF5g&s" alt="" />
          </div>
          <div className="info-chat">
            <span className="name-chat">
              {' '}
              Santiago E <span className="content-chat"> - Lorem ipsum dolor sit amet </span>
            </span>
          </div>
        </div>
        <h4 className="sub-title-aside">MUTED CHATS</h4>
        <div className="barchat">
          <div className="profile-img-chat">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWl-pf1jCsz-QnUJjwNC3MVgJpDBw10cVqiX2KIEF5g&s" alt="" />
          </div>
          <div className="info-chat">
            <span className="name-chat">
              {' '}
              Santiago E <span className="content-chat"> - Lorem ipsum dolor sit amet </span>
            </span>
          </div>
        </div>
        <div className="barchat">
          <div className="profile-img-chat">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROWl-pf1jCsz-QnUJjwNC3MVgJpDBw10cVqiX2KIEF5g&s" alt="" />
          </div>
          <div className="info-chat">
            <span className="name-chat">
              {' '}
              Santiago E <span className="content-chat"> - Lorem ipsum dolor sit amet </span>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Chats;
