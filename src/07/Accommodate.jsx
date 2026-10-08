import React, {useEffect, useState} from "react";
import useCounter from "./useCounter";
import "./Accommodate.css";

const MAX_CAPACITY = 10;

function Accommodate() {
    const [count, increaseCount, decreaseCount] = useCounter(0);
    const [isFull, setIsFull]= useState(false);

    useEffect(() => {
        console.log("========== useEffect 확인용 ==========");
        console.log("useEffect 실행됨: 컴포넌트가 마운트될때, 업데이트될때");
        console.log(`isFull: ${isFull}`);
    });

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]);

    return(
        <div className={"accommodate-container"}>
            <p className={"count-text"}>{`현재 총 ${count}명 수용중입니다.`}</p>
            <div className={"button-group"}>
                <button onClick={increaseCount} className={"btn btn-enter"} disabled={isFull}>수용시설에 입장</button>
                <button onClick={decreaseCount} className={"btn btn-exit"}>수용시설에서 퇴장</button>
            </div>
            {isFull && <p className={"full-warning"}>수용시설에 정원이 가득 찼습니다.</p>}
        </div>
    );
}

export default Accommodate;