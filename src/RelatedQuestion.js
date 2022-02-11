import React from 'react'
import {  useState,useEffect } from "react";
import {Link} from "react-router-dom";
import { useHistory } from "react-router";
import {NoResult} from "./NoResult";
import Button from '@mui/material/Button';
import "./RelatedQuestion.css";

export const RelatedQuestion = ({question,setQuestion,currentUser,setCurrentUser}) => {
    
  const [ques,setQues]=useState([]);
  const history = useHistory();
  

  const getAnswer=()=>{
    fetch("https://hackathon2-node.herokuapp.com/question/getavailquestion")
    .then((data)=>data.json())
    .then((ques)=>{
        let temp=new Array();
        let temp2=[];
        
        setQues(ques);
        for(let i=0;i<ques.length;i++)
        {
            temp[i]=ques[i].title;
            
            if(temp[i].includes(question))
            {
                temp2.push(ques[i])
            }
        }
        
        
        }
    ).catch((e)=>
        
        console.log(e)

    )
           
  }
  useEffect(()=>getAnswer(),[question,setQuestion])
 
    return (
        <div className="relatedques-display">
        
        <div className="result-for">
            <div>
                <h2>Search Results</h2>
                <br></br>
                <p >Results for {question}</p>
                <br></br>
                <h5 >{ques.length} results</h5>
            </div>
            <div>
            <Button variant="contained" style={{textTransform: "capitalize"}}
            onClick={async(event)=>{
             
        history.push("/postquestion");}}
        >Ask Question</Button>
            </div>
           
        </div>
        <div className="relatedques_container">
        {(ques.length>0) ? ques.map((q,index)=>(
            <QuestionList 
            ques={q}
            key={index}
            setQuestion={setQuestion}
            question={question} 
            currentUser={currentUser}
            /> 

            )) : <NoResult
                setQuestion={setQuestion}
                        question={question} 
                />
        }
   </div>
        

           
           
        </div>
    )
}

export function QuestionList ({ques,question,setQuestion}){
    const [relatedques,setRelatedQues]=useState([]);
  const [answerCount,setAnswerCount]=useState([]);
    const history = useHistory();
    const searchanswer=(event)=>{
        setQuestion(event.target.outerText)
        history.push("/answer");
    }
   

    return(
       <div className='relatedques-box'>
       <div className="ques-details">
        <div className="count_box">
          <p className="va-count">{ques.answerDetail.length}</p>
          <p className="va-name">votes</p>
        </div>
        <div className="answer-count-box count_box">
            <p className="va-count">{ques.answerDetail.length}</p>
          <p className="va-name">answer</p>
        </div>
        
        </div>
       <div className="ques-content">
            <div className="ques-title"
            onClick={async(event)=>{
                        await setQuestion(ques.title)
                        // localStorage.removeItem("question");
                        // localStorage.setItem("question",ques.title);
                        history.push("/answer");}}
            >
                Q: { ques.title}
              
            </div>
            <div>
            <p>{ques.body}</p>
              </div>
            <div className="tags-user">
       {ques.tags ? <div className="tags-content">
       { ques.tags.map((t,index)=>{ return <div key={index} className="tag-box">{t}</div> })}
       </div>:""}
       <div className="user-name">asked {ques.date} by <span style={{color:"rgb(4, 93, 177)"}}>{ques.askBy}</span></div>
       
       </div>
            
       </div>
       
        

        </div>
    )
}

