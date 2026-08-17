import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/BusinessGuide/BusinessGuide1/page1.jpg";
import tableImage from "../../assets/BusinessGuide/BusinessGuide1/tableImage.jpg";



const projectData = [
  { label: "현장명", value: "공주 월송 진아레히" },

  { label: "사업명", value: "공주월송 진아레히" },

  {
    label: "대지위치",
    value: "충청남도 공주시 금흥동 39-4번지 일원",
  },

  {
    label: "규모",
    value: "아파트 7개 동 (지하 2층~지상 최고 27층)",
  },

  {
    label: "건축면적",
    value: "6,680.5397㎡",
  },

  {
    label: "세대수",
    value: "총 811세대",
  },

  {
    label: "주택형",
    value: "84㎡A · 84㎡B · 104㎡ · 116㎡ · 132㎡",
  },

  {
    label: "용도",
    value: "공동주택(아파트) 및 근린생활시설",
  },

  {
    label: "건설사",
    value: "(주)리채 · 아이리스건설(주)",
  },
];
const BusinessGuide1 = () => {
  const menuContents = [
    { title: "사업안내", url: "/BusinessGuide/intro" },
    { title: "분양일정", url: "/BusinessGuide/plan" },
  ];

  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation();
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
<Header isChanged={isScroll} />
<FixIcon />

<Bener title="사업개요" />

<MenuBar contents={menuContents} />
<div className={styles.textBox}>
  <div>공주시 금흥동 39-4번지 일원에 조성되는 주거 가치</div>
  <div>공주와 세종을 함께 누리는 프리미엄을 완성합니다.</div>
</div>

<img className={styles.img3} src={page1} alt="공주 월송 진아레히 사업개요 이미지"/>

			<div className={styles.tableContainer}>
				{!isMobile && (
					<img
						className={styles.tableImg}
						src={tableImage}
						alt="공주 월송 진아레히 사업개요 표 이미지"
					/>
				)}
				<table className={styles.projectTable}>
					<tbody>
						{projectData.map((item, index) => (
							<tr key={index}>
								<td className={styles.label}>{item.label}</td>
								<td className={styles.contents}>{item.value}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			 <div className={styles.commonBox}>
				<div className={styles.notice}>
					※ 본 홈페이지에 표기된 내용은 하기의 내용을 근거로 한 내용이며, 추후 계획의 변동 등은 당사와 무관합니다.
				</div>
				
			</div> 


			<Footer />
		</div>
	)
}

export default BusinessGuide1;
