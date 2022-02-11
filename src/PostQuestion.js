import "./PostQuestion.css";
import Button from '@mui/material/Button';
import { useState } from "react";
import { useHistory } from 'react-router';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import TextField from '@mui/material/TextField';






export function PostQuestion({currentUser,question}) {
   
    const [popper,setpopper] = useState(false);
    const [body, setBody] = useState("");
   const [title,setTitle]=useState("")
   const [tags,setTags]=useState("");
    
    const history = useHistory();

    // const resetpost = (event) => {
            
    //      setAnswer("");
            
    //     }


    const  submitPost= () => {  
        const tagArray=tags.split(",");
        console.log(tagArray)
        const question={
            askby:currentUser,
        title:title,
        body: body,
        tags:tagArray
    }; 
        
    //   console.log(question)  
            
            fetch("https://hackathon2-node.herokuapp.com/question/postquestion",
            {
                method:"POST",
                body: JSON.stringify(question),
                headers:{"Content-Type":"application/json"},
            }).then((res)=>{
        
                
            console.log(res)
                // resetpost();
            }).catch((e)=> console.log("ERROR"))  
        }
        
    
    
    return (
        <div className="post_Question">
            <h2>Ask a public question</h2>
            <div className="post_QuestionBox">
            <h6>Title</h6>
            <TextField id="outlined-basic"
            label="Title" 
            
            variant="outlined"  
            value={title}
            onChange={event => setTitle(event.target.value)}
            />
            <h6>Body</h6>
            <TextareaAutosize
            fullWidth required
                maxRows={4}
                aria-label="maximum height"
                placeholder=""
                value={body}
                style={{ maxWidth: "100%",height:150 }}
                onChange={event => setBody(event.target.value)}
            />
            <h6>Tags</h6>
            <TextField id="outlined-basic" label="Outlined" 
            variant="outlined" 
            multiple
            value={tags}
            onChange={event => {
                console.log(event.target.value)
                setTags(event.target.value)}}
                
            />
            <p style={{fontSize:"11px" }}>Enter tags with comma seperation</p>
            
            <div>


            </div>
            </div>  
            <Button
            className="btn-color"
                variant="contained"
                onClick={() => {submitPost()
                        }}
            >
                post question
            </Button>

            <Button style={{float:"right"}}
            className="btn-color"
                variant="contained"
                onClick={() => history.goBack()}
            >
                back
            </Button>



            
        </div>
    );
}
