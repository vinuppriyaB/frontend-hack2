import "./PostSolution.css";
import Button from '@mui/material/Button';
import { useState } from "react";
import { useHistory } from 'react-router';
import TextareaAutosize from '@mui/material/TextareaAutosize';




export function PostSolution({currentUser,question}) {
   
    const [popper,setpopper] = useState(false);
    const [answer, setAnswer] = useState("");
   
    
    const history = useHistory();

    const resetpost = (event) => {
            
         setAnswer("");
            
        }


    const  submitPost= () => {  
        const solution={username:currentUser,
        comment:answer,
        content: question }; 
        // console.log(solution)
        if(question&&currentUser)
        {
            console.log(solution);
            fetch("https://hackathon2-node.herokuapp.com/question/addanswer",
            {
                method:"POST",
                body: JSON.stringify(solution),
                headers:{"Content-Type":"application/json"},
            }).then((res)=>{
                
                if(res.status==200)
                {
                    // resetpost();
                }


                
            
                
            }).catch((e)=> console.log("ERROR"))  
        }
        else{
            window.alert("You must login to submit");
        }
    }
    
    return (
        <div className="post_solution">
            <p>Post your answer :</p>
            <div className="post_SolutionBox">
                <TextareaAutosize
                maxRows={4}
                fullWidth required
                aria-label="maximum height"
                placeholder=""
                value={answer}
                style={{ maxWidth: 700,height:150 }}
                onChange={event => setAnswer(event.target.value)}
                />
            </div>
            <div>
            <Button
            className="btn-color"
                variant="contained"
                onClick={() => {submitPost()
                        }}
            >
                post solution
            </Button>

            </div>
            


             
            
        </div>
    );
}
