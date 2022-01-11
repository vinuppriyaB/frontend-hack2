import react from "react";
import './App.css';
import {LoginForm} from "./LoginForm";
import { NavBar } from "./NavBar";
import {SignupForm} from "./SignupForm.js"
import { useState } from "react";

import { Switch, Route,  Redirect } from "react-router-dom";
import {Login } from "./Login";
import {PostQuestion} from "./PostQuestion";
import {LoginNavbar} from "./LoginNavbar"
import { AnswerPage } from "./AnswerPage";
import {Footer} from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import {QuestionPage} from "./QuestionPage";

function App() {
  const [currentUser,setCurrentUser]= useState("");
  const [question,setQuestion]= useState("");
    

  return (
    <div className="App">
    
      <Switch>

      <Route exact path="/">
        <LoginNavbar />
          <Login currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </Route>
     
       
        <Route  path="/signup">
        <LoginNavbar/>
        <SignupForm currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </Route>

        {/* <Route exact path="/question">
        <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <SolutionPage currentUser={currentUser} setCurrentUser={setCurrentUser} question={question} setQuestion={setQuestion}/>
        </Route>  */}

        <Route exact path="/question">
        
          <QuestionPage currentUser={currentUser} setCurrentUser={setCurrentUser} question={question} setQuestion={setQuestion}/>
        </Route>
        <Route  path="/answer">
            <AnswerPage question={question} setQuestion={setQuestion} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
           
            </Route>
            <Route  path="/postquestion">
            <PostQuestion question={question} setQuestion={setQuestion} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
           
            </Route>

        
         <Route path="**">
          <NotFound />
        </Route>
      </Switch> 
    </div>
  );
}

export default App;


function NotFound() {
  return (
    <div>
      <p className="not-found">404 ERROR</p>
      <img
        height="100%"
        width="100%"
        src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif"
        alt="404 ERROR"
      />
    </div>
  );
}
