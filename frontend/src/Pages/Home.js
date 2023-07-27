import React from "react";
import { Link as RouterLink } from 'react-router-dom';
import Button from "@mui/material/Button";

const Home = () => {
    return (
        <div class="home-text">
            <h2 id="content1">Build you next training</h2>
            <h2 id="content2">Plan with Buildy</h2>
            <div class="home-description-text">
                <h1>
                    Easily build your training plan with Buildy, new running
                    plan builder{" "}
                </h1>
                <h1 id="middle-text">
                    that utilizes machine learning to recommend potential
                    workout{" "}
                </h1>
                <h1 id="bottom-text">
                    that fits within your training block and your liking
                </h1>
            </div>
            <Button id="plan-button-text" component={RouterLink} to="/calendar">
                Plan Now!
            </Button>
        </div>
    );
};

export default Home;
