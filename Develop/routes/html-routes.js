const { Workout } = require("../models");

module.exports = function(app) {
    
    app.get("/workout/new", (req, res) => {
        res.render("index");
    });

    
    


}