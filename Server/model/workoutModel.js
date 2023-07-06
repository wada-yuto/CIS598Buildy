const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    runType: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    distance: {
        type: Number,
        requried: true
    },
    pace: {
        type: String,
        required: true
    },
    pre: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        requried: true
    },
    duration: {
        type: Number,
        required: true
    },
    note: {
        type: String,
        required: false
    }

})

module.exports = mongoose.model('Workout', workoutSchema)