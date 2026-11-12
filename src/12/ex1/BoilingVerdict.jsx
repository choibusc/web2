import React, { useState } from 'react';

// 1. 자식 컴포넌트 (BoilingVerdict)
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p style={{ color: '#ef4444', fontWeight: 'bold' }}>🔥 물이 끓습니다.</p>;
    }
    return <p style={{ color: '#3b82f6' }}>💧 물이 끓지 않습니다.</p>;
}

// 2. 부모 컴포넌트 (Calculator)
function Calculator() {
    const [temperature, setTemperature] = useState('');

    const handleChange = (event) => {
        setTemperature(event.target.value);
    };

    return (
        <fieldset style={{
            padding: '20px',
            borderRadius: '12px',
            border: '2px solid #e2e8f0',
            maxWidth: '320px',
            fontFamily: 'sans-serif'
        }}>
            <legend style={{ padding: '0 8px', fontWeight: 'bold', color: '#334155' }}>
                섭씨 온도를 입력하세요:
            </legend>

            <input
                type="number"
                value={temperature}
                onChange={handleChange}
                placeholder="예: 100"
                style={{
                    width: '100%',
                    padding: '10px',
                    fontSize: '16px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    boxSizing: 'border-box',
                    marginTop: '8px',
                    marginBottom: '12px'
                }}
            />

            <BoilingVerdict celsius={parseFloat(temperature)} />
        </fieldset>
    );
}

// 3. 화면에 띄울 메인 컴포넌트
export default function App() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
            <Calculator />
        </div>
    );
}