// Initilize express router
const express = require('express') // Import express
const {
     createWorkout, 
     getWorkout,
     getWorkouts,
     deleteWorkout,
     updateWorkout
         } = require('../controllers/workoutController')
const router = express.Router() // Create a router




// Get all workouts
router.get('/', getWorkouts)


// Get a specific workout
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout )

// Post a specific workout
router.delete('/:id', deleteWorkout) 


//update a specific workout
router.patch('/:id', updateWorkout)






module.exports = router // Export the router