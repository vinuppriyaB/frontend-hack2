import axios from "axios";
import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useHistory } from "react-router";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {LoginNavbar} from "./LoginNavbar"
import { useState } from "react";


export function SignupForm({setCurrentUser,currentUser}){
    

    const paperStyle={padding :50,height:'50vh',width:450, margin:"100px auto"}
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
    const createAccount = async() => {  
        const loginuser={username:name,password:password ,email:email}; 
        try{
            var response=await axios.post("https://hackathon2-node.herokuapp.com/user/signup",{
                username:name,
                password:password,
                email:email
        })
       
        // console.log(response.data);
            
        if(response.data)
        {
            
            localStorage.setItem("name",name);
            setCurrentUser(name);
            history.push("/question");
            resetLoginForm();
            // console.log(userName)
           
            
        }else{
            window.alert("invalid credential \n Try with other name");
        }
        }catch(e){
            console.warn(e)
        }
        


}

    return(
        <div>

        
        
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

