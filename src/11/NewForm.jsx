import React, { useState } from "react";

function NewForm() {
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        alert("입력한 이름: " + value);
        event.preventDefault();
    };

    return (
        <form>
            <label>
                이름: <input type={"text"} onChange={handleChange} />
            </label>
            <br /><br />
            <button type={"submit"} onClick={handleSubmit}>제출</button>
        </form>
    );
}

export default NewForm;