var controller = require("./../controllers/controller.js")


module.exports = function(app){
    app.get("/users",controller.get_all_users)
    app.get('/loggedin',controller.loggedin)
    app.post("/create",controller.create)
    app.post('/find',controller.find)
    app.get('/logout', controller.logout)
    app.post('/questioncreate', controller.questioncreate)
    app.post('/submitanswer', controller.submitanswer)
    app.get('/getQuestion', controller.getQuestion)
    app.get('/score', controller.getScore)
    
    
}