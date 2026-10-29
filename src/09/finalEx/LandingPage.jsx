import React, {useState} from "react";

function LandingPage(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginClick = () => {
        setIsLoggedIn(true);
    }
    const logoutClick = () =>{
        setIsLoggedIn(false);
    }

    return (
        <div>
            <Toolbar isLoggedIn={isLoggedIn} loginClick={loginClick} logoutClick={logoutClick} />
            <div>
                9장 조건부 렌더링 실습 화면입니다.
                <img src="./Ferrari.png" width={200}/>
            </div>
        </div>
    );
}

export default LandingPage;