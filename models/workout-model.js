//basics borrowed from https://github.com/DreissenZulu/MongoDB-Fitness-Tracker
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
    distance: {
        type: Number,
        required: false
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

const exerciseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = {Workout};