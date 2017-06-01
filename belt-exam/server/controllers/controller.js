var mongoose = require("mongoose")
var User = mongoose.model("User")
var Question = mongoose.model("Question")
var Score = mongoose.model("Score")



module.exports = {
    get_all_users: function(req,res){
        User.find({},function(err,data){
            if(err){
                console.log(err)
                res.json(err)
            }else{
                res.json(data)
            }
        })
    },

     getScore: function(req,res){
        //Score.find({},function(err,data){
        Score.find({}).populate("_user").exec(function(err, data){
            if(err){
                console.log(err)
                res.json(err)
            }else{
                res.json(data)
                console.log("this is data from get_score", data)
            }
        })
    },


    create: function(req, res){
		var newUser = new User(req.body)
		newUser.save(function(err,userinfo){
            if(err){
				console.log("User create error", err)
				res.json({added: false, error: err})
			} else {
                req.session.usercreate = userinfo._id
                console.log("in sessions",req.session.usercreate)
				res.json(userinfo)
			}
		})
	},

    find: function(req,res){ 
        User.findOne({Name:req.body.Name},function(err,data2){
            if(err){
                console.log("User find error",err)
                res.json(err)
            }else{
                if(data2){
                    req.session.userfind = data2._id
                    console.log("session find:", req.session.userfind)
                    res.json(data2)
                }else{
                    res.json(data2)
                } 
            }
        })
    },

    // loggedin: function(req,res){
    //     console.log("inside logged")
    //     if(req.session.user){
    //         console.log(true)
    //         User.findOne({Name:req.session.user},function(err,user){
    //         if(err){
    //             console.log(err)
    //             res.json(err)
    //         }else{
    //             res.json(user)
    //         }
    //     })}else{
    //         console.log(false)
    //         res.json(false)
    //     }
        
    // },


    loggedin: function(req,res){
        console.log("inside logged")
        console.log("session user", req.session.userfind, req.session.usercreate)
        if(req.session.userfind || req.session.usercreate){
            console.log(true)
            if(req.session.userfind){
                User.findOne({_id:req.session.userfind},function(err,user){
                    console.log("inside find user", user.id)
                    res.json(user)
                })
            }
            else{
                User.findOne({_id:req.session.usercreate},function(err,user){
                    console.log("inside create user find", user._id )
                    res.json(user)
                })
            }   
        }
            else{
                console.log(false)
                res.json(false)
            }
        
    },

    logout: function(req,res){
        console.log("hitting logout controller")
        req.session.destroy(function(err){
            if(err){
                console.log(err)
                res.json(err)
            }
        })
    },

    questioncreate: function(req, res){
        console.log("Hitting questioncreate in controller", req.body)
        var questioncreate = new Question()
        questioncreate.Question = req.body.Question
        questioncreate.RightAnswer = req.body.AllAnswers1
        questioncreate.AllAnswers.push(req.body.AllAnswers1)
        questioncreate.AllAnswers.push(req.body.AllAnswers2)
        questioncreate.AllAnswers.push(req.body.AllAnswers3)
                function shuffle(a) {
                    var j, x, i;
                    for (i = a.length; i; i--) {
                        j = Math.floor(Math.random() * i);
                        x = a[i - 1];
                        a[i - 1] = a[j];
                        a[j] = x;
                    }
            }
            console.log("before shuffle",questioncreate.AllAnswers)
            shuffle(questioncreate.AllAnswers)
            console.log("after shuffle",questioncreate.AllAnswers)
        questioncreate.save(function(err){
            Question.find({},function(err,data){
            if(err){
                console.log(err)
                res.json(err)
             }
            else{
                res.json(data)
            }
          })
        })

    },


    getQuestion: function(req, res){
        console.log("in get questions in controller")   
    Question.aggregate({$sample: { size: 3 }},function(err,data){
        console.log(data)
            if(err){
                console.log(err)
                res.json(err)
             }
            else{
                res.json(data)
            }
          })

        },


     submitanswer: function(req, res){
         console.log("in get submitanswer in controller",req.body)
         console.log("answer in get submitanswer in controller",req.body.answer1)
         var score = 0
         var result = new Score()
        if (req.body.answer1==req.body.rightAnswer1) {
            score=score+1;
        }  
        if (req.body.answer2==req.body.rightAnswer2) {
            score=score+1;
        } 
        if (req.body.answer3==req.body.rightAnswer3) {
             score=score+1;
        } 
        console.log(score)
        var percent = score/3 * 100
        result.Score=score
        result.Percent = Math.floor(percent)
        console.log("percentage: ", result.Percent)
            if(!req.session.userfind){
                console.log("!req.session.userfind",req.session.usercreate)
                result._user = req.session.usercreate
            }else{
                result._user = req.session.userfind
                console.log("result._user = req.session.userfind",req.session.userfind)
            }
        result.save(function(err){
            if(err){
                console.log(err)
                res.json(err)
             }
             console.log("ID is is", result._id)
        Score.findOne({_id: result._id},function(err,score){
            if(err){
                res.json(err)
             }
             else{
                res.json(score)
                if(req.session.userfind){
                    User.findOne({_id: req.session.userfind },function(err, user){
                        console.log("find user find",user._id, score._id)
                        user.scoreid.push(score._id)
                        user.save()
                    })
                }else{
                    User.findOne({_id:req.session.usercreate},function(err, user){
                        console.log("find user find",user._id, score._id)
                        user.scoreid.push(score._id)
                        user.save()
                     })
                }  
                }    
            })



          })



    }

}
