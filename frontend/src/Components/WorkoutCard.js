import * as React from "react";
import { Card, CardContent, CardActions, Typography } from "@mui/material";
import DeleteWorkout from "./DeleteWorkout";
import EditWorkoutDialog from "./EditWorkoutDialog";
var cardStyle = {
    display: "block",
    width: "15vw",
    transitionDuration: "0.3s",
    height: "17vw",
    spacing: 10,
};

const WorkoutCard = ({ workout }) => {
    return (
        <div>
            <Card sx={{ minWidth: 150 }} style={cardStyle}>
                <CardContent>
                    <Typography
                        sx={{ fontSize: 20 }}
                        color="black"
                        variant="h1"
                        align="center"
                        gutterBottom
                    >
                        {workout.title}
                    </Typography>
                    <Typography variant="h5" component="div" align="center">
                        {workout.date}
                    </Typography>
                    <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                        align="center"
                    ></Typography>
                    <Typography variant="body2" align="center">
                        Type: {workout.runType}
                        <br />
                        Pace: {workout.pace} per mile
                        <br />
                        Distance: {workout.distance} mi
                        <br />
                        Duration: {workout.duration} min
                        <br />
                        Rating: {workout.rating}
                        <br />
                        PRE: {workout.pre}
                        <br />
                        Notes: {workout.note}
                    </Typography>
                </CardContent>
                <CardActions>
                    <EditWorkoutDialog workout={workout} key={workout._id} />
                    <DeleteWorkout workout={workout} key={workout._id} />
                </CardActions>
            </Card>
        </div>
    );
};

export default WorkoutCard;
