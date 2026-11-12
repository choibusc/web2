import React, { useState } from 'react';
import BoilingVerdict from './BoilingVerdict';
import './Calculator.css';

function Calculator() {
    const [temperature, setTemperature] = useState('');

    const handleChange = (event) => {
        setTemperature(event.target.value);
    };

    return (
        <div className="calculator-container">
            <fieldset className="calculator-card">
                <legend className="card-title">섭씨 온도를 입력하세요</legend>
                <div className="input-group">
                    <input
                        type="number"
                        className="temp-input"
                        value={temperature}
                        onChange={handleChange}
                        placeholder="예: 100"
                    />
                    <span className="unit">°C</span>
                </div>
                <BoilingVerdict celsius={parseFloat(temperature)} />
            </fieldset>
        </div>
    );
}

export default Calculator;