// Initilize express router
const express = require('express') // Import express
const router = express.Router() // Create a router



// Get all workouts
router.get('/', (req, res) => {     
    res.json({ message: 'GET All workouts'}) 
})


// Get a specific workout
router.get('/:id', (req, res) => {     
    res.json({ message: 'GET a specific workout'}) 
})

// Post a specific workout
router.post('/', (req, res) => {     
    res.json({ message: 'Post a workout'}) 
})

// Post a specific workout
router.delete('/:id', (req, res) => {     
    res.json({ message: 'Delete a workout'}) 
})

//update a specific workout
router.patch('/:id', (req, res) => {     
    res.json({ message: 'UPDATE a workout'}) 
})






module.exports = router // Export the router