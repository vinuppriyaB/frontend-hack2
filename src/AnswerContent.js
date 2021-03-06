import React from "react";
import { useState,useEffect } from "react";
import Button from '@mui/material/Button';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { useHistory } from "react-router";
import { NoResult } from "./NoResult";


export function AnswerContent({question,setQuestion,currentUser,setCurrentUser}){
// console.log(question);
const history = useHistory();

    const [answer, setAnswer] = useState({
        
        title: "",
        body: "",
        tags: [],
        askBy:"",
        date:"",
        answerDetail: [{
            user: "",
            solution: "",
            point:0
        }]
    });

        const getAnswer=()=>{
        fetch(`https://hackathon2-node.herokuapp.com/question/getanswer?title=${question}`,
        {method:"GET",})
        .then((data)=>data.json())
        .then((ans)=>{
            setAnswer(ans);
            // console.log(ans);
        })
        .catch((e)=>{
            
            console.log(e)

        }
       )
    
               
      }
      useEffect(()=>getAnswer(),[question,setQuestion])

const date=answer.date.split("T")[0];



    return(

        <div className="answer-page">
        {answer.answerDetail? <div>
            <div className="answer-page-head">
            <div>
            <h3>{answer.title}</h3>
            <p>Asked on  <span style={{color:"gray",fontSize:"12px" }}> {answer.date}</span></p>
            </div>
            
            <div>
            <Button variant="contained" style={{textTransform: "capitalize"}}
            onClick={async(event)=>{
               
        history.push("/postquestion");}}
        >Ask Question</Button>
            </div>
        </div>
        <div className="question-content">
        <div className="side-content">
        <ArrowDropUpOutlinedIcon style={{ fontSize:70 ,color:"grey"}}/>

        <ArrowDropDownOutlinedIcon style={{ fontSize:70 ,color:"grey"}}/>
        </div>
        <div className="main-content">
        <p>{answer.body}</p>
        
        <div className="tags-user">
        <div className="tags-content">
        {answer.tags.map((t,index)=>{ return <div key={index} className="tag-box">{t}</div> })}
        </div>
        <div className="user-name">asked {date} by <span style={{color:"rgb(4, 93, 177)"}}>{answer.askBy}</span></div>
        
        </div>
        </div>
         </div>

         <div className="answer-content">
             {answer.answerDetail.map((a,index)=> {
                return <AnswerBox
                 key={index}
                 solution={a}
                 />
             })}
             
        
        </div>

        </div>:<NoResult question={question} />}
        </div>
    )
}

export function AnswerBox({solution}){
// console.log(solution);
    return(
        <div className="answer-contentRow">
            <div className="side-content">
            <ArrowDropUpOutlinedIcon style={{ fontSize:70 ,color:"grey"}}/>
               {solution.point} 
            <ArrowDropDownOutlinedIcon style={{ fontSize:70 ,color:"grey"}}/>
            </div>
            <div className="main-content">
            <p>{solution.solution}</p>
            <div className="tags-user">
            <div className="tags-content"></div>
      
            <div className="user-name" style={{alignSelf:"flex-end"}}>post by <span style={{color:"rgb(4, 93, 177)"}}>{solution.user}</span></div>
        
            </div>
            </div>
        </div>
    )
}
