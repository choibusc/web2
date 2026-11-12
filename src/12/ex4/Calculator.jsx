import React, { useState } from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";
import "./Calculator.css";

function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function Calculator() {
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("c");

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale("c");
    };

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale("f");
    };

    const handleReset = () => {
        setTemperature("");
        setScale("c");
    };

    const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    // 게이지 바 퍼센트 계산 (0°C ~ 100°C 기준)
    const parsedCelsius = parseFloat(celsius);
    const progress = Number.isNaN(parsedCelsius)
        ? 0
        : Math.min(Math.max(parsedCelsius, 0), 100);

    return (
        <div className="app-wrapper">
            <div className="calculator-card">
                <div className="card-header">
                    <div>
                        <span className="sub-badge">UNIT CONVERTER</span>
                        <h1 className="main-title">스마트 온도 변환기</h1>
                    </div>
                    <button className="reset-btn" onClick={handleReset} title="초기화">
                        초기화
                    </button>
                </div>

                <div className="inputs-container">
                    <TemperatureInput
                        scale="c"
                        temperature={celsius}
                        onTemperatureChange={handleCelsiusChange}
                    />

                    <div className="swap-divider">
                        <span>⇅</span>
                    </div>

                    <TemperatureInput
                        scale="f"
                        temperature={fahrenheit}
                        onTemperatureChange={handleFahrenheitChange}
                    />
                </div>

                {/* 온도 게이지 바 */}
                <div className="gauge-section">
                    <div className="gauge-labels">
                        <span>어는점 (0°C)</span>
                        <span>끓는점 (100°C)</span>
                    </div>
                    <div className="gauge-track">
                        <div
                            className={`gauge-fill ${parsedCelsius >= 100 ? "hot" : ""}`}
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>

                <BoilingVerdict celsius={parsedCelsius} />
            </div>
        </div>
    );
}

export default Calculator;