import { useContext } from "react";
import ThemeContext from "./ThemeContext";

// 100% 확실하게 렌더링되는 실제 포뮬러 1 오픈휠 머신 그래픽 컴포넌트
function F1CarVisual({ isLight }) {
    const primaryColor = isLight ? "#e10600" : "#00d2be"; // 데이: F1 레드 / 나이트: 페트로나스 민트
    const secondaryColor = isLight ? "#15151e" : "#e10600";
    const tireHighlight = isLight ? "#ff2a2a" : "#ffd000"; // 소프트(레드) / 미디엄(옐로우) 타이어 마킹

    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                background: isLight
                    ? "linear-gradient(135deg, #1b1b24 0%, #2d2d3a 100%)"
                    : "linear-gradient(135deg, #07070a 0%, #161622 100%)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "1.4rem",
                boxSizing: "border-box",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* 배경 속도감 라인 */}
            <div
                style={{
                    position: "absolute",
                    top: "22%",
                    left: "-10%",
                    width: "120%",
                    height: "2px",
                    background: `linear-gradient(90deg, transparent, ${primaryColor}, transparent)`,
                    opacity: 0.45,
                }}
            />
            <div
                style={{
                    position: "absolute",
                    bottom: "28%",
                    left: "-10%",
                    width: "120%",
                    height: "1px",
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                }}
            />

            {/* 상단 텔레메트리 HUD */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: "#ffffff",
                    fontSize: "0.78rem",
                    fontWeight: "800",
                    letterSpacing: "1px",
                    zIndex: 1,
                }}
            >
                <span style={{ color: primaryColor }}>
                    {isLight ? "● DAY RACE SPEC · SOFT TIRE" : "● NIGHT RACE SPEC · DRS OPEN"}
                </span>
                <span style={{ opacity: 0.7 }}>348 KM/H · GEAR 8</span>
            </div>

            {/* 포뮬러 1 오픈휠 머신 측면 SVG */}
            <svg
                viewBox="0 0 640 210"
                style={{ width: "100%", height: "195px", zIndex: 1 }}
                fill="none"
            >
                {/* 바닥 그림자 */}
                <ellipse cx="320" cy="182" rx="285" ry="12" fill="rgba(0,0,0,0.65)" />

                {/* 리어 윙 (Rear Wing) */}
                <path d="M 55 72 L 105 72 L 115 135 L 68 135 Z" fill="#111116" stroke={primaryColor} strokeWidth="2.5" />
                <rect x="48" y="66" width="64" height="10" rx="3" fill={primaryColor} />
                <rect x="52" y="82" width="56" height="6" rx="2" fill="#ffffff" opacity="0.85" />

                {/* 엔진 커버 & 샤크 핀 */}
                <path
                    d="M 105 135 L 112 85 L 235 82 L 295 102 L 455 128 L 545 144 L 545 156 L 105 156 Z"
                    fill={primaryColor}
                />
                {/* 상단 에어 인테이크 (Airbox) */}
                <path d="M 230 82 L 258 66 L 285 82 Z" fill="#111116" />
                <circle cx="256" cy="75" r="4" fill={secondaryColor} />

                {/* 사이드포드 에어로 다이나믹 라인 */}
                <path
                    d="M 165 138 C 210 112, 285 110, 355 128 L 445 142 L 165 148 Z"
                    fill="#14141c"
                    opacity="0.9"
                />
                <path
                    d="M 185 132 L 340 132"
                    stroke="#ffffff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0.8"
                />

                {/* 드라이버 헬멧 & 헤일로(Halo) 보호장치 */}
                <circle cx="292" cy="96" r="12" fill="#ffffff" stroke="#111" strokeWidth="2" />
                <path d="M 294 92 L 304 95 L 294 99 Z" fill="#111116" />
                <path
                    d="M 268 102 Q 305 76 342 108"
                    stroke="#1c1c24"
                    strokeWidth="5.5"
                    strokeLinecap="round"
                />

                {/* 플로어 & 디퓨저 */}
                <rect x="115" y="152" width="350" height="7" rx="2" fill="#0d0d11" />

                {/* 프론트 윙 (Front Wing) */}
                <path d="M 520 148 L 602 152 L 605 162 L 515 162 Z" fill="#14141c" stroke={primaryColor} strokeWidth="2" />
                <rect x="548" y="142" width="48" height="6" rx="2" fill={primaryColor} />

                {/* 서스펜션 암 (앞/뒤) */}
                <line x1="135" y1="145" x2="165" y2="125" stroke="#222" strokeWidth="4" />
                <line x1="475" y1="145" x2="445" y2="128" stroke="#222" strokeWidth="4" />

                {/* 리어 타이어 (피렐리 오픈휠 광폭 타이어) */}
                <circle cx="135" cy="144" r="38" fill="#18181f" />
                <circle cx="135" cy="144" r="31" fill="none" stroke={tireHighlight} strokeWidth="3.5" />
                <circle cx="135" cy="144" r="18" fill="#252530" stroke="#444" strokeWidth="2" />
                <circle cx="135" cy="144" r="6" fill={primaryColor} />

                {/* 프론트 타이어 */}
                <circle cx="478" cy="146" r="35" fill="#18181f" />
                <circle cx="478" cy="146" r="28" fill="none" stroke={tireHighlight} strokeWidth="3.5" />
                <circle cx="478" cy="146" r="16" fill="#252530" stroke="#444" strokeWidth="2" />
                <circle cx="478" cy="146" r="5.5" fill={primaryColor} />
            </svg>

            {/* 하단 스펙 바 */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "#ffffff",
                    fontSize: "0.75rem",
                    opacity: 0.75,
                    borderTop: "1px solid rgba(255,255,255,0.12)",
                    paddingTop: "0.6rem",
                    zIndex: 1,
                }}
            >
                <span>1.6L V6 TURBO HYBRID</span>
                <span>0-100 KM/H: 2.6s</span>
                <span>DOWNFORCE: 5G</span>
            </div>
        </div>
    );
}

