import React from "react";
import Book from "./Book";
import "./BookList.css";

// 데이터 배열(HashMap, JSON type)
const books = [
    {
        title: "처음 만난 리액트",
        author: "김소플",
        coverImage: "https://image.yes24.com/goods/172506733/XL"
    },
    {
        title: "데이터베이스실습",
        author: "박우창",
        coverImage: "https://image.yes24.com/goods/97538787/XL"
    },
    {
        title: "난생처음자바",
        author: "우재남",
        coverImage: "https://image.yes24.com/goods/119842978/XL"
    },
    {
        title: "데이터베이스실습",
        author: "박우창",
        coverImage: "https://image.yes24.com/goods/97538787/XL"
    },
    {
        title: "난생처음자바",
        author: "우재남",
        coverImage: "https://image.yes24.com/goods/119842978/XL"
    }
]

function BookList() {
    return(
        <div className={"bookListWrapper"}>
            {books.map((book) => {
                return(
                    <Book
                        title={book.title}
                        author={book.author}
                        coverImage={book.coverImage}
                    />
                );
            })}
        </div>
    );
}

export default BookList;