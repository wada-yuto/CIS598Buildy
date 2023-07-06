require('dotenv').config()

const express = require('express');
const workoutRouters = require('./routes/workouts');
const { default: mongoose } = require('mongoose');


const application = express();

application.use(express.json())
application.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

application.use('/api/workouts', workoutRouters)

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        application.listen(process.env.PORT, () => {
            console.log('Connected to the Database & listening on port', process.env.PORT)
        })        
    })
    .catch((error) => {
        console.log(error)
    })

