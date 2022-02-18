import React from 'react'
import {  useState,useEffect } from "react";
import {Link} from "react-router-dom";
import { useHistory } from "react-router";
import {NoResult} from "./NoResult";
import Button from '@mui/material/Button';
import "./RelatedQuestion.css";

export const RelatedQuestion = ({question,setQuestion,currentUser,setCurrentUser}) => {
    console.log(question)
   console.log("questionPage") 
  const [related,setRelated]=useState([]);
  const [matched,setMatched]=useState([]);
  const history = useHistory();
  

  const getAnswer=()=>{
      console.log("functioncall")
    fetch("https://hackathon2-node.herokuapp.com/question/getavailquestion")
    .then((data)=>data.json())
    .then((ques)=>{
        let temp1=[];
        let temp2=[];
        console.log(question)
        
        if(question)
        {
            for(let i=0;i<ques.length;i++)
            {
                for(let j=0;j<ques[i].tags.length;j++)
                {
                    if(question.toLowerCase().includes(ques[i].tags[j].toLowerCase()))
                    {
                        temp1.push(ques[i])
                    }
                    else{
                        temp2.push(ques[i])
                    }
                }
            
            
            }
            console.log(temp1)
            console.log(temp2)
        setMatched(temp1);
        setRelated(temp2);
        }else{
            setRelated(ques);
            console.log()
        }
        
        
        
        }
    ).catch((e)=>
        
        console.log(e)

    )
           
  }
  useEffect(()=>getAnswer(),[question,setQuestion, ])
 
    return (
        <div className="relatedques-display">
        
        <div className="result-for">
            <div>
                <h2>Search Results</h2>
                <br></br>
                <p >Results for {question}</p>
                <br></br>
                <h5 >{related.length} results</h5>
            </div>
            <div>
            <Button variant="contained" style={{textTransform: "capitalize"}}
            onClick={async(event)=>{
             
        history.push("/postquestion");}}
        >Ask Question</Button>
            </div>
           
        </div>
        <div className="relatedques_container">
        {(matched.length>0||related.length>0) ? <div> {matched.map((q,index)=>(
            <QuestionList 
            ques={q}
            key={index}
            setQuestion={setQuestion}
            question={question} 
            currentUser={currentUser}
            /> ))}
            
                {related.map((q,index)=>(
                    <QuestionList 
                    ques={q}
                    key={index}
                    setQuestion={setQuestion}
                    question={question} 
                    currentUser={currentUser}
                    />))}

            </div>

            : <NoResult
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
   
console.log(ques.answerDetail[0])
    return(
       <div className='relatedques-box'>
       <div className="ques-details">
        <div className="count_box">
          <p className="va-count">{ques.tags.length}</p>
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
       <div className="user-name">asked {ques.date.split("T")[0]} by <span style={{color:"rgb(4, 93, 177)"}}>{ques.askBy}</span></div>
       
       </div>
            
       </div>
       
        

        </div>
    )
}

