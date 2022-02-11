import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {AnswerList} from "./AnswerList";
import {NavBar} from "./NavBar";
import {Footer} from "./Footer";
import { RelatedQuestion } from "./RelatedQuestion";
import { Container,Row,Col } from 'react-bootstrap';
import { Switch, Route,  Redirect } from "react-router-dom";
import{Sidebar} from "./Sidebar";
import "./QuestionPage.css";

export const QuestionPage = ({question,setQuestion,currentUser,setCurrentUser}) => {
    return (
      <Container fluid>

      <Row>
      <Col sm={12} md={12} lg={12}>
      <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} question={question} setQuestion={setQuestion}/>
      </Col>
      </Row>
      
        <Row>
        <Col sm={0} md={0} lg={1} xl={1}></Col>
        <Col sm={0} md={3} lg={3} xl={2} style={{margin:"0px"}}>
        
        <Sidebar />

        </Col>
        <Col sm={12} md={9} lg={6} xl={7} style={{margin:"0px",padding:"0px"}}>
       
        <RelatedQuestion question={question} setQuestion={setQuestion} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
          
          
        </Col>
        <Col sm={0} md={0} lg={2} xl={2}></Col>
        
        </Row>    
        
          </Container>
          




       
        
        

       
    )
}



// </div>    
// <div className="QuestionPage">
// <div className="QuestionPage_header">
// <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} question={question} setQuestion={setQuestion}/>

// </div>
// <div className="QuestionPage_content">
// <div className="SideBar">
// <Sidebar/>
 
// </div>
// <div className="Related_question">

// </div>
// </div>


// </div>