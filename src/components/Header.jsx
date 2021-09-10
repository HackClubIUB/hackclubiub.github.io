import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='header__img'>
        <img src='https://assets.hackclub.com/flag-orpheus-top.svg' alt='' />
      </div>
      <div className='header__list'>
        <ul>
          <a href='/' className='header__icon'>
            <li>Home</li>
          </a>
          <a href='/Workshops' className='header__icon'>
            <li>Workshops</li>
          </a>
          <a href='/#Team' className='header__icon'>
            <li>Team</li>
          </a>
          <a href='/#Rules' className='header__icon'>
            <li>Rules</li>
          </a>
          <a href='/#Faqs' className='header__icon'>
            <li>Faqs</li>
          </a>
          <a href='/' className='redbutton'>
            <li>
              <FontAwesomeIcon icon={faUsers} />
              Join Us
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Header;
