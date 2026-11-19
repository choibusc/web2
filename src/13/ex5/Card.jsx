import React, { useState } from "react";
import "./Card.css";

function Card(props) {
    const { title, backgroundColor, image, isGuestFavorite, children } = props;
    const [liked, setLiked] = useState(false);

    const toggleLike = (e) => {
        e.stopPropagation();
        setLiked(!liked);
    };

    return (
        <div
            className="Card"
            style={{
                backgroundColor: backgroundColor || "transparent",
            }}
        >
            <div className="Card-image-wrapper">
                <img src={image} alt={title} className="Card-image" />

                {isGuestFavorite && (
                    <span className="Card-badge">게스트 선호</span>
                )}

                <button
                    className="Card-heart-btn"
                    onClick={toggleLike}
                    aria-label="찜하기"
                >
                    <svg
                        viewBox="0 0 32 32"
                        width="24"
                        height="24"
                        fill={liked ? "#ff385c" : "rgba(0, 0, 0, 0.5)"}
                        stroke="#ffffff"
                        strokeWidth="2"
                    >
                        <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z" />
                    </svg>
                </button>
            </div>

            <div className="Card-body">
                {title && <h3 className="Card-title">{title}</h3>}
                {children}
            </div>
        </div>
    );
}

export default Card;