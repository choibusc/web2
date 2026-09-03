import React from "react";

function Clock() {
    return(
        <div className={"clock-container"}>
            <h1>인공지능소프트웨어과</h1>
            <h2>현재 시각은 {new Date().toLocaleTimeString()}입니다</h2>
        </div>
    );
}

export default Clock;