// 각 실제 F1 서킷의 공식 트랙 레이아웃 벡터 컴포넌트
function CircuitTrack({ type, isLight }) {
    const strokeColor = "#e10600";
    const bgGrid = isLight ? "#f8f9fb" : "#121218";
    const subLine = isLight ? "#e2e4ea" : "#24242f";

    return (
        <div
            style={{
                width: "100%",
                height: "200px",
                backgroundColor: bgGrid,
                backgroundImage: `radial-gradient(${subLine} 1px, transparent 1px)`,
                backgroundSize: "16px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                borderBottom: isLight ? "1px solid #eceef2" : "1px solid #24242f",
            }}
        >
            {/* 바레인 사키르 서킷 */}
            {type === "bahrain" && (
                <svg viewBox="0 0 260 150" width="210" height="125" fill="none">
                    <path
                        d="M 45 120 L 185 120 C 195 120, 198 110, 190 103 L 155 78 C 148 73, 152 65, 162 65 L 205 65 C 215 65, 218 53, 208 48 L 130 22 C 120 19, 115 28, 120 36 L 132 55 C 136 62, 128 68, 120 64 L 82 44 C 73 40, 65 48, 70 57 L 88 86 C 92 93, 84 100, 76 96 L 45 82 C 35 78, 30 90, 36 100 L 42 114 C 44 118, 45 120, 45 120 Z"
                        stroke={strokeColor}
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <circle cx="115" cy="120" r="4.5" fill={isLight ? "#141418" : "#ffffff"} />
                </svg>
            )}

            {/* 일본 스즈카 서킷 (8자 입체교차 트랙) */}
            {type === "suzuka" && (
                <svg viewBox="0 0 260 150" width="220" height="125" fill="none">
                    <path
                        d="M 95 95 L 165 42 C 175 35, 190 42, 185 55 L 176 78 C 172 88, 185 95, 198 90 L 222 80 C 232 76, 236 90, 226 98 L 175 122 C 162 128, 150 118, 142 105 L 112 62 C 102 48, 85 45, 70 52 L 38 68 C 26 74, 24 92, 36 100 L 68 118 C 78 123, 88 115, 92 103 L 95 95 Z"
                        stroke={strokeColor}
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <circle cx="135" cy="65" r="4.5" fill={isLight ? "#141418" : "#ffffff"} />
                </svg>
            )}

            {/* 모나코 몬테카를로 서킷 */}
            {type === "monaco" && (
                <svg viewBox="0 0 260 150" width="215" height="125" fill="none">
                    <path
                        d="M 55 118 L 125 95 C 135 92, 132 82, 122 80 L 98 76 C 88 74, 88 64, 98 62 L 152 46 C 165 42, 172 30, 185 28 L 212 24 C 224 22, 228 36, 218 44 L 192 62 C 184 68, 192 78, 202 76 L 216 74 C 225 73, 226 86, 216 90 L 145 112 C 132 116, 122 106, 110 110 L 62 126 C 50 130, 45 121, 55 118 Z"
                        stroke={strokeColor}
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <circle cx="90" cy="107" r="4.5" fill={isLight ? "#141418" : "#ffffff"} />
                </svg>
            )}

            <span
                style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "14px",
                    fontSize: "0.72rem",
                    fontWeight: "700",
                    letterSpacing: "0.5px",
                    opacity: 0.55,
                }}
            >
                CIRCUIT MAP
            </span>
        </div>
    );
}

