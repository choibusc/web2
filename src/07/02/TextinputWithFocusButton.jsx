import React, {useRef} from "react";

function TextInputWithFocusButton() {
    const inputElement = useRef(null);

    const onButtonClick = () => {
      inputElement.current.focus();
    };

    return(
        <div>
            <input ref={inputElement} type="text" size={20}/>&nbsp;&nbsp;&nbsp;
            <button onClick={onButtonClick}>Focus the input element</button>
        </div>
    );
}

export default TextInputWithFocusButton;