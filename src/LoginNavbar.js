import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import { useHistory } from "react-router";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(3),
  marginLeft: '5ch',
  width: '50%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '30%',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export  function LoginNavbar({currentUser,setCurrentUser}) {

    const history = useHistory();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor:"#51459E" }}>
       
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 ,display: { xs: 'none', sm: 'block' },}}
            
          >
            <MenuIcon style={{color:"white"}} />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            style={{color:"white"}}
            // 
          >
           <p>Stack<span className="OverFlow">OverFlow</span></p>
          </Typography>
          
          
          <Box sx={{ flexGrow: 1 } }/>
          <Box sx={{ flexGrow: .01 } }>
          
         
          <Button variant="outlined"  
          className="navbar-btn"
          onClick={()=>history.push("/")} >Log in</Button>
         </Box>
          <Box sx={{ flexGrow: .01 }}>
          <Button variant="outlined" 
          className="navbar-btn"
          onClick={()=>history.push("/signup")} >sign up</Button>
          
            
            
          </Box>
           <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              
               {currentUser}
              
             
             </IconButton>
             <IconButton
               size="large"
               edge="end"
               aria-label="account of current user"
               aria-controls={currentUser}
               aria-haspopup="true"
               style={{color:"white"}}
            //    onClick={handleProfileMenuOpen}
               color="inherit"
             >
               <AccountCircle />
               </IconButton>
          </Box> 
          
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu}
      {renderMenu} */}
    </Box>
  );
}
