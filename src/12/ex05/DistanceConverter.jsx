import React, { useState } from "react";
import DistanceInput from "./DistanceInput";
import "./DistanceConverter.css";

function toMiles(km) {
    return km * 0.621371;
}

function toKilometers(miles) {
    return miles / 0.621371;
}

function tryConvert(distance, convert) {
    const input = parseFloat(distance);
    if (Number.isNaN(input)) {
        return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function DistanceVerdict({ kilometers }) {
    if (Number.isNaN(kilometers) || kilometers <= 0) {
        return (
            <div className="verdict-box neutral">
                <span className="verdict-icon">📍</span>
                <span>거리를 입력하면 코스를 안내해 드립니다</span>
            </div>
        );
    }

    let statusClass = "walk";
    let icon = "🚶";
    let message = "가볍게 산책하기 좋은 거리입니다.";

    if (kilometers >= 42.195) {
        statusClass = "marathon";
        icon = "🏆";
        message = "마라톤 풀코스(42.195km) 이상! 대단한 도전입니다!";
    } else if (kilometers >= 21.0975) {
        statusClass = "half";
        icon = "🔥";
        message = "하프 마라톤(21.1km) 완주 수준의 장거리 코스입니다!";
    } else if (kilometers >= 10) {
        statusClass = "ten-k";
        icon = "🏅";
        message = "본격적인 10km 러닝 대회 도전 거리입니다!";
    } else if (kilometers >= 5) {
        statusClass = "jogging";
        icon = "🏃";
        message = "유산소 운동에 딱 좋은 5km 이상 조깅 코스입니다.";
    } else if (kilometers >= 2) {
        statusClass = "light-run";
        icon = "👟";
        message = "몸풀기 러닝이나 빠른 걸음으로 적당한 거리입니다.";
    }

    return (
        <div className={`verdict-box ${statusClass}`}>
            <span className="verdict-icon">{icon}</span>
            <span>{message}</span>
        </div>
    );
}

function DistanceConverter() {
    const [distance, setDistance] = useState("");
    const [scale, setScale] = useState("km");

    const handleKmChange = (distance) => {
        setDistance(distance);
        setScale("km");
    };

    const handleMiChange = (distance) => {
        setDistance(distance);
        setScale("mi");
    };

    const handleReset = () => {
        setDistance("");
        setScale("km");
    };

    const kilometers = scale === "mi" ? tryConvert(distance, toKilometers) : distance;
    const miles = scale === "km" ? tryConvert(distance, toMiles) : distance;

    const parsedKm = parseFloat(kilometers);
    const progress = Number.isNaN(parsedKm)
        ? 0
        : Math.min(Math.max((parsedKm / 42.195) * 100, 0), 100);

    return (
        <div className="app-wrapper">
            <div className="calculator-card">
                <div className="card-header">
                    <div>
                        <span className="sub-badge">DISTANCE CONVERTER</span>
                        <h1 className="main-title">스마트 거리 변환기</h1>
                    </div>
                    <button className="reset-btn" onClick={handleReset} title="초기화">
                        초기화
                    </button>
                </div>

                <div className="inputs-container">
                    <DistanceInput
                        scale="km"
                        distance={kilometers}
                        onDistanceChange={handleKmChange}
                    />

                    <div className="swap-divider">
                        <span>⇄</span>
                    </div>

                    <DistanceInput
                        scale="mi"
                        distance={miles}
                        onDistanceChange={handleMiChange}
                    />
                </div>

                <div className="gauge-section">
                    <div className="gauge-labels">
                        <span>출발 (0km)</span>
                        <span>하프 (21.1km)</span>
                        <span>풀코스 (42.2km)</span>
                    </div>
                    <div className="gauge-track">
                        <div
                            className={`gauge-fill ${parsedKm >= 42.195 ? "completed" : ""}`}
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>

                <DistanceVerdict kilometers={parsedKm} />
            </div>
        </div>
    );
}

export default DistanceConverter;