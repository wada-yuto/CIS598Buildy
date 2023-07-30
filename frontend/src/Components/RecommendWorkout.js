import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

export default function RecommendWorkout() {
    const [open, setOpen] = React.useState(false);
    const [number, setNumber] = React.useState(0);

    const params = {
        param1: Number(number),
    };

    const options = {
        method: "POST",
        body: JSON.stringify(params),
        headers: {
            "Content-Type": "application/json",
        },
    };

    const handleSubmit = (e) => {
        console.log(typeof number);
        fetch("/api/workouts/recommend", options).then((response) =>
            console.log(response)
        );
    };

    // const handleSubmit = async () => {

    //     const response = await fetch("/api/workouts/recommend", {
    //         method: "PATCH",
    //         body: number,
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     });
    //     const json = await response.json();

    // };

    // useEffect(() => {
    //     // handleSubmit()
    // }, [dispatch]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen} color="error">
                Recommend Workouts
            </Button>

            <Dialog open={open} onClose={handleClose} fullWidth>
                <DialogTitle>Recommended Workouts</DialogTitle>
                <DialogContent>
                    <DialogContentText>Enter the workout ID</DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="Workout ID"
                        label="Workout ID"
                        type="number"
                        fullWidth
                        variant="outlined"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleSubmit}>Add</Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </div>
    );
}
