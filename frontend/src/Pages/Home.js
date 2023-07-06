//import { useState } from 'react';
// import example from './image/CIS598mainpage.jpg';\
import React from 'react';
import { Link } from'react-router-dom';

const Home = () => {

    return (
        <div class="home-text">
            <h2 id="content1">Build you next training</h2>
            <h2 id="content2">Plan with Buildy</h2>
            <div class="home-description-text">
                <h1>Easily build your training plan with Buildy, new running plan builder </h1>
                <h1 id="middle-text">that utilizes machine learning to recommend potential workout </h1>
                <h1 id="bottom-text">that fits within your training block and your liking</h1>
            </div>
            <Link id="plan-button-text" to="/calendar">Plan Now!</Link>
            {/* <Button id="plan-button-text" to="/calendar">Plan Now!</Button> */}
            {/* <img src={example} alt="example" /> */}
        </div>
    )
}

export default Home;