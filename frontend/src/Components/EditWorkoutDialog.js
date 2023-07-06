import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { Box, Typography } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import BuildIcon from "@mui/icons-material/Build";
import { useRunContext } from "../Hooks/UseRunContext";
import TextField from "@mui/material/TextField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { InputAdornment } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Rating from "@mui/material/Rating";
import Slider from "@mui/material/Slider";

const marks = [
    {
        value: 0,
        label: "0",
    },
    {
        value: 1,
        label: "1",
    },
    {
        value: 2,
        label: "2",
    },
    {
        value: 3,
        label: "3",
    },
    {
        value: 4,
        label: "4",
    },
    {
        value: 5,
        label: "5",
    },
    {
        value: 6,
        label: "6",
    },
    {
        value: 7,
        label: "7",
    },
    {
        value: 8,
        label: "8",
    },
    {
        value: 9,
        label: "9",
    },
    {
        value: 10,
        label: "10",
    },
];

function valuetext(value) {
    return `${value}`;
}

export default function EditWorkoutDialog ({ workout }){
    const { dispatch } = useRunContext();
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState(workout.title);
    const [runType, setType] = React.useState(workout.runType);
    const [date, setDate] = React.useState(workout.date);
    const [pace, setPace] = React.useState(workout.pace);
    const [distance, setDistance] = React.useState(workout.distance);
    const [duration, setDuration] = React.useState(workout.duration);
    const [note, setNote] = React.useState(workout.note);
    const [rating, setRating] = React.useState(workout.rating);
    const [pre, setPre] = React.useState(workout.pre);
   

    const handleSubmit = async () => {

        const response = await fetch("/api/workouts/" + workout._id, {
            method: "PATCH",
            body: JSON.stringify({
                title: title,
                type: runType,
                date: date,
                pace: pace,
                distance: distance,
                duration: duration,
                note: note,
                rating: rating,
                pre: pre
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await response.json();

        if (!response.ok) {
            console.log("Error Updating workout", json);
        }
        if (response.ok) {
            // setTitle("");
            // setType("");
            // setDate(new Date());
            // setPace(0);
            // setDistance(0);
            // setDuration(0);
            // setNote("");
            // setRating(0);
            // setPre(0);
            dispatch({ type: "PATCH_WORKOUT", payload: json });
            setOpen(false);
        }
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Edit Workout
            </Button>
            <Dialog open={open} onClose={handleClose} fullWidth>
                <DialogTitle>Edit Workout</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter your workout details here to be Updated
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Title"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <FormControl>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={["DatePicker"]}>
                                <DatePicker
                                    align="center"
                                    label="Date"
                                    inputFormat="MM/dd/YYYY"
                                    format="MM/DD/YYYY"
                                    // value={date}
                                    // onChange={(newValue) => setDate(newValue)}
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                    </FormControl>

                    <FormControl sx={{ m: 1, width: "30ch" }}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="runType"
                            label="Type of Run"
                            type="text"
                            variant="standard"
                            value={runType}
                            onChange={(e) => setType(e.target.value)}
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: "25ch" }}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="distance"
                            label="Distance"
                            type="number"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="start">
                                        mi
                                    </InputAdornment>
                                ),
                            }}
                            variant="standard"
                            value={distance}
                            onChange={(e) => setDistance(e.target.value)}
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: "25ch" }}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="pace"
                            label="Pace"
                            type="text"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="start">
                                        per mile
                                    </InputAdornment>
                                ),
                            }}
                            variant="standard"
                            value={pace}
                            onChange={(e) => setPace(e.target.value)}
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: "25ch" }}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="duration"
                            label="Duration"
                            type="duration"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="start">
                                        min
                                    </InputAdornment>
                                ),
                            }}
                            variant="standard"
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: "25ch" }}>
                        <Box sx={{ width: 230 }}>
                            <Typography id="input-slider" gutterBottom>
                                Perceived Exherstion
                            </Typography>
                            <Slider
                                aria-label="Custom marks"
                                defaultValue={0}
                                max={10}
                                getAriaValueText={valuetext}
                                step={1}
                                valueLabelDisplay="auto"
                                marks={marks}
                                value={pre}
                                onChange={(event, newValue) => {
                                    setPre(newValue);
                                }}
                            />
                        </Box>
                    </FormControl>
                    <FormControl sx={{ m: 1, width: "25ch" }}>
                        <Box sx={{ width: 230 }}>
                            <Typography component="legend">
                                No rating given
                            </Typography>
                            <Rating
                                name="no-value"
                                value={rating}
                                onChange={(event, newValue) => {
                                    setRating(newValue);
                                }}
                            />
                        </Box>
                    </FormControl>
                    <TextField
                        id="notes"
                        label="Notes"
                        type="text"
                        placeholder="Notes"
                        multiline
                        variant="standard"
                        fullWidth
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit} type="submit">
                        Update
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

