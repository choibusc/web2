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
                <span className="verdict-icon">🗺️</span>
                <span>거리를 입력하면 실제 장소로 비유해 드립니다</span>
            </div>
        );
    }

    let statusClass = "step-1";
    let icon = "🏫";
    let message = "학교 운동장 트랙(400m)을 한두 바퀴 도는 거리입니다.";

    if (kilometers >= 40000) {
        statusClass = "step-10";
        icon = "🌍";
        message = "지구 둘레(약 40,075km)를 한 바퀴 도는 어마어마한 거리입니다!";
    } else if (kilometers >= 1000) {
        statusClass = "step-9";
        icon = "✈️";
        message = "서울에서 도쿄(약 1,150km)까지 비행기로 가는 거리입니다.";
    } else if (kilometers >= 450) {
        statusClass = "step-8";
        icon = "🏝️";
        message = "서울에서 제주도(약 450km)까지 직선으로 이동하는 거리입니다.";
    } else if (kilometers >= 325) {
        statusClass = "step-7";
        icon = "🚄";
        message = "서울에서 부산(약 325km)까지 KTX로 달리는 거리입니다.";
    } else if (kilometers >= 140) {
        statusClass = "step-6";
        icon = "🚗";
        message = "서울에서 대전(약 140km)까지 고속도로를 달리는 거리입니다.";
    } else if (kilometers >= 60) {
        statusClass = "step-5";
        icon = "🏔️";
        message = "서울에서 춘천(약 75km)까지 당일치기 드라이브 거리입니다.";
    } else if (kilometers >= 30) {
        statusClass = "step-4";
        icon = "🚇";
        message = "서울에서 인천(약 30km)까지 지하철로 이동하는 거리입니다.";
    } else if (kilometers >= 10) {
        statusClass = "step-3";
        icon = "🌉";
        message = "여의도에서 잠실(약 15km)까지 한강변을 따라가는 거리입니다.";
    } else if (kilometers >= 1) {
        statusClass = "step-2";
        icon = "🚶";
        message = "지하철 1~2정거장(약 1~3km)을 가볍게 걷는 거리입니다.";
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

    // 게이지 바 계산 (서울 0km ~ 부산 325km 기준)
    const parsedKm = parseFloat(kilometers);
    const progress = Number.isNaN(parsedKm)
        ? 0
        : Math.min(Math.max((parsedKm / 325) * 100, 0), 100);

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

                {/* 서울 ~ 부산 게이지 바 */}
                <div className="gauge-section">
                    <div className="gauge-labels">
                        <span>서울 (0km)</span>
                        <span>대전 (140km)</span>
                        <span>부산 (325km)</span>
                    </div>
                    <div className="gauge-track">
                        <div
                            className={`gauge-fill ${parsedKm >= 325 ? "completed" : ""}`}
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