import React from "react";
import Card from "./Card";

const BUSAN_LISTINGS = [
    {
        id: 1,
        title: "중구의 집",
        date: "1월 15일~17일",
        price: "총액 ₩590,000",
        rating: "5.0",
        isGuestFavorite: false,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 2,
        title: "해운대구의 아파트",
        date: "2월 12일~14일",
        price: "총액 ₩900,000",
        rating: "4.92",
        isGuestFavorite: true,
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 3,
        title: "수영구의 집",
        date: "12월 11일~13일",
        price: "총액 ₩1,110,000",
        rating: "4.98",
        isGuestFavorite: true,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 4,
        title: "동구의 집",
        date: "1월 22일~24일",
        price: "총액 ₩798,000",
        rating: "5.0",
        isGuestFavorite: true,
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 5,
        title: "부산진구의 집",
        date: "2월 19일~21일",
        price: "총액 ₩404,000",
        rating: "4.94",
        isGuestFavorite: true,
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: 6,
        title: "부산의 집",
        date: "1월 22일~24일",
        price: "총액 ₩452,840",
        rating: "5.0",
        isGuestFavorite: true,
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80",
    },
];

function AirbnbCard() {
    return (
        <section className="Airbnb-section">
            <div className="Airbnb-header">
                <h2 className="Airbnb-heading">
                    부산의 인기 숙소
                    <span className="Airbnb-arrow-circle">→</span>
                </h2>
                <div className="Airbnb-nav-buttons">
                    <button className="Airbnb-nav-btn disabled" aria-label="이전">
                        ‹
                    </button>
                    <button className="Airbnb-nav-btn" aria-label="다음">
                        ›
                    </button>
                </div>
            </div>

            <div className="Airbnb-grid">
                {BUSAN_LISTINGS.map((item) => (
                    <Card
                        key={item.id}
                        title={item.title}
                        image={item.image}
                        isGuestFavorite={item.isGuestFavorite}
                    >
                        <p className="Card-date">{item.date}</p>
                        <p className="Card-price-rating">
                            {item.price} · ★ {item.rating}
                        </p>
                    </Card>
                ))}
            </div>
        </section>
    );
}

export default AirbnbCard;