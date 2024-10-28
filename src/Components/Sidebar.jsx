import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const Sidebar = ({ open }) => {
  const items = [
    { text: 'Dashboard', icon: <InboxIcon />, path: '/dashboard'  },
    { text: 'Product', icon: <MailIcon />, path: '/product' },
    { text: 'User', icon: <MailIcon />, path: '/user/:id' },
    // { text: '', icon: <MailIcon />, path: '/' },
  ];

  return (
    <aside
      className={`bg-white bg-opacity-25 text-stone-800 h-screen ${
        open ? ' md:w-52 sm:44 transition-all duration-300 ' : ' max-sm:-translate-x-64 w-16 transition-all duration-100 '
      }`}
    >
      <List>
        {items.map((item, index) => (
          <Tooltip title={open ? '' : item.text} key={index} arrow placement='right'>
            <ListItem button component={Link} to={item.path}>
              <ListItemIcon className={` ${open ? 'translate-x-4' : 'translate-x-0'}`}>
                {item.icon}
              </ListItemIcon>
              {open && <ListItemText primary={item.text}  />}
            </ListItem>
          </Tooltip>
        ))}
      </List>
    </aside>
  );
};

export default Sidebar;
