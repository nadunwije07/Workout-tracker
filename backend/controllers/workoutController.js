const Workout = require('../models/WorkoutModel') // Import the Workout model
const mongoose = require('mongoose') // Import mongoose

//get all workouts
const getWorkouts = async (req, res) => {

    const workouts = await Workout.find({}).sort({createdAt: -1}) // Get all workouts from the database and sort them by createdAt in descending order

    res.status(200).json(workouts) // Send the workouts as a JSON object
}




//get a specific workout
const getWorkout = async (req, res) => {

    const { id } = req.params // Get the id from the request parameters

    if (!mongoose.Types.ObjectId.isValid(id)) { // If the id is not a valid ObjectId
        return res.status(404).json({error: 'No such workout'}) // Send a 404 error
    }

    res.status(200).json(workout) // Send the workout as a JSON object

        if (!workout) { // If the workout is not found
            return res.status(404).json({error: 'Workout not found'}) // Send a 404 error
        }

        res.status(200).json(workout) // Send the workout as a JSON object
}


//create a new workout

 //add doc to db
    const createWorkout = async (req, res) => {

        const {title, load, reps} = req.body
        
        try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
        } catch (error) {
        res.status(400).json({error: error.message})
        }
    }




//delete a specific workout




//update a specific workout


module.exports = {
    createWorkout, // Export the createWorkout function
    getWorkout,
    getWorkouts
} 

