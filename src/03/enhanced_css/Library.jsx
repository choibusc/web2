import React from "react";
import Book from "./Book";

function Library(props) {
    return(
        <div className="Library-container">
            <Book name="처음 만난 파이썬" numOfPage={300} imgUrl/>
            <Book name="난생 처음 AWS" numOfPage={400} imgUrl/>
            <Book name="처음 보는 리액트" numOfPage={500} imgUrl/>

            <Book name="난생 처음 자바스크립트" numOfPage={250} imgUrl/>
            <Book name="처음 보는 HTML/CSS" numOfPage={180} imgUrl/>
        </div>
    );
}

export default Library;