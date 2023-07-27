const Workout = require("../model/workoutModel");
const mongoose = require("mongoose");
const { spawn } = require("child_process");
const nodecallspython = require("node-calls-python");

//All workout
const getAllWorkouts = async (req, res) => {
    try {
        
        const workouts = await Workout.find({});

        res.status(200).json(workouts);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//Single workout
const getSingleWorkout = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id))
            res.status(404).json({ error: "Invalid ID" });

        const workout = await Workout.findById(id);

        if (!workout) res.status(404).json({ error: "No workout found" });
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ error: "Could not find a workout" });
    }
};

//Create New workout
const createNewWorkout = async (req, res) => {
    const {
        title,
        runType,
        date,
        distance,
        pace,
        rating,
        pre,
        duration,
        note,
    } = req.body;

    try {
        const workout = await Workout.create({
            title,
            runType,
            date,
            distance,
            pace,
            rating,
            pre,
            duration,
            note,
        });
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//Delete workout
const deleteWorkout = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id))
            res.status(404).json({ error: "Invalid ID" });
        const workout = await Workout.findOneAndDelete({ _id: id });

        if (!workout) res.status(404).json({ error: "No workout found" });
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//Update workout
const updateWorkout = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id))
            res.status(404).json({ error: "Invalid ID" });
        const workout = await Workout.findOneAndUpdate(
            { _id: id },
            { ...req.body },
            { new: true }
        );

        if (!workout) res.status(404).json({ error: "No workout found" });
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const recommendWorkout = async (req, res) => {
    try {
        var recommendedRuns = [];
        var json;
        const python = spawn("python", ["main.py", 11]);
        var workouts;
        python.stdout.on("data", (data) => {

            json = data.toString();
            recommendedRuns.push(JSON.parse(json));
            console.log(recommendedRuns[0].title);

            workouts = Workout.create({
                title: recommendedRuns[0].title,
                runType: recommendedRuns[0].runType,
                distance: recommendedRuns[0].distance,
                pace: recommendedRuns[0].pace,
                rating: recommendedRuns[0].rating,
                pre: recommendedRuns[0].pre,
                duration: recommendedRuns[0].duration,
                note: recommendedRuns[0].notes,
            });
        });

        python.stderr.on("data", (data) => {
            console.error("err: ", data.toString());
        });

        python.on("close", (code) => {
            console.log("child process exited with code ", code);
        });

        res.status(200).json(workouts);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createNewWorkout,
    getSingleWorkout,
    getAllWorkouts,
    deleteWorkout,
    updateWorkout,
    recommendWorkout,
};
