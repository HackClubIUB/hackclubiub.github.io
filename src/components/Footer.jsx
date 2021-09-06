import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
  return (
    <div>
      <table>
        <tr>
          <th>Hack Club IUB</th>
          <th>Hack Club</th>
          <th>Connect with us!</th>
          <th>Talk to us!</th>
        </tr>
        <tr>
          <td>
            <a href='/'>Workshops</a>
          </td>
          <td>
            <a href='https://hackclub.com/' target='_blank' rel='noreferrer'>
              Website
            </a>
          </td>
          <td>
            <a
              href='https://www.instagram.com/hackclubiub/'
              target='_blank'
              rel='noreferrer'
            >
              <InstagramIcon /> Instagram
            </a>
          </td>
          <td>
            <a href='mailto:hackclubiub@gmail.com'>hackclubiub@gmail.com</a>
          </td>
        </tr>
        <tr>
          <td>
            <a href='/'>Projects</a>
          </td>
          <td>
            <a
              href='https://hackclub.com/press/'
              target='_blank'
              rel='noreferrer'
            >
              Press
            </a>
          </td>
          <a
            href='https://github.com/HackClubIUB'
            target='_blank'
            rel='noreferrer'
          >
            <GitHubIcon /> GitHub
          </a>
        </tr>
      </table>
    </div>
  );
};

export default Footer;
