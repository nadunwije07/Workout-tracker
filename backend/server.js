require('dotenv').config()

const express = require('express')
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose')

// express app
const app = express()

// middleware
app.use(express.json()) // for parsing application/json

app.use((req, res, next) => { 
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/workouts', workoutRoutes)

// connect to mongodb & listen for requests
mongoose.connect(process.env.Mong_URI)
.then(()=> {

    // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB and listening on port', process.env.PORT)
        })

})
.catch((err) => console.log(err))

