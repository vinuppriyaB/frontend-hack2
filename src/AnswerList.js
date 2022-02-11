import { useState,useEffect } from "react";
import {AnswerPage} from "./AnswerPage";

import {  Button } from '@material-ui/core'
import {Footer} from "./Footer";
 
export function AnswerList({question,setQuestion,currentUser,setCurrentUser}){
    
    const [answer, setAnswer] = useState([]);




    
        const getAnswer=()=>{
        fetch(`http://localhost:8900/question/getanswer?title=${question}`,
        {method:"GET",})
        .then((data)=>data.json())
        .then((ans)=>setAnswer(ans.answer) )
        .catch((e)=>{
            setAnswer([]);
            console.log("error")

        }
       )
    
               
      }
      useEffect(()=>getAnswer(),[setQuestion,question])

   
    
      
    return(
        <div className="answer-page">
       
        <div className="answer-list">
           <div><h1>{question}</h1></div> 
           
           
            {answer.length==0?  < AnswerNotAvailable question={question} currentUser={currentUser}/> :
            <AnswerAvailable answer={answer} question={question} currentUser={currentUser}/>}
          
      </div>
            
      </div>
    )
} 

export function AnswerAvailable({answer,question,currentUser})
{
    return(

        <div>
           
            {
                answer.map((ans, index) => (
                <AnswerPage
                    key={index}
                    username={ans.username}
                    comment={ans.comment}
                    question={question}
                    />
                ))}


        
         <div>

        </div>

        
        
        
        </div> 

    )
}


export function AnswerNotAvailable({question,currentUser}){
    const postquestion = () => {  
        const ques={content:question}; 
        
    if(currentUser)
    {
            fetch("http://localhost:8900/question/postquestion",
        {
            method:"POST",
            body: JSON.stringify(ques),
            headers:{"Content-Type":"application/json"},
        }).then((res)=>{
            
            
            // resetLoginForm();
        }).catch((e)=> console.log("ERROR"))  

    }   
    else{
        window.alert("You must login to submit");
    } 
        
}


    return(
        <div className="answer-notfound">
            <div><h4>Answer not Found</h4></div>
            <div>Post your question here ...</div>
            <Button
               className="btn-color"
               variant="contained"
               style={{width:"150px"}}
                onClick={() => {
                    postquestion()
            }}
                >
                post question</Button>
                
                <div>

        </div>
        

        </div>
    )
}



