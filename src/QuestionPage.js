import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AnswerList} from "./AnswerList";
import {NavBar} from "./NavBar";
import {Footer} from "./Footer";
import { RelatedQuestion } from "./RelatedQuestion";
import { Container,Row,Col } from 'react-bootstrap';
import { Switch, Route,  Redirect } from "react-router-dom";
import{Sidebar} from "./Sidebar";
export const QuestionPage = ({question,setQuestion,currentUser,setCurrentUser}) => {
    return (
        <div>
       
        
        
        <Container fluid>

        <Row>
        <Col sm={12} md={12} lg={12}>
        <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} question={question} setQuestion={setQuestion}/>
        </Col>
        </Row>
        
          <Row>
          <Col sm={0} md={0} lg={2}></Col>
          <Col sm={0} md={4} lg={2}>
          <Sidebar/>
          </Col>
          <Col sm={12} md={8} lg={4}>
         
            <RelatedQuestion question={question} setQuestion={setQuestion} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
          
            
          </Col>
          <Col sm={0} md={0} lg={4}></Col>
          
          </Row>    
          
            </Container>
            

            </div>    
       
    )
}

// sm={4} md={2} lg={3}
