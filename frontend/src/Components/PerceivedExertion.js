import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";
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

export default function DiscreteSliderMarks() {
    return (
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
            />
        </Box>
    );
}
