import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Sidebar = () => {
  function logout() {
    Swal.fire({
      title: 'Do you want to log out?',
      text: 'You will be disconnected from the session.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'log out',
    }).then((result) => {
      if (result.isConfirmed) {
        let timerInterval;
        Swal.fire({
          title: 'Your session has been closed',
          html: 'I will close in <b></b> milliseconds.',
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector('b');
            timerInterval = setInterval(() => {
              timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer');
          }
        });
      }
    });
  }
  return (
    <section className="sidebar">
      <nav>
        <ul>
          <Link to="/">
            <li>
              <i className="iconHover fas fa-solid fa-comments"></i>
            </li>
          </Link>
          <Link to="/contacts">
            <li>
              <i className="iconHover fas fa-solid fa-users"></i>
            </li>
          </Link>
          
        </ul>
        <button onClick={() => logout()}>
            <li className="logout">
              <i className="iconHover fas fa-sign-out-alt"></i>
            </li>
          </button>
      </nav>
     
    </section>
  );
};

export default Sidebar;
