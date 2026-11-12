import React from "react";

function BoilingVerdict(props) {
    const isBoiling = props.celsius >= 100;
    const isEmpty = Number.isNaN(props.celsius);

    if (isEmpty) {
        return (
            <div className="verdict-box neutral">
                <span className="verdict-icon">🌡️</span>
                <span>온도를 입력하면 끓는점 여부를 알려드립니다</span>
            </div>
        );
    }

    return (
        <div className={`verdict-box ${isBoiling ? "boiling" : "not-boiling"}`}>
            <span className="verdict-icon">{isBoiling ? "🔥" : "💧"}</span>
            <span>{isBoiling ? "물이 끓습니다! (100°C 이상)" : "물이 끓지 않습니다."}</span>
        </div>
    );
}

export default BoilingVerdict;