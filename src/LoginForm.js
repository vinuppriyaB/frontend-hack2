 import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import { useHistory } from 'react-router';



export function LoginForm({setCurrentUser,currentUser}) {
    const [popper,setpopper] = useState(false);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    
    const history = useHistory();
    const resetLoginForm = (event) => {
            setName("");
            setPassword("");
            setEmail("");
            
        };
    const loginprocess = () => {  
        const loginuser={username:name,password:password }; 
        console.log(loginuser);
        
        fetch("http://localhost:8900/user/login",
    {
        method:"POST",
        body: JSON.stringify(loginuser),
        headers:{"Content-Type":"application/json"},
    }).then((res)=>{
        setCurrentUser(name)
        if(res.status==400)
          {
            window.alert("MentorName already exist");
          }
          else
          {
            setpopper(true);
            setTimeout(()=>{
              setpopper(false);

            },2000)

          }
        
        resetLoginForm();
    }).catch((e)=> console.log("ERROR"))  
}


    
    
    return (
        <div className="input_field">
            <TextField
                className="input_text"
                id="outlined-basic"
                label=" Name"
                variant="outlined"
                value={name}
                onChange={event => setName(event.target.value)} />
            
            {/* <TextField
                className="input_text"
                id="outlined-basic"
                label="Email"
                variant="outlined"
                value={email}
                onChange={event => setEmail(event.target.value)} /> */}

            <TextField
                className="input_text"
                id="outlined-basic"
                label="Password"
                variant="outlined"
                value={password}
                onChange={event => setPassword(event.target.value)} />    
            
            <Button
                variant="contained"
                onClick={() => {loginprocess()
            }}
                >
                Login</Button>

                { popper ? 
            <div className="popbox">
              <p>Login successfully</p></div>
             :"" }
       

             
            
        </div>
    );
}
