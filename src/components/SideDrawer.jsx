import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { IconButton, Drawer } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  sidebarLinks: {
    display: `flex`,
    flexDirection: `column`,
    margin: `20px`,
    fontSize: `18px`,
  },
  sidebarLinksTag: {
    color: `white`,
    textDecoration: `none`,
    lineHeight: 1.8,
    margin: `20px`,
  },
  sidebarLinksTagRed: {
    color: `white`,
    textDecoration: `none`,
    lineHeight: 1.8,
    margin: `20px`,
    backgroundColor: `#e42d42`,
    fontWeight: `bold`,
    borderRadius: `999px`,
  },
});

const SideDrawer = () => {
  const classes = useStyles();
  const [state, setState] = useState({ right: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ [anchor]: open });
  };

  const sideDrawerList = (anchor) => (
    <div
      className={classes.list}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className={classes.sidebarLinks}>
        <a href='/' className={classes.sidebarLinksTag}>
          <li>Home</li>
        </a>
        <a href='/Workshops' className={classes.sidebarLinksTag}>
          <li>Workshops</li>
        </a>
        <a href='/Projects' className={classes.sidebarLinksTag}>
          <li>Projects</li>
        </a>
        <a href='/#Team' className={classes.sidebarLinksTag}>
          <li>Team</li>
        </a>
        <a href='/#Rules' className={classes.sidebarLinksTag}>
          <li>Rules</li>
        </a>
        <a href='/#Faqs' className={classes.sidebarLinksTag}>
          <li>Faqs</li>
        </a>
        <a href='/' className={classes.sidebarLinksTagRed}>
          <li>
            <FontAwesomeIcon icon={faUsers} />
            Join Us
          </li>
        </a>
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <IconButton
        edge='start'
        aria-label='menu'
        onClick={toggleDrawer('right', true)}
      >
        <Menu fontSize='large' style={{ color: `rgba(255, 255, 255, 0.5)` }} />
      </IconButton>

      <Drawer
        anchor='right'
        open={state.right}
        onOpen={toggleDrawer('right', true)}
        onClose={toggleDrawer('right', false)}
      >
        {sideDrawerList('right')}
      </Drawer>
    </React.Fragment>
  );
};

export default SideDrawer;
