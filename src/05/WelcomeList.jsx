import React from "react";
import Welcome from "./Welcome";
import "./Welcome.css";

function WelcomList() {
    return (
        <div className="welcome-container">
            <Welcome name="김인공"/><br/>
            <Welcome name="박폴리"/><br/>
            <Welcome name="이정수"/><br/>
        </div>
    );
}

export default WelcomList;