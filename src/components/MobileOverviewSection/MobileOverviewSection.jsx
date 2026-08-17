// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect, useRef } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
          <strong>사업명</strong>
          <span>공주 월송 진아레히 공동주택 신축사업</span>
        </li>
        <li>
          <strong>대지위치</strong>
          <span>충청남도 공주시 금흥동 39-4번지 일원</span>
        </li>
        <li>
          <strong>건축규모</strong>
          <span>아파트 7개 동 (지하 2층~지상 최고 27층)</span>
        </li>
        <li>
          <strong>세대수</strong>
          <span>총 811세대</span>
        </li>
        <li>
          <strong>세대정보</strong>
          <span>84㎡A · 84㎡B · 104㎡ · 116㎡ · 132㎡</span>
        </li>
        <li>
          <strong>입지환경</strong>
          <span>공주 월송생활권 · 세종 더블생활권</span>
        </li>
        <li>
          <strong>용도</strong>
          <span>공동주택(아파트) 및 근린생활시설</span>
        </li>
        <li>
          <strong>건설사</strong>
          <span>(주)리채 · 아이리스건설(주)</span>
        </li>
      </ul>
    ),
  },
  
  {
    key: "location",
    label: "입지환경",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="공주 월송 진아레히 입지환경 지도"
        />
        <img
          src={mobileMap2}
          className={styles.mapImage}
          alt="공주 월송 진아레히 생활권 지도"
        />
      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
{/* 프리미엄 섹션 상단 문단 */}
<div className={styles.premiumIntro}>
  <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
  <p className={styles.premiumSubtitle}>
    공주 월송과 세종 더블생활권, 811세대 대단지의 가치를 누리는<br />
    공주 월송 진아레히 프리미엄 라이프
  </p>
</div>

{/* 슬라이더 */}
<PremiumSlider />
</>
),
},
];

function PremiumSlider() {
  const slides = [
    {
      img: slide1,
      title: "공주 월송·세종 더블생활권",
      desc:
        "충청남도 공주시 금흥동 39-4번지 일원<br/>공주 월송생활권과 세종 생활권을 함께 누리는 입지<br/>공주 월송 진아레히의 새로운 주거 가치",
    },
    {
      img: slide2,
      title: "84㎡부터 132㎡까지 중대형 구성",
      desc:
        "84A·84B·104·116·132㎡ 주택형 구성<br/>공간 활용과 생활 동선을 고려한 평면 설계<br/>가족의 다양한 라이프스타일을 담은 주거 공간",
    },
    {
      img: slide3,
      title: "총 811세대 프리미엄 대단지",
      desc:
        "아파트 7개 동, 지하 2층~지상 최고 27층 규모<br/>공동주택과 근린생활시설이 함께 계획된 대단지<br/>공주 월송 진아레히의 차별화된 주거 가치",
    },
    {
      img: slide4,
      title: "자연과 일상이 어우러지는 단지",
      desc:
        "지상에 차량이 다니지 않는 공원형 단지 설계<br/>삼성물산 리조트부문과 협업한 특화조경 예정<br/>쾌적하고 여유로운 일상을 완성하는 주거환경",
    },
    {
      img: slide5,
      title: "대단지에서 누리는 커뮤니티",
      desc:
        "사우나·골프연습장·피트니스센터·게스트룸<br/>독서실·북카페·키즈카페 등 다양한 주민시설<br/>입주민의 건강과 여가를 고려한 주거 공간",
    },
    {
      img: slide6,
      title: "더욱 편리해질 광역교통 환경",
      desc:
        "공주·세종 광역 BRT 개통 계획으로 기대되는 접근성<br/>서세종IC를 통해 이어지는 광역 도로교통망<br/>공주와 세종을 연결하는 진아레히의 미래가치",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const itemRefs = useRef({});

  const toggle = (key) => {
    setOpenKey((prevKey) => (prevKey === key ? null : key));

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const targetItem = itemRefs.current[key];
        if (!targetItem) return;

        const fixedHeaderOffset = 96;
        const targetTop =
          window.scrollY + targetItem.getBoundingClientRect().top - fixedHeaderOffset;

        window.scrollTo({
          top: Math.max(targetTop, 0),
          behavior: "auto",
        });
      });
    });
  };

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
        <div className={styles.preTitle}>CHEONGJU HANYANG LIPS</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      <img src={heroImage} className={styles.heroImage} alt="공주 월송 진아레히 히어로 메인사진" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div
          key={key}
          className={styles.accordionItem}
          ref={(node) => {
            itemRefs.current[key] = node;
          }}
        >
          <button
            type="button"
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
            aria-expanded={openKey === key}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
