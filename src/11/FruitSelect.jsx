import React, { useState } from "react";
import "./FruitSelect.css";

function FruitSelect() {
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        alert("입력한 이름: " + value);
        event.preventDefault();
    };

    return (
        <div className="fruit-select-container">
            <form className="fruit-form" onSubmit={handleSubmit}>
                <label className="fruit-label">
                    과일을 선택하세요:
                    <select className="fruit-dropdown" value={value} onChange={handleChange}>
                        <option value={"apple"}>🍎 사과</option>
                        <option value={"banana"}>🍌 바나나</option>
                        <option value={"grapes"}>🍇 포도</option>
                        <option value={"melon"}>🍈 참외</option>
                    </select>
                </label>
                <br /><br />
                <button className="fruit-submit-btn" type={"submit"}>제출</button>
            </form>
        </div>
    );
}

export default FruitSelect;