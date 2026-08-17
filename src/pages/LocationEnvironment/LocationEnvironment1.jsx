import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FiSearch, FiX } from "react-icons/fi";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const locationMenu = [
  { title: "입지안내", url: "/LocationEnvironment/intro" },
  { title: "프리미엄", url: "/LocationEnvironment/primium" },
];

const locationSections = [
  {
    img: section2Image1,
    titleText: "공주 월송·세종 더블생활권<br />새로운 주거 중심",
    contentText:
      "충청남도 공주시 금흥동 39-4번지 일원<br />공주 월송생활권과 세종 생활권을 함께 누리는 입지",
  },
  {
    img: section2Image2,
    titleText: "풍부한 생활 인프라<br />편리한 일상",
    contentText:
      "월송지구 중심상업시설과 신관동 중심상권을 가까이 이용<br />법원·검찰청·의료시설·마트 등이 마련된 생활환경",
  },
  {
    img: section2Image3,
    titleText: "공주와 세종을 연결하는<br />광역교통 환경",
    contentText:
      "주요 도로망을 통해 세종 생활권으로 이어지는 교통환경<br />공주·세종 광역 BRT와 광역도로망 확충에 따른 미래가치",
  },
  {
    img: section2Image4,
    titleText: "교육과 돌봄을 고려한<br />안심 주거환경",
    contentText:
      "단지 내 국공립어린이집과 다함께돌봄센터 조성 예정<br />입주민 자녀의 편리한 통학을 고려한 통학버스 서비스",
  },
  {
    img: section2Image5,
    titleText: "총 811세대가 누리는<br />프리미엄 커뮤니티",
    contentText:
      "사우나·골프연습장·피트니스센터·게스트룸 등 다양한 시설<br />건강과 여가, 휴식을 고려한 공주 월송 진아레히",
  },
  {
    img: section2Image6,
    titleText: "자연과 함께하는<br />공원형 주거단지",
    contentText:
      "지상에 차량이 다니지 않는 쾌적하고 안전한 단지 설계<br />특화조경과 녹지공간이 어우러지는 프리미엄 라이프",
  },
];

const LocationEnvironment1 = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [zoomImage, setZoomImage] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!zoomImage) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setZoomImage(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [zoomImage]);

  const openZoom = (src, alt) => {
    setZoomImage({ src, alt });
  };

  return (
    <div className={styles.container}>
      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="입지환경" />
      <MenuBar contents={locationMenu} />

      <div className={styles.textBox}>
        <div>청주시 상당구 지북동 생활권에서</div>
        <div>삶의 가치가 높아지는 곳</div>
        <div>공주 월송 진아레히가 새로운 주거 가치로 찾아옵니다.</div>
      </div>

      <figure className={styles.locationMapFrame}>
        <img
          src={page1}
          className={styles.image2}
          alt="공주 월송 진아레히 입지환경과 지북동 생활권 안내 이미지"
        />
        <button
          type="button"
          className={styles.zoomButton}
          onClick={() =>
            openZoom(
              page1,
              "공주 월송 진아레히 입지환경과 지북동 생활권 안내 이미지"
            )
          }
          aria-label="입지환경 이미지 크게 보기"
        >
          <FiSearch />
          <span>크게 보기</span>
        </button>
      </figure>

      <div className={styles.section2}>
        {locationSections.map((value) => (
          <LocationSectionBox
            key={value.titleText}
            image={value.img}
            title={value.titleText}
            text={value.contentText}
            onZoom={() =>
              openZoom(
                value.img,
                `공주 월송 진아레히 ${value.titleText.replace(/<[^>]*>/g, " ")} 이미지`
              )
            }
          />
        ))}
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          본 홍보물의 내용과 이미지는 소비자의 이해를 돕기 위한 것으로, 개발 예정 및 교통,
          학교 계획 등에 관한 사항은 해당 기관의 자료를 토대로 제작되었습니다. 사업계획 및
          일정은 관계 기관과 사업 주체의 사정에 따라 변경될 수 있으며, 자세한 내용은
          입주자모집공고와 관계 기관의 최종 고시를 확인하시기 바랍니다.
        </div>
      </div>

      {zoomImage && (
        <div
          className={styles.zoomModal}
          role="dialog"
          aria-modal="true"
          aria-label="이미지 확대 보기"
          onClick={() => setZoomImage(null)}
        >
          <div className={styles.zoomModalInner} onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className={styles.zoomClose}
              onClick={() => setZoomImage(null)}
              aria-label="확대 이미지 닫기"
            >
              <FiX />
            </button>
            <img src={zoomImage.src} alt={zoomImage.alt} />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
