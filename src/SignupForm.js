
import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useHistory } from "react-router";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {LoginNavbar} from "./LoginNavbar"


import { useState } from "react";


export function SignupForm({setCurrentUser,currentUser}){
    

    const paperStyle={padding :50,height:'50vh',width:380, margin:"100px auto"}
    const avatarStyle={backgroundColor:"#51459E"}
    const btnstyle={margin:'20px 0',backgroundColor:"#51459E"}
    const textstyle={margin:'10px 0'}

    const [popper,setpopper] = useState(false);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [show,setShow]=useState(false);
    
    const history = useHistory();
    const resetLoginForm = (event) => {
            setName("");
            setPassword("");
            setEmail("");
            
        };
    const createAccount = () => {  
        const loginuser={username:name,password:password }; 
       
        
        fetch("https://hackathon2-node.herokuapp.com/user/signup",
    {
        method:"POST",
        body: JSON.stringify(loginuser),
        headers:{"Content-Type":"application/json"},
    }).then((res)=>{
        setCurrentUser(name)
        if(res.status==400)
          {
            window.alert("invalid credential \n Try with other name");
          }
          else
          {
            setpopper(true);
            setTimeout(()=>{
              setpopper(false);

            },2000)
            history.push("/answerpage");

          }
        
        resetLoginForm();
    }).catch((e)=> console.log("ERROR"))  
}

    return(
        <div>
            {/* <LoginNavbar/> */}
        
        
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><AccountCircleIcon/></Avatar>
                    <h2>SIGN UP</h2>
                </Grid>
                <TextField label='Username' 
                placeholder='Enter username'  
                style={textstyle}
                fullWidth required
                value={name}
                
                onChange={event => setName(event.target.value)}
                />
                <TextField label='Email' 
                placeholder='Enter Email'  
                style={textstyle}
                fullWidth required
                value={email}
                onChange={event => setEmail(event.target.value)}
                />
                
                <TextField 
                label='Password' 
                placeholder='Enter password'  
                style={textstyle} 
                type='password' 
                fullWidth required
                value={password}
                onMouseOver={()=>setShow(true)}
                onMouseOut={()=>setShow(false)}
                onChange={event => setPassword(event.target.value)}
                />
                
                
                <Button type='submit' 
                className="btn-color"
                color='primary' 
                variant="contained" 
                style={btnstyle} 
                fullWidth
                onClick={() => {createAccount()
                }}
                >Register</Button>
                
               {show? <p className="pasword-hint">
                    Password must contain: 1 capital,1 small,1 number,1 special character,max 8 char
                </p>:""}
                
                
            </Paper>
            </div>
       
    )
}

