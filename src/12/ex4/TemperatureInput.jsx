import React from "react";

const scaleNames = {
    c: "섭씨 (Celsius)",
    f: "화씨 (Fahrenheit)"
};

const scaleUnits = {
    c: "°C",
    f: "°F"
};

function TemperatureInput(props) {
    const handleChange = (event) => {
        props.onTemperatureChange(event.target.value);
    };

    return (
        <div className="input-card">
            <div className="input-header">
                <span className="scale-label">{scaleNames[props.scale]}</span>
                <span className="scale-badge">{props.scale.toUpperCase()}</span>
            </div>
            <div className="input-wrapper">
                <input
                    type="text"
                    placeholder="0"
                    value={props.temperature}
                    onChange={handleChange}
                />
                <span className="unit-symbol">{scaleUnits[props.scale]}</span>
            </div>
        </div>
    );
}

export default TemperatureInput;