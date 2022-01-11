import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AnswerList} from "./AnswerList";
import {NavBar} from "./NavBar";
import {Footer} from "./Footer";
import {AnswerContent } from "./AnswerContent";
import { Container,Row,Col } from 'react-bootstrap';
import { Switch, Route,  Redirect } from "react-router-dom";
import {Sidebar} from "./Sidebar";
export const AnswerPage = ({question,setQuestion,currentUser,setCurrentUser}) => {
    return (
        <div>
       
        
        
        <Container fluid>

        <Row>
        <Col sm={12} md={12} lg={12}>
        <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} question={question} setQuestion={setQuestion}/>
        </Col>
        </Row>
        
          <Row>
          <Col sm={0} md={4} lg={3}>
          <Sidebar/>
          </Col>
          <Col sm={12} md={8} lg={6}>
         
            <AnswerContent question={question} setQuestion={setQuestion} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
          
            
          </Col>
          <Col sm={0} md={0} lg={3}></Col>
          
          </Row>    
          
            </Container>
            

            </div>    
       
    )
}

// sm={4} md={2} lg={3}
