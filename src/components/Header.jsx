import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

import {
  AppBar,
  Toolbar,
  makeStyles,
  Container,
  Hidden,
} from '@material-ui/core';
import SideDrawer from './SideDrawer';

import './Header.css';

const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  navbar: {
    backgroundColor: `#252429`,
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position='fixed' className={classes.navbar}>
      <Toolbar>
        <Container maxWidth='md' className={classes.navbarDisplayFlex}>
          <div className='header__img'>
            <img
              src='https://assets.hackclub.com/flag-orpheus-top.svg'
              alt=''
            />
          </div>
          <Hidden smDown>
            <div className='header__list'>
              <ul>
                <a href='/' className='header__icon'>
                  <li>Home</li>
                </a>
                <a href='/Workshops' className='header__icon'>
                  <li>Workshops</li>
                </a>
                <a href='/Projects' className='header__icon'>
                  <li>Projects</li>
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
          </Hidden>
          <Hidden mdUp>
            <SideDrawer />
          </Hidden>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
