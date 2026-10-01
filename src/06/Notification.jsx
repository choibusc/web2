import React from "react";
import "./Notification.css";

// 클래스명 오타 수정 (NOtification -> Notification)
class Notification extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // className 속성 추가
            <div className="wrapper">
                <span className="message-text">
                    {this.props.message}
                </span>
            </div>
        );
    }

    componentDidMount() {
        console.log(`${this.props.id}: componentDidMount called`);
    }

    componentDidUpdate() {
        console.log(`${this.props.id}: componentDidUpdate called`);
    }

    componentWillUnmount() {
        console.log(`${this.props.id}: componentWillUnmount called`);
    }
}

export default Notification;