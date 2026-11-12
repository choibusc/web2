import React from "react";

const scaleNames = {
    km: "킬로미터 (Kilometer)",
    mi: "마일 (Mile)"
};

const scaleUnits = {
    km: "km",
    mi: "mi"
};

function DistanceInput(props) {
    const handleChange = (event) => {
        props.onDistanceChange(event.target.value);
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
                    value={props.distance}
                    onChange={handleChange}
                />
                <span className="unit-symbol">{scaleUnits[props.scale]}</span>
            </div>
        </div>
    );
}

export default DistanceInput;