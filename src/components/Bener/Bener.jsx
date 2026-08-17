import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title = "공주 월송 진아레히" }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="공주 월송 진아레히 배너이미지"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <h1
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </h1>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
  const normalizedText = text.replace(/\s/g, "");
  const brandTitles = ["홍보영상", "브랜드소개", "공주월송진아레히"];
  const businessTitles = [
    "사업개요",
    "사업안내",
    "분양일정",
    "분양안내",
    "입주자모집공고",
    "공급안내",
    "계약서류안내",
  ];
  const locationTitles = ["입지환경", "입지안내", "프리미엄"];
  const complexTitles = ["단지안내", "단지배치도", "호수배치도", "커뮤니티"];
  const unitTitles = [
    "세대안내",
    "세대안내영상",
    "타입안내",
    "84A㎡평면도",
    "84B㎡평면도",
    "104㎡평면도",
    "116㎡평면도",
    "132㎡평면도",
    "E모델하우스",
    "E-모델하우스",
  ];
  const promotionTitles = ["홍보센터", "언론보도", "관심고객등록", "방문예약등록"];

  if (brandTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          공주월송에서 만나는 진아레히의 새로운 주거 가치.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          공주월송 진아레히, 진아건설의 프리미엄 주거 철학을 담은 공간.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          공주와 세종을 함께 누리는 새로운 주거 기준을 만나보세요.
        </div>
      </>
    );
  } else if (businessTitles.includes(normalizedText) || unitTitles.includes(normalizedText) || normalizedText.includes("인테리어")) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          공주월송 진아레히의 사업개요와 분양 안내.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          총 811세대 대단지에 진아레히의 프리미엄 주거 가치를 더했습니다.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          청약 정보부터 입주자모집공고, 공급 안내, 84㎡·104㎡·116㎡·132㎡ 타입까지 한눈에 확인하세요.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          공주월송 진아레히
        </div>
      </>
    );
  } else if (locationTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          공주 월송생활권과 세종 생활권을 함께 누리는 입지 프리미엄.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          공주·세종 광역교통망과 월송지구 생활 인프라가 가까운 주거 환경을 확인하세요.
        </div>
      </>
    );
  } else if (complexTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          지상에 차가 없는 공원형 단지로 조성되는 공주월송 진아레히.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          특화조경과 사우나, 골프연습장, 게스트룸 등 차별화된 커뮤니티를 확인하세요.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          공주월송 진아레히, 공주와 세종을 함께 누리는 새로운 주거 기준을 제안합니다.
        </div>
      </>
    );
  } else if (promotionTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          공주월송 진아레히의 분양 소식과 견본주택 방문예약 안내를 확인하세요.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          관심고객등록을 통해 공급 정보와 계약 안내, 상담 소식을 빠르게 받아보실 수 있습니다.
        </div>
      </>
    );
  }

  return (
    <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
      공주월송 진아레히 홈페이지에서 사업개요와 분양 정보를 확인하세요.
    </div>
  );
};
