const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    Title:{
        type: String,
        required: true
    },

    Reps:{
        type: Number,
        required: true
    },

    Load:{
        type: Number,
        required: true
    }
}, {timestamps: true})