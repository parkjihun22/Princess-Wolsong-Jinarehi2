import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./SalesInfo.module.scss";

import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";

import page1 from "../../assets/SalesInfo/SalesInfoStampTax/page1.jpg";

const ComplexGuide1 = () => {
  const menuContents = [
    { title: "공급안내", url: "/BusinessGuide/documents" },
    { title: "모집공고안내", url: "/SalesInfo/announcement" },
    { title: "계약서류안내", url: "/SalesInfo/guide" },
    { title: "인지세납부안내", url: "/SalesInfo/stampTax" },
    // { title: "청약방법안내", url: "/SalesInfo/SubscriptionGuide" },
  ];

  const [isScroll, setIsScroll] = useState(false);

  // 인지세 안내 이미지 로딩 상태
  const [isImage2Loaded, setIsImage2Loaded] = useState(false);

  const { pathname } = useLocation();

  // 페이지 이동 시 화면 최상단으로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // 스크롤 위치에 따라 헤더 상태 변경
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // 현재 스크롤 위치 즉시 확인
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 이미지 로딩 완료 처리
  const handleImageLoad = () => {
    setIsImage2Loaded(true);
  };

  return (
    <div className={styles.container}>
      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="인지세 납부 안내" />

      <MenuBar contents={menuContents} />

      <div className={styles.textBox}>
        <div>인지세 납부 기준을 확인하세요</div>
        <div>공주 월송 진아레히 인지세 안내</div>
      </div>

      {/* 이미지에 애니메이션 효과 추가 */}
      <img
        className={`${styles.image2} ${
          isImage2Loaded ? styles.showImage2 : ""
        }`}
        src={page1}
        alt="공주 월송 진아레히 인지세 납부 안내 이미지"
        onLoad={handleImageLoad}
      />

      <div className={styles.commonBox2}>
        <div className={styles.notice}>
          ※ 상기 이미지는 고객의 이해를 돕기 위한 안내 자료입니다.
          인지세 납부 전 반드시 관련 안내문과 계약 내용을 확인하시기 바랍니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ComplexGuide1;