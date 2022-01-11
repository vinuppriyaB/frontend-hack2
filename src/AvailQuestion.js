import React from 'react'
import {  useState,useEffect } from "react";
import {Link} from "react-router-dom";
import { useHistory } from "react-router";

export const AvailQuestion = ({question,setQuestion,currentUser,setCurrentUser}) => {
    
  const [availQues,setAvailQues]=useState([]);

  const getMovies=()=>{
    fetch("http://localhost:8900/question/getavailquestion",
    {method:"GET",})
    .then((data)=>data.json())
    .then((question)=>{
        let temp=new Array(question.length);
        console.log(question)
        
        for(let i=0;i<question.length;i++)
        {
            temp[i]=question[i].title;
        }
        setQues(temp);
        console.log(temp);
        }
    );
           
  }
  useEffect(()=>getMovies(),[])
    return (
        <div className="ques-list">
        <h4 style={{paddingLeft:20}}>Answers availble for</h4>
       
            {ques.map((q,index)=>(
                <QuestionList 
                content={q}
                key={index}
                setQuestion={setQuestion}
                question={question} 
                currentUser={currentUser}
                />

            ))}
           
        </div>
    )
}

export function QuestionList ({content,question,setQuestion}){
    const history = useHistory();
    const searchanswer=(event)=>{
        setQuestion(event.target.outerText)
    }
    return(
       
        <Link className="ques-decor" 
        
        onClick={(event)=>( 
            searchanswer(event)
           
    )}>
        {content}
        </Link>
        
    )
}
