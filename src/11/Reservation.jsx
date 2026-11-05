import React, { useState } from "react";
import "./Reservation.css";

function Reservation() {
    const [haveBreakfast, setHaveBreakfast] = useState(true);
    const [numberOfGuest, setNumberOfGuest] = useState(1);

    const handleSubmit = (event) => {
        alert(`아침 식사 여부: ${haveBreakfast}, 방문객 수: ${numberOfGuest}명`);
        event.preventDefault();
    };

    return (
        <div className="reservation-container">
            <h2 className="reservation-title">RESERVATION</h2>
            <form className="reservation-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">아침식사 여부</label>
                    <input
                        type={"checkbox"}
                        className="checkbox-input"
                        checked={haveBreakfast}
                        onChange={(event) => setHaveBreakfast(event.target.checked)}
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">방문자 수</label>
                    <input
                        type={"number"}
                        min="1"
                        className="number-input"
                        value={numberOfGuest}
                        onChange={(event) => setNumberOfGuest(event.target.value)}
                    />
                </div>

                <button type={"submit"} className="submit-btn">
                    예약하기
                </button>
            </form>
        </div>
    );
}

export default Reservation;