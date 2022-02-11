import React,{useState,useEffect} from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { useHistory } from "react-router";
import Avatar from '@mui/material/Avatar';
import "./NavBar.css";

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
    width: '60%',
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
      width: '55ch',
    },
    
  },
}));

export  function NavBar({currentUser,setCurrentUser,question,setQuestion}) {
  // #F2F7FF
    const history = useHistory();
    const handleKeyPress = (event) => {
   
      if(event.key === 'Enter'){
        // localStorage.setItem("question",question);
        history.push("/answer")
      }
    }

    const updatecurrentUser=()=>{
      const name=localStorage.getItem("name");
    
    setCurrentUser(name);
    
  
  }
  updatecurrentUser();   
  

    const logoutfunction=()=>{
      localStorage.removeItem("name");
      localStorage.removeItem("token");
      
      
      setCurrentUser("");
      setQuestion("");
    
    history.push("/")
    }
  return (
      <div >
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar sx={{ backgroundColor:"#51459E" }}>

         
          <h6 className="logoName">Stack<span className="OverFlow">OverFlow</span></h6>
            
          
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              value={question}
              style={{color:"white"}}
              onKeyPress={(event)=>{
                handleKeyPress(event)} } 
                onChange ={event => {
                  setQuestion(event.target.value)
                                        }}
            //   inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 } }/>
          <Box sx={{ flexGrow: .01 } }>
          
         
          <Button variant="outlined"  
          className="navbar-btn"
          onClick={()=>{
            logoutfunction()
            history.push("/")} }>sign out</Button>
         </Box>
          {/* <Box sx={{ flexGrow: .01 } }>
          <Button variant="outlined" onClick={()=>history.push("/signup")}  color="inherit">sign up</Button>
          
            
            
          </Box> */}
           <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
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
             <Avatar className="avatar" alt={currentUser} src={currentUser}/>


               </IconButton>




             
          </Box> 
          
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu}
      {renderMenu} */}
    </Box>
    </div>
  );
}