function MainContent(props) {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const isLight = theme === "light";

    const styles = {
        container: {
            minHeight: "100vh",
            backgroundColor: isLight ? "#f5f5f7" : "#0e0e12",
            color: isLight ? "#141418" : "#f5f5f7",
            fontFamily: "'Pretendard', 'Malgun Gothic', -apple-system, sans-serif",
            transition: "background-color 0.3s ease, color 0.3s ease",
            boxSizing: "border-box",
        },
        header: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1.1rem 2.5rem",
            backgroundColor: isLight ? "#ffffff" : "#16161d",
            borderBottom: "2px solid #e10600",
            position: "sticky",
            top: 0,
            zIndex: 10,
        },
        button: {
            padding: "0.6rem 1.2rem",
            fontSize: "0.9rem",
            fontWeight: "700",
            cursor: "pointer",
            borderRadius: "999px",
            border: isLight ? "1px solid #ddd" : "1px solid #333",
            backgroundColor: isLight ? "#141418" : "#ffffff",
            color: isLight ? "#ffffff" : "#141418",
            transition: "all 0.2s ease",
        },
        heroWrapper: {
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "3rem 2rem 1.5rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "2.5rem",
            alignItems: "center",
        },
        heroImageBox: {
            width: "100%",
            height: "330px",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: isLight
                ? "0 16px 32px rgba(0, 0, 0, 0.12)"
                : "0 16px 32px rgba(0, 0, 0, 0.6)",
            border: isLight ? "1px solid #e5e5ea" : "1px solid #262630",
        },
        badge: {
            display: "inline-block",
            padding: "0.3rem 0.75rem",
            fontSize: "0.78rem",
            fontWeight: "800",
            borderRadius: "6px",
            backgroundColor: "#e10600",
            color: "#ffffff",
            marginBottom: "1rem",
            letterSpacing: "0.5px",
        },
        sectionHeader: {
            maxWidth: "1200px",
            margin: "2rem auto 0",
            padding: "0 2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
        },
        grid: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
            gap: "1.8rem",
            padding: "1.5rem 2rem 4rem",
            maxWidth: "1200px",
            margin: "0 auto",
        },
        card: {
            backgroundColor: isLight ? "#ffffff" : "#181820",
            borderRadius: "14px",
            overflow: "hidden",
            border: isLight ? "1px solid #e5e5ea" : "1px solid #262630",
            boxShadow: isLight
                ? "0 8px 20px rgba(0, 0, 0, 0.05)"
                : "0 8px 20px rgba(0, 0, 0, 0.4)",
            transition: "transform 0.25s ease",
        },
        cardBody: {
            padding: "1.4rem",
        },
    };

    const grandPrixList = [
        {
            round: "ROUND 01",
            name: "바레인 그랑프리",
            circuit: "사키르 인터내셔널 서킷",
            length: "5.412 km · 57 랩",
            status: "경기 종료",
            trackType: "bahrain",
        },
        {
            round: "ROUND 02",
            name: "일본 그랑프리",
            circuit: "스즈카 서킷",
            length: "5.807 km · 53 랩",
            status: "다음 레이스",
            trackType: "suzuka",
        },
        {
            round: "ROUND 03",
            name: "모나코 그랑프리",
            circuit: "몬테카를로 시가지 서킷",
            length: "3.337 km · 78 랩",
            status: "예정됨",
            trackType: "monaco",
        },
    ];

    return (
        <div style={styles.container}>
            {/* 상단 네비게이션 */}
            <header style={styles.header}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                    <span
                        style={{
                            fontSize: "1.7rem",
                            fontWeight: "900",
                            color: "#e10600",
                            fontStyle: "italic",
                        }}
                    >
                        F1
                    </span>
                    <span style={{ fontSize: "1.15rem", fontWeight: "800", letterSpacing: "-0.3px" }}>
                        레이싱 라운지
                    </span>
                </div>

                <button onClick={toggleTheme} style={styles.button}>
                    {isLight ? "🌙 나이트 레이스 모드" : "☀️ 데이 레이스 모드"}
                </button>
            </header>

            {/* 메인 히어로 섹션 */}
            <section style={styles.heroWrapper}>
                <div>
                    <span style={styles.badge}>LIVE TRACK & TELEMETRY</span>
                    <h1
                        style={{
                            fontSize: "2.3rem",
                            margin: "0 0 1rem",
                            fontWeight: "800",
                            lineHeight: "1.3",
                            wordBreak: "keep-all",
                        }}
                    >
                        0.001초가 승부를 가르는
                        <br />
                        그랑프리 시즌 가이드
                    </h1>
                    <p
                        style={{
                            fontSize: "1.05rem",
                            opacity: 0.78,
                            lineHeight: "1.65",
                            margin: 0,
                            wordBreak: "keep-all",
                        }}
                    >
                        다가오는 서킷 일정부터 트랙 레이아웃까지, 매 라운드의 핵심 정보를 간결하게 모아봤습니다.
                    </p>
                </div>

                <div style={styles.heroImageBox}>
                    <F1CarVisual isLight={isLight} />
                </div>
            </section>

            {/* 섹션 타이틀 */}
            <div style={styles.sectionHeader}>
                <h2 style={{ margin: 0, fontSize: "1.4rem", fontWeight: "800" }}>
                    주요 그랑프리 일정
                </h2>
                <span style={{ fontSize: "0.9rem", opacity: 0.65 }}>2026 시즌 캘린더</span>
            </div>

            {/* 그랑프리 일정 카드 리스트 */}
            <main style={styles.grid}>
                {grandPrixList.map((race, index) => (
                    <div key={index} style={styles.card}>
                        <CircuitTrack type={race.trackType} isLight={isLight} />
                        <div style={styles.cardBody}>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    fontSize: "0.8rem",
                                    fontWeight: "800",
                                    color: "#e10600",
                                    marginBottom: "0.5rem",
                                }}
                            >
                                <span>{race.round}</span>
                                <span
                                    style={{
                                        padding: "0.2rem 0.55rem",
                                        borderRadius: "4px",
                                        backgroundColor: isLight ? "#f2f2f7" : "#252530",
                                        color: isLight ? "#333" : "#ddd",
                                    }}
                                >
                                    {race.status}
                                </span>
                            </div>
                            <h3 style={{ margin: "0 0 0.4rem", fontSize: "1.3rem", fontWeight: "800" }}>
                                {race.name}
                            </h3>
                            <p style={{ margin: "0 0 0.3rem", fontSize: "0.95rem", opacity: 0.8 }}>
                                📍 {race.circuit}
                            </p>
                            <p style={{ margin: 0, fontSize: "0.82rem", opacity: 0.55 }}>
                                {race.length}
                            </p>
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
}

export default MainContent;