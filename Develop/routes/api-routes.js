const { Workout } = require("../models");

module.exports = function(app) {
    //this route should display all the logged exercises
    app.get("/api/workouts", (req, res) => {
        Workout.find({})
            .then(workouts => res.json(workouts))
            .catch(err => console.log(err));
    });

    //this route should add a new workout to the table
    app.post("/api/workouts", (req, res) => { 
         Workout.create({})
            .then(workout => res.json(workout))
            .catch(err => res.status(422).send(err));
    });

    //this route should update a workoute from the table if the ":id" matches
    app.put("/api/workouts/:id", ({body, params}, res) => {
        Workout.findByIdAndUpdate(params.id, {$push:{exercises: body}}, {new: true, runValidators: true})//may try _id
            .then(workout => res.json(workout))
            .catch(err => console.log(err));
    });

    //this route should delete a workout from the table if the id matches the ":id" url param
    app.delete("/api/workouts", ({body}, res) => {
        Workout.findByIdAndDelete(body.id)
            .then(() => res.json(true))
            .catch(err => console.log(err));
    });
}