import { User } from './login/user';
import { Injectable } from '@angular/core';
import { Http,Response,RequestOptions,Headers } from "@angular/http";
import "rxjs";
import { Question } from "app/users/addquestionpage/question";
import { Trivia } from "app/users/playpage/trivia";

@Injectable()
export class UsersService {
  presentscore: any;
  SCORES: any;
  SCORE: any;
  QUESTION: any;
  user: User;
  loggedUser: User;
  USERS: User[] = []
  loggedin = false
  mainpage= false
  playpage=false
  addquestionpage=false
  success= false
 
  constructor(private http:Http) {}

  get_users(){
    this.http.get('/users')
      .map((response: Response) => response.json())
      .subscribe(
      data => {this.USERS=data},
      )}

  loggedIn(){
    console.log("Hitting logged in in service ts")
    this.http.get('/loggedin')
      .map((response: Response) => response.json())
      .subscribe(user=>{if(user){{this.loggedin = true; this.loggedUser=user}}else{this.loggedin = false}},
      )
  }

  create(user:User){
    this.http.post("/create", user)
      .map((response: Response)=> response.json())
      .subscribe(userinfo =>{console.log("Server returned this userinfo.body: ",userinfo);
        this.loggedUser = userinfo;
        this.loggedin = true
        this.mainpage=true
      })
    }

    find(user:User){
      this.http.post("/find", user)
          .map((response: Response) => response.json())
          .subscribe(data2 =>{
            if(data2==null){
              console.log("User was not found"); 
              this.create(user);
            }else{ 
              console.log("User was found: ", data2);
              this.loggedUser = data2
              this.loggedin = true
              this.mainpage=true
          }
        })
    }

    logOut(){
      console.log("hitting logout service")
      this.http.get("/logout")
          .map((response: Response) => response.json())
          .subscribe()
          this.loggedin = false  
    }

    addQuestion(){
      console.log("hitting addquestion in service")
      this.mainpage=false
      this.playpage=false
      this.addquestionpage=true
    }

    newQuestion(questioncreate:Question){
        console.log("awesome message",questioncreate,"awesome is it")
          this.http.post("/questioncreate", questioncreate)
              .map((response: Response) => response.json())
              .subscribe(data => {this.QUESTION = data})
        this.playpage=false  
        this.mainpage=false
        this.addquestionpage=true   
      }

    play(){
        console.log("hitting play in service")
        this.http.get('/getQuestion')
              .map((response: Response) => response.json())
              .subscribe(data => {this.QUESTION = data})
        this.playpage=true  
        this.mainpage=false
        this.addquestionpage=false   
    }

     answers(trivia:Trivia){
        console.log("hitting Answers in service",trivia)
          console.log(trivia)
        this.http.post("/submitanswer", trivia)
              .map((response: Response) => response.json())
              .subscribe(data => {this.presentscore = data;console.log("**************** Score from current test are answers",this.presentscore)})
        console.log("Success is before toggling ",  this.success)
        this.success=true 
        console.log("Success is after toggling ",  this.success)
        this.playpage=false  
        this.mainpage=true
        this.addquestionpage=false  
         

      }

    get_results(){
      this.http.get('/score')
        .map((response: Response) => response.json())
        .subscribe(data => {this.SCORES=data;console.log("Score from service file get_results",this.SCORES)})
        this.playpage=false  
        this.addquestionpage=false
        this.mainpage=true 
     }


     canceling(){
        this.addquestionpage=false  
        this.mainpage=true
     }
  }