const express = require('express')
const mongoose = require('mongoose')
const Workout = require('../model/workoutModel')
const { createNewWorkout, getAllWorkouts, getSingleWorkout, deleteWorkout, updateWorkout } = require('../controllers/workoutController')

const router = express.Router()

//List out all of the users workouts
router.get('/', getAllWorkouts)


//List out single workouts
router.get('/:id', getSingleWorkout)

//POST a single workouts
router.post('/', createNewWorkout)


//delete a single workouts
router.delete('/:id', deleteWorkout)

//UPDATE a single workouts
router.patch('/:id', updateWorkout)


module.exports = router