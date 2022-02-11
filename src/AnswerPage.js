import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AnswerList} from "./AnswerList";
import {NavBar} from "./NavBar";
import {Footer} from "./Footer";
import {AnswerContent } from "./AnswerContent";
import { Container,Row,Col } from 'react-bootstrap';
import { Switch, Route,  Redirect } from "react-router-dom";
import {Sidebar} from "./Sidebar";
import { PostSolution } from './PostSolution';
import "./AnswerPage.css";
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
          <Col sm={0} md={0} lg={1} xl={1}></Col>
          <Col sm={0} md={3} lg={3} xl={2} style={{margin:"0px"}}>
          <Sidebar/>
          </Col>
          <Col sm={12} md={9} lg={7} xl={6} style={{margin:"0px",padding:"0px"}}>
            <div className="answerPage_row2">
            <AnswerContent question={question} setQuestion={setQuestion} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            <PostSolution currentUser={currentUser} question={question}/>
           
            </div>

          </Col>
          <Col sm={0} md={0} lg={1} xl={2}></Col>
          
          </Row>  
          <Row>   
          <Col sm={12} md={12} lg={12}>
          <Footer/>
          </Col>
          </Row>
          
            </Container>
            

            </div>    
       
    )
}

// sm={4} md={2} lg={3}
