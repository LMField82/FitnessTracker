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
        const data = req.body;
        
        Workout.create(data)
            .then(workout => res.json(workout))
            .catch(err => res.status(422).send(err));
    });

    // //this route should update a workoute from the table if the ":id" matches
    // app.put("/api/workouts/:id", (req, res) => {
    //     Workout.update({ _id: req.params.id })
    //         .then()
    // });

    //this route should delete a workout from the table if the id matches the ":id" url param
    app.delete("/api/workouts/:id", (req, res) => {
        Workout.remove({ _id: req.params.id })
            .then(workout => res.json(workout))
            .catch(err => console.log(err));
    });
}