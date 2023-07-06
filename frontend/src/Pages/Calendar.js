import * as React from "react";
import { useState, useEffect } from "react";
import "../index.css";
import WorkoutCard from "../Components/WorkoutCard";
import Grid from "@mui/material/Unstable_Grid2";
import AddWorkout from "../Components/AddWorkout";
import DeleteWorkout from "../Components/DeleteWorkout";
import { useRunContext } from "../Hooks/UseRunContext";


const Calendar = () => {
  // const [workouts, setWorkouts] = useState(null);
  const {workouts, dispatch} = useRunContext()

  useEffect(() => {
    const getWorkout = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload:json})
      }
    };

    getWorkout();
  }, [dispatch]);

  return (
    <div>
      <div className="workouts">
        <AddWorkout />
        <Grid container direction='row' spacing={4}>
            {workouts && workouts.map((workout) => (
                <Grid xs={12} sm={2} key={workout._id} >
                    <WorkoutCard workout={workout} key={workout._id} />
                </Grid>
                ))}
        </Grid>
      </div>
    </div>
  );
};

export default Calendar;


