import { useState,useEffect } from "react";
import {AnswerPage} from "./AnswerPage";
import { SolutionPage } from "./SolutionPage";
import {  Button } from '@material-ui/core'


export function AnswerList({question,setQuestion,currentUser,setCurrentUser}){
    
    const [answer, setAnswer] = useState([]);




    
        const getAnswer=()=>{
        fetch(`https://hackathon2-node.herokuapp.com/question/getanswer?content=${question}`,
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
        <div className="answer-list">
            <h1>{question}</h1>
            {answer.length==0?  < AnswerNotAvailable question={question} currentUser={currentUser}/>:
            <AnswerAvailable answer={answer} question={question} currentUser={currentUser}/>}
           
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
            <SolutionPage currentUser={currentUser}  question={question} />
        </div>

        </div>
        

    )
}
export function AnswerNotAvailable({question,currentUser}){
    const postquestion = () => {  
        const ques={content:question}; 
        
        
        fetch("https://hackathon2-node.herokuapp.com/question/postquestion",
    {
        method:"POST",
        body: JSON.stringify(ques),
        headers:{"Content-Type":"application/json"},
    }).then((res)=>{
        
        
        // resetLoginForm();
    }).catch((e)=> console.log("ERROR"))  
}


    return(
        <div className="answer-notfound">
            <div><h4>Answer not Found</h4></div>
            <div><p>Post your Question here . . .</p></div>
            <Button
               className="btn-color"
               variant="contained"
               style={{width:"200px"}}
                onClick={() => {
                    postquestion()
            }}
                >
                post question</Button>
                <div>If you know the solution</div>
                <div>
            <SolutionPage currentUser={currentUser}  question={question} />
        </div>

        </div>
    )
}



