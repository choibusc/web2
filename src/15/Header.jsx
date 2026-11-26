import React from 'react';
import './Header.css';

const Header = () => {
    const navItems = [
        { name: '점포 안내', active: false },
        { name: '쇼핑 정보', active: true },
        { name: '신세계 브랜드', active: false },
        { name: '아트&컬처', active: false },
        { name: '매거진', active: false },
        { name: '고객 서비스', active: false },
        { name: 'ESG 경영', active: false },
    ];

    return (
        <header className="shinsegae-header">
            {/* 최상단 유틸리티 바 */}
            <div className="top-util-bar">
                <div className="util-inner">
                    <div className="lang-select">
                        <span className="active">KR</span>
                        <span>EN</span>
                        <span>CN</span>
                    </div>
                    <span className="divider">|</span>
                    <a href="#ssg" className="ssg-link">SSG.COM</a>
                </div>
            </div>

            {/* 메인 네비게이션 */}
            <div className="main-nav-wrap">
                <div className="main-nav-inner">
                    <h1 className="logo">
                        <a href="/">SHINSEGAE</a>
                    </h1>

                    <nav className="gnb">
                        <ul>
                            {navItems.map((item, idx) => (
                                <li key={idx} className={item.active ? 'active' : ''}>
                                    <a href={`#${item.name}`}>{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="user-actions">
                        <button type="button" className="btn-login">
                            <span className="icon-user">👤</span> 로그인
                        </button>
                        <button type="button" className="btn-search" aria-label="검색">
                            🔍
                        </button>
                    </div>
                </div>
            </div>

            {/* 우측 상단 경로 (Breadcrumb) */}
            <div className="breadcrumb-wrap">
                <div className="breadcrumb-inner">
                    <span>HOME</span>
                    <span className="slash">/</span>
                    <span className="current">쇼핑 정보</span>
                </div>
            </div>
        </header>
    );
};

export default Header;