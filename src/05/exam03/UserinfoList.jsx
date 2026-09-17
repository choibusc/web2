import React from "react";
import UserInfo from "./Userinfo";
import "./UserinfoList.css";

const users = [
    {
        name: "Jang Wonyoung",
        avatarUrl: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_1280.png",
        comment: "Positive mindset, lucky vibe~"
    },
    {
        name: "Ahn Yujin",
        avatarUrl: "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png",
        comment: "I think like me~!"
    },
    {
        name: "Park Liz",
        avatarUrl: "https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_1280.png",
        comment: "Sleeping is the best ~~~~~~~~"
    }
];

function UserInfoList() {
    const currentDate = new Date();
    return(
        <div>
            {
                users.map((user, index) => {
                    return(
                        <div key={index} className={"comment"}>
                            <UserInfo user={user}/>
                            <div className={"comment-text"}>
                                {user.comment}
                            </div>
                            <div className={"comment-date"}>
                                {currentDate.toDateString()}
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default UserInfoList;