import React from "react";

class MyButton extends React.Component {
    handleClick() {
        console.log('this is: ', this);
    }

    render() {
        return(
            <button onClick={() => this.handleClick()}>
                Click Here~
            </button>
        );
    }
}

export default MyButton;