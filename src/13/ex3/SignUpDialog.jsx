import React, { useState } from 'react';
import FancyBorder from "./FancyBorder";

function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <div className="Hud-header">
                <span className="Hud-dot"></span>
                <span>NASA // MARS EXPLORATION PROGRAM</span>
                <span className="Hud-code">SYS-01</span>
            </div>
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
            <div className="Dialog-children">
                {props.children}
            </div>
        </FancyBorder>
    );
}

function SignUpDialog() {
    const [nickname, setNickname] = useState('');

    const handleChange = (event) => {
        setNickname(event.target.value);
    };

    const handleSignUp = () => {
        alert(`어서 오세요, ${nickname}님!`);
    };

    return (
        <div className="Dialog-wrapper">
            <Dialog
                title="화성 탐사 프로그램"
                message="닉네임을 입력해 주세요.">
                <input
                    className="Dialog-input"
                    placeholder="CREW CALLSIGN..."
                    value={nickname}
                    onChange={handleChange}
                />
                <button
                    className="Dialog-button"
                    onClick={handleSignUp}>
                    가입하기
                </button>
            </Dialog>
        </div>
    );
}

export default SignUpDialog;