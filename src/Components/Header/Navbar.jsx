// Navbar.js
import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, TextField, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // For theme toggle
import logo from '../../assets/logo.png';

const Navbar = ({ onToggleSidebar, onThemeToggle }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openNavbar,setOpennavbar] = useState(false)

  const handleToggleNavbar = () => setOpennavbar(!openNavbar)

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="secondary" className='bg-white bg-opacity-25 border-none shadow-none text-base text-black  '>
      <Toolbar className="flex justify-between items-center ">
        <div className="flex items-center gap-2">
         <img src={logo} alt="Logo" className='w-16 sm:w-[120px] h-10' />

       <div className="">
        <IconButton onClick={onToggleSidebar}>
            <MenuIcon />
          </IconButton>
        </div>
            {/* Search Bar */}
     <div className="relative mx-3 max-sm:hidden sm:visible">
          <TextField
            id="outlined-basic"
            label="Search.."
            variant="outlined"
            InputProps={{
              startAdornment: (
                <IconButton>
                  <SearchIcon />
                </IconButton>
              ),
            }}
            className="w-64" // Adjust the width here
            size="small" // Use 'small' or 'medium' for size preference
            sx={{
              bgcolor: 'white', // Background color
              borderRadius: 2, // Rounded corners
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#ccc', // Border color
                },
                '&:hover fieldset': {
                  borderColor: '#888', // Border color on hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#3f51b5', // Border color when focused
                },
              },
            }}
          />
        </div>
        </div>

    

        <div className="flex items-center ">
       

          <IconButton onClick={onThemeToggle}>
            <Brightness4Icon />
          </IconButton>

          <IconButton onClick={handleProfileMenuOpen} color="inherit">
            <AccountCircle />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleProfileMenuClose}
          >
            <MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleProfileMenuClose}>My account</MenuItem>
            <MenuItem onClick={handleProfileMenuClose}>Logout</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
