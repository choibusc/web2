import React from 'react';
import './EventDetail.css';

const EventDetail = ({ event, onBack }) => {
    return (
        <div className="event-detail-wrap">
            {/* 상단 뒤로가기 및 이벤트 요약 헤더 */}
            <div className="detail-top-bar">
                <button type="button" className="btn-back" onClick={onBack}>
                    ← 목록으로 돌아가기
                </button>
            </div>

            <div className="detail-header">
                <p className="detail-meta">
                    <span>{event.tag}</span> | <span>{event.branch}</span>
                </p>
                <h2 className="detail-title">{event.title}</h2>
                <p className="detail-info">
                    {event.date} · {event.location}
                </p>
            </div>

            {/* 상품 리스트 섹션 */}
            <div className="product-list-header">
                <h3>행사 참여 상품 ({event.products ? event.products.length : 0})</h3>
            </div>

            {event.products && event.products.length > 0 ? (
                <div className="product-grid">
                    {event.products.map((prod) => (
                        <div key={prod.id} className="product-card">
                            <div className="product-thumb">
                                <img src={prod.imageUrl} alt={prod.name} />
                                {prod.discount && (
                                    <span className="discount-badge">{prod.discount}</span>
                                )}
                            </div>
                            <div className="product-info">
                                <p className="product-brand">{prod.brand}</p>
                                <h4 className="product-name">{prod.name}</h4>
                                <div className="product-price-box">
                                    {prod.originalPrice && (
                                        <span className="original-price">{prod.originalPrice}원</span>
                                    )}
                                    <span className="sale-price">{prod.salePrice}원</span>
                                </div>
                                <p className="product-floor">{prod.floor}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="empty-products">
                    현재 등록된 온라인 미리보기 상품이 없습니다. 매장을 방문해 주세요.
                </div>
            )}
        </div>
    );
};

export default EventDetail;