const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    workoutType: {
        type: String,
        required: true
    },
    //will only fill depending on if cardio or resistance
    distance: {
        type: Number,
    },
    duration: {
        type: Number,
        required: "duration in minutes"
    },
    weight: {
        type: Number,
    },
    sets: {
        type: Number,
    },
    reps: {
        type: Number,
    },
    
});


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = {Workout};