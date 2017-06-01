var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
    Name:{type:String, required: true, trim: true},
	scoreid: [{type: Schema.Types.ObjectId, ref: 'Score'}],
},{timestamps:true})
var User = mongoose.model("User", UserSchema)

var QuestionSchema = new mongoose.Schema({
	Question: {type: String, required: true },
	AllAnswers: [{type: String, required: true }],
	RightAnswer: {type: String, required: true },
});
var Question = mongoose.model('Question',  QuestionSchema);


var ScoreSchema = new mongoose.Schema({
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
	Score: {type: Number, required: true },
	Percent: {type: Number, required: true },
});
var Score = mongoose.model('Score',  ScoreSchema);