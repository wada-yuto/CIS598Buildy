const Workout = require('../model/workoutModel')
const mongoose = require('mongoose')

//All workout
const getAllWorkouts = async(req, res) => {
    try{
        const workouts = await Workout.find({})
        res.status(200).json(workouts)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

//Single workout
const getSingleWorkout = async(req, res) => {
    try{
        const { id } = req.params

        if(!mongoose.Types.ObjectId.isValid(id)) res.status(404).json({error: 'Invalid ID'})

        const workout = await Workout.findById(id)
        
        if(!workout) res.status(404).json({error: 'No workout found'})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error: 'Could not find a workout'})
    }
}

//Create New workout
const createNewWorkout = async(req, res) => {

    const {title, runType, date, distance, pace, rating, pre, duration, note} = req.body

    try{
        const workout = await Workout.create({title, runType, 
            date, distance, pace, rating, pre, duration, note})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

//Delete workout
const deleteWorkout = async(req, res) => {
    try{
        const { id } = req.params
        if(!mongoose.Types.ObjectId.isValid(id)) res.status(404).json({error: 'Invalid ID'})
        const workout = await Workout.findOneAndDelete({_id: id})
        
        if(!workout) res.status(404).json({error: 'No workout found'})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

//Update workout
const updateWorkout = async (req, res) => {
    try{
        const { id } = req.params
        if(!mongoose.Types.ObjectId.isValid(id)) res.status(404).json({error: 'Invalid ID'})
        const workout = await Workout.findOneAndUpdate({_id: id},{...req.body}, {new: true})

        if(!workout) res.status(404).json({error: 'No workout found'})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error: error.message})
    }
    
}

module.exports = {
    createNewWorkout,
    getSingleWorkout,
    getAllWorkouts,
    deleteWorkout,
    updateWorkout
}