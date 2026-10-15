import React, { useState } from "react";

function MessageSender() {
    const [text, setText] = useState("");

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`전송된 메시지: ${text}`);
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>메시지 전송기</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={text}
                    onChange={handleChange}
                />
                <button type="submit">전송</button>
            </form>
            <p style={{ marginTop: "15px" }}>
                미리보기: {text}
            </p>
        </div>
    );
}

export default MessageSender;