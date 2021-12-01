
import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useHistory } from "react-router";

import {LoginNavbar} from "./LoginNavbar"
import { useState } from "react";


export const Login=({setCurrentUser,currentUser})=>{
    

    const paperStyle={padding :50,height:'50vh',width:380, margin:"100px auto"}
    const avatarStyle={backgroundColor:"#51459E"}
    const btnstyle={margin:'20px 0',backgroundColor:"green"}
    const textstyle={margin:'20px 0'}

    const [popper,setpopper] = useState(false);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    
    
    const history = useHistory();
    const resetLoginForm = (event) => {
            setName("");
            setPassword("");
          
            
        };
    const loginprocess = () => {  
        const loginuser={username:name,password:password }; 
        
        
        fetch("http://localhost:8900/user/login",
    {
        method:"POST",
        body: JSON.stringify(loginuser),
        headers:{"Content-Type":"application/json"},
    }).then((res)=>{
        setCurrentUser(name)
        if(res.status==401)
          {
            window.alert("Invalid user account");
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
            <div>
        
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Log In</h2>
                </Grid>
                <TextField label='Username' 
                placeholder='Enter username'  
                style={textstyle}
                fullWidth required
                value={name}
                onChange={event => setName(event.target.value)}
                />
                <TextField 
                label='Password' 
                placeholder='Enter password'  
                style={textstyle} 
                type='password' 
                fullWidth required
                value={password}
                onChange={event => setPassword(event.target.value)}
                />
                
                <Button type='submit' 
                className="btn-color"
                color='primary' 
                variant="contained" 
                style={btnstyle} 
                fullWidth
                onClick={() => {loginprocess()
                }}
                >Sign in</Button>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                
                <Typography > Don't you have an account ?
                <Button variant="text" 
                
                style={{color:"#51459E"}}
                onClick={()=>history.push("/signup")} 
                > sign up
                </Button>
                </Typography>
            </Paper>
            </div>

            </div>    
       
    )
}

