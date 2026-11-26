import React, { useState } from 'react';
import './SidebarFilter.css';

const SidebarFilter = ({ selectedBranch, setSelectedBranch, selectedCategory, setSelectedCategory }) => {
    const [isBranchOpen, setIsBranchOpen] = useState(false);
    const [isCategoryOpen, setIsCategoryOpen] = useState(true);

    const branches = ['강남점', '본점', '센텀시티', '대구신세계', '대전신세계 Art & Science'];
    const categories = ['전체', '테마', '쇼핑뉴스', '이벤트/사은행사'];

    return (
        <aside className="sidebar-filter">
            {/* 지점 선택 아코디언/드롭다운 */}
            <div className="filter-box">
                <button
                    type="button"
                    className="filter-header"
                    onClick={() => setIsBranchOpen(!isBranchOpen)}
                >
                    <span>{selectedBranch}</span>
                    <span className={`arrow ${isBranchOpen ? 'up' : 'down'}`}>⌄</span>
                </button>
                {isBranchOpen && (
                    <ul className="filter-list">
                        {branches.map((branch) => (
                            <li
                                key={branch}
                                className={selectedBranch === branch ? 'active' : ''}
                                onClick={() => {
                                    setSelectedBranch(branch);
                                    setIsBranchOpen(false);
                                }}
                            >
                                {branch}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* 구분(카테고리) 아코디언 */}
            <div className="filter-box">
                <button
                    type="button"
                    className="filter-header"
                    onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                >
                    <span>구분</span>
                    <span className={`arrow ${isCategoryOpen ? 'up' : 'down'}`}>⌃</span>
                </button>
                {isCategoryOpen && (
                    <ul className="filter-list">
                        {categories.map((cat) => (
                            <li
                                key={cat}
                                className={selectedCategory === cat ? 'active' : ''}
                                onClick={() => setSelectedCategory(cat)}
                            >
                                {cat}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </aside>
    );
};

export default SidebarFilter;