import React from "react";
import { useState,useEffect } from "react";
import Button from '@mui/material/Button';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { useHistory } from "react-router";


export function AnswerContent({question,setQuestion,currentUser,setCurrentUser}){
console.log(question);
const history = useHistory();
    const [answer, setAnswer] = useState({
        
        title: "",
        body: "",
        tags: [],
        askBy:"",
        answerDetail: [{
            user: "",
            solution: "",
            point:0
        }]
    });

        const getAnswer=()=>{
        fetch(`http://localhost:8900/question/getanswer?title=${question}`,
        {method:"GET",})
        .then((data)=>data.json())
        .then((ans)=>{
            setAnswer(ans);
            console.log(ans);
        })
        .catch((e)=>{
            
            console.log(e)

        }
       )
    
               
      }
      useEffect(()=>getAnswer(),[])

    return(
        <div className="answer-page">
        <div className="answer-page-head">
            <div>
            <h3>{answer.title}</h3>
            <p>Asked {answer.date}</p>
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
        <div className="tags-content">{answer.tags.map((t,index)=>{ return <div key={index} className="tag-box">{t}</div> })}</div>
        <div className="user-name">asked {answer.date} by <span style={{color:"rgb(4, 93, 177)"}}>{answer.askBy}</span></div>
        
        </div>
        </div>
         </div>
         {
             answer.answerDetail.map((a,index)=>{
                return <AnswerBox
                 key={index}
                 solution={a}
                 />
             })
         }

        
        

        </div>
    )
}

export function AnswerBox({solution}){
console.log(solution);
    return(
        <div className="answer-content">
            <div className="side-content">
            <ArrowDropUpOutlinedIcon style={{ fontSize:70 ,color:"grey"}}/>
               {solution.point} 
            <ArrowDropDownOutlinedIcon style={{ fontSize:70 ,color:"grey"}}/>
            </div>
            <div className="main-content">
            <p>{solution.solution}</p>
            <div className="tags-user">
            <div className="tags-content"></div>
      
            <div className="user-name" style={{alignSelf:"flex-end"}}>post {solution.date} by <span style={{color:"rgb(4, 93, 177)"}}>{solution.user}</span></div>
        
            </div>
            </div>
        </div>
    )
}
