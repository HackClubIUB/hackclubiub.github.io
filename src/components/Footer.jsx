import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <table className='table'>
        <tr className='table__header'>
          <th className='head'>Hack Club IUB</th>
          <th className='head'>Hack Club</th>
          <th className='head'>Connect with us!</th>
          <th className='head'>Talk to us!</th>
        </tr>
        <tr>
          <td className='table__data'>
            <a href='/Workshops'>Workshops</a>
          </td>
          <td className='table__data'>
            <a href='https://hackclub.com/' target='_blank' rel='noreferrer'>
              Website
            </a>
          </td>
          <td className='table__data'>
            <a
              href='https://www.instagram.com/hackclubiub/'
              target='_blank'
              rel='noreferrer'
            >
              <InstagramIcon /> Instagram
            </a>
          </td>
          <td className='table__data'>
            <a href='mailto:hackclubiub@gmail.com'>hackclubiub@gmail.com</a>
          </td>
        </tr>
        <tr>
          <td className='table__data'>
            <a href='/'>Projects</a>
          </td>
          <td className='table__data'>
            <a
              href='https://hackclub.com/press/'
              target='_blank'
              rel='noreferrer'
            >
              Press
            </a>
          </td>
          <td className='table__data'>
            <a
              href='https://github.com/HackClubIUB'
              target='_blank'
              rel='noreferrer'
            >
              <GitHubIcon /> GitHub
            </a>
          </td>
        </tr>
      </table>
      <p>&copy; Hack Club IUB {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
