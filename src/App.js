import react from "react";
import './App.css';
import {LoginForm} from "./LoginForm";
import { NavBar } from "./NavBar";
import {SignupForm} from "./SignupForm.js"
import { useState } from "react";
import {SolutionPage} from "./SolutionPage"
import { Switch, Route,  Redirect } from "react-router-dom";
import {Login } from "./Login";
import {AnswerList} from "./AnswerList";
import {LoginNavbar} from "./LoginNavbar"

function App() {
  const [currentUser,setCurrentUser]= useState("");
  const [question,setQuestion]= useState("");
    

  return (
    <div className="App">
     
      <Switch>

      <Route exact path="/">
        <LoginNavbar/>
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

        <Route exact path="/answerpage">
          <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} question={question} setQuestion={setQuestion}/>
        <AnswerList question={question} setQuestion={setQuestion} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
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
