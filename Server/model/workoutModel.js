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
        required: false
    },
    distance: {
        type: Number,
        requried: false
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
        type: String,
        required: false
    },
    note: {
        type: String,
        required: false
    }

})

module.exports = mongoose.model('Workout', workoutSchema)