const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercise: [
        {
        type: {
            type: String,
            trim: true,
            required: "Enter an exercise type."
        }, 
        name: {
            type: String,
            trim: true,
            required: "Enter an exercise name."
        },
        duration: {
            type: Number,
            required: "Enter the duration of the exercise."
        },
        weight: {
            type: Number
        },
        sets: {
            type: Number
        },
        reps: {
            type: Number
        },
        distance: {
            type: Number
        }
     }
  ]
});

//passing schema in and creating a mongoose model called "Workout" with it
const Workout = mongoose.model("Workout", WorkoutSchema);
//exporting model so routes can use it to interact with collection
module.exports = Workout;