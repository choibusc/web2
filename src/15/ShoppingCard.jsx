import React from 'react';
import './ShoppingCard.css';

const ShoppingCard = ({ item, onSelect }) => {
    return (
        <article className="shopping-card" onClick={() => onSelect(item)}>
            <div className="card-thumb">
                <img src={item.imageUrl} alt={item.title} />
                {item.bannerText && (
                    <div className="banner-overlay">
                        <span>{item.bannerText}</span>
                    </div>
                )}
            </div>
            <div className="card-info">
                <p className="card-meta">
                    <span className="tag">{item.tag}</span>
                    <span className="bar">|</span>
                    <span className="branch">{item.branch}</span>
                </p>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-date">{item.date}</p>
                <p className="card-location">{item.location}</p>
            </div>
        </article>
    );
};

export default ShoppingCard;