// Initilize express router
const express = require('express') // Import express
const {
     createWorkout, 
     getWorkout,
     getWorkouts
         } = require('../controllers/workoutController')
const router = express.Router() // Create a router




// Get all workouts
router.get('/', getWorkouts)


// Get a specific workout
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout )

// Post a specific workout
router.delete('/:id', (req, res) => {     
    res.json({ message: 'Delete a workout'}) 
})

//update a specific workout
router.patch('/:id', (req, res) => {     
    res.json({ message: 'UPDATE a workout'}) 
})






module.exports = router // Export the router