import React, { useState } from 'react';
import Header from './Header';
import SidebarFilter from './SidebarFilter';
import ShoppingCard from './ShoppingCard';
import EventDetail from './EventDetail';
import './App.css';

const MOCK_EVENTS = [
    {
        id: 1,
        category: '테마',
        tag: 'SEASON OFF',
        branch: '강남점',
        title: 'SEASON OFF',
        bannerText: 'SEASON OFF',
        date: '26.11.12(목) - 26.11.29(일)',
        location: '각 층 본매장',
        imageUrl: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=80',
        // SEASON OFF 클릭 시 보여줄 상품 목록
        products: [
            {
                id: 101,
                brand: 'MAX MARA',
                name: '마누엘라 아이콘 캐시미어 코트',
                discount: '30%',
                originalPrice: '4,280,000',
                salePrice: '2,996,000',
                floor: '강남점 3층 본매장',
                imageUrl: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=500&q=80',
            },
            {
                id: 102,
                brand: 'TIME',
                name: '핸드메이드 울 블렌드 벨티드 코트',
                discount: '20%',
                originalPrice: '1,350,000',
                salePrice: '1,080,000',
                floor: '강남점 4층 본매장',
                imageUrl: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=500&q=80',
            },
            {
                id: 103,
                brand: 'MAISON KITSUNE',
                name: '폭스 헤드 패치 울 가디건',
                discount: '30%',
                originalPrice: '535,000',
                salePrice: '374,500',
                floor: '강남점 5층 본매장',
                imageUrl: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=500&q=80',
            },
            {
                id: 104,
                brand: 'AMI',
                name: '아미 드 쾨르 오버사이즈 스웨터',
                discount: '30%',
                originalPrice: '690,000',
                salePrice: '483,000',
                floor: '강남점 6층 본매장',
                imageUrl: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=500&q=80',
            },
            {
                id: 105,
                brand: 'THEORY',
                name: '클린 울 테일러드 블레이저',
                discount: '30%',
                originalPrice: '890,000',
                salePrice: '623,000',
                floor: '강남점 4층 본매장',
                imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=500&q=80',
            },
            {
                id: 106,
                brand: 'ACNE STUDIOS',
                name: '프린지 울 머플러 스카프',
                discount: '20%',
                originalPrice: '380,000',
                salePrice: '304,000',
                floor: '강남점 3층 본매장',
                imageUrl: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=500&q=80',
            },
            {
                id: 107,
                brand: 'SANDRO',
                name: '트위드 배색 니트 가디건',
                discount: '30%',
                originalPrice: '559,000',
                salePrice: '391,300',
                floor: '강남점 4층 본매장',
                imageUrl: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&w=500&q=80',
            },
            {
                id: 108,
                brand: 'POLO RALPH LAUREN',
                name: '케이블 니트 크루넥 스웨터',
                discount: '30%',
                originalPrice: '299,000',
                salePrice: '209,300',
                floor: '강남점 5층 본매장',
                imageUrl: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=500&q=80',
            },
        ],
    },
    {
        id: 2,
        category: '테마',
        tag: 'SALE',
        branch: '강남점',
        title: 'SALE',
        bannerText: 'SALE',
        date: '26.11.12(목) - 26.11.29(일)',
        location: '각 층 본매장',
        imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80',
        products: [],
    },
    {
        id: 3,
        category: '테마',
        tag: 'OPEN STAGE',
        branch: '강남점',
        title: '디올 진저브레드 하우스',
        bannerText: '',
        date: '26.11.20(금) - 26.12.01(화)',
        location: '센트럴 1층 오픈 스테이지&스토어',
        imageUrl: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=600&q=80',
        products: [],
    },
];

function App() {
    const [selectedBranch, setSelectedBranch] = useState('강남점');
    const [selectedCategory, setSelectedCategory] = useState('테마');
    const [gridCols, setGridCols] = useState(3);
    const [selectedEvent, setSelectedEvent] = useState(null); // 선택된 이벤트 카드 상태

    // 사이드바 필터 변경 시 상세 화면 닫고 목록으로 복귀
    const handleBranchChange = (branch) => {
        setSelectedBranch(branch);
        setSelectedEvent(null);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setSelectedEvent(null);
    };

    const filteredEvents = MOCK_EVENTS.filter((item) => {
        const branchMatch = item.branch === selectedBranch;
        const categoryMatch = selectedCategory === '전체' || item.category === selectedCategory;
        return branchMatch && categoryMatch;
    });

    return (
        <div className="app-wrapper">
            <Header />

            <main className="shopping-main-container">
                <div className="page-title-area">
                    <h2>쇼핑 정보</h2>
                </div>

                {/* 상세 페이지가 아닐 때만 정렬 방식 컨트롤 바 노출 */}
                {!selectedEvent && (
                    <div className="list-toolbar">
                        <span className="sort-label">정렬방식</span>
                        <div className="view-toggles">
                            <button
                                type="button"
                                className={`toggle-btn ${gridCols === 3 ? 'active' : ''}`}
                                onClick={() => setGridCols(3)}
                            >
                                III
                            </button>
                            <button
                                type="button"
                                className={`toggle-btn ${gridCols === 2 ? 'active' : ''}`}
                                onClick={() => setGridCols(2)}
                            >
                                II
                            </button>
                        </div>
                    </div>
                )}

                <div className="content-layout">
                    <SidebarFilter
                        selectedBranch={selectedBranch}
                        setSelectedBranch={handleBranchChange}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={handleCategoryChange}
                    />

                    <section className="card-list-section">
                        {/* 선택된 이벤트가 있으면 상세 상품 목록을, 없으면 이벤트 카드 그리드를 표시 */}
                        {selectedEvent ? (
                            <EventDetail
                                event={selectedEvent}
                                onBack={() => setSelectedEvent(null)}
                            />
                        ) : filteredEvents.length > 0 ? (
                            <div className={`card-grid cols-${gridCols}`}>
                                {filteredEvents.map((item) => (
                                    <ShoppingCard
                                        key={item.id}
                                        item={item}
                                        onSelect={(clickedItem) => setSelectedEvent(clickedItem)}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="empty-state">
                                선택하신 조건에 해당하는 쇼핑 정보가 없습니다.
                            </div>
                        )}
                    </section>
                </div>
            </main>
        </div>
    );
}

export default App;