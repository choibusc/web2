import React, {useState} from "react";
import LogOutButton from "../ex2/LogOutButton";
import LogInButton from "../ex2/LogInButton";
import Greeting from "../ex1/Greeting";

function LogInControl2() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logInClickListener = () => {
        setIsLoggedIn(true);
    }

    const logOutClickListener = () => {
        setIsLoggedIn(false);
    }

    let button;

    button = isLoggedIn ? <LogOutButton onClick={logOutClickListener}/> : <LogInButton onClick={logInClickListener}/>;

    return(
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
        </div>
    );

}

export default LogInControl2;