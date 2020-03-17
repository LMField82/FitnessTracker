const { Workout } = require("../models");
// const router = require("express").Router();

module.exports = function(app) {
    //this route should display all the logged exercises
    app.get("/api/workouts", (req, res) => {
        Workout.find({})
            .then(results => res.json(results))
            .catch(err => console.log(err));
    });

    app.get("/api/workouts/range", (req, res) => {
        Workout.find().sort({"_id":-1}).limit(7)
            .then(result => res.json(result))
            .catch(err => console.log(err));
    });

    //this route should add a new workout to the table
    app.post("/api/workouts", (req, res) => { 
         Workout.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.status(422).send(err));
    });

    //this route should update a workoute from the table if the ":id" matches
    app.put("/api/workouts/:id", (req, res) => {
        Workout.update({ _id:req.params.id }, {$push:{exercises: body}}, {new: true, runValidators: true})
            .then(response => res.json(response))
            .catch(err => console.log(err));
    });

    // //this route should delete a workout from the table if the id matches the ":id" url param
    // app.delete("/api/workouts", ({body}, res) => {
    //     Workout.findByIdAndDelete(body.id)
    //         .then(() => res.json(true))
    //         .catch(err => console.log(err));
    // });
}