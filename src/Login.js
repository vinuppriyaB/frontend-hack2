
import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useHistory } from "react-router";
import axios from "axios";
import {LoginNavbar} from "./LoginNavbar"
import { useState } from "react";


export const Login=({setCurrentUser,currentUser})=>{
    
    setCurrentUser(localStorage.getItem("name")); 
    const paperStyle={padding :50,height:'50vh',width:450, margin:"100px auto"}
    const avatarStyle={backgroundColor:"#51459E"}
    const btnstyle={margin:'20px 0',backgroundColor:"green"}
    const textstyle={margin:'20px 0'}

    const [popper,setpopper] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    
    const history = useHistory();
    const resetLoginForm = (event) => {
        setEmail("");
            setPassword("");
          
            
        };
    const loginprocess = async() => {  
        const loginuser={email:email,password:password }; 
        
        
        try{
            var response=await axios.post("https://hackathon2-node.herokuapp.com/user/login",{
                email:email,
                password:password
        })
       
        // console.log(response.data);
 
        if(response.data)
        {
            console.log(response)
            console.log(response.data)
            await localStorage.setItem("token",response.data.token);
            await localStorage.setItem("name",response.data.username);
            
            
            setCurrentUser(localStorage.getItem("name"));
            console.log(response.data.username)
            console.log(currentUser);
            console.log(localStorage.getItem("name"));
            history.push("/question");
            // console.log(userName)
           
            
        }
        }catch(e){
            console.warn(e)
        }
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

