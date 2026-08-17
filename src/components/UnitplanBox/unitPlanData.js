import unit01 from "../../assets/UnitplanBox/unit01.jpg";
import unit02 from "../../assets/UnitplanBox/unit02.jpg";
import unit03 from "../../assets/UnitplanBox/unit03.jpg";
import unit04 from "../../assets/UnitplanBox/unit04.jpg";
import unit05 from "../../assets/FloorPlan/FloorPlan5/unit05.jpg";
// import unit06 from "../../assets/FloorPlan/FloorPlan6/unit06.jpg";

export const unitPlanData = {
  eyebrow: "UNIT PLAN",
  title: "공주 월송 진아레히 타입안내",
  description:
    "공주 월송 진아레히의 84㎡A·84㎡B·104㎡·116㎡·132㎡ 타입별 평면을 확인할 수 있습니다. 공간 구성과 생활 동선을 비교하며 가족의 라이프스타일에 적합한 주택형을 살펴보세요.",
  plans: [
    {
      id: "84A",
      type: "84A",
      name: "84A㎡",
      summary:
        "공간 활용과 가족 중심의 생활 동선을 고려한 84A 타입 평면을 확인하세요.",
      image: unit01,
      alt: "공주 월송 진아레히 84A㎡ 평면도",
      link: "/FloorPlan/84A",
    },
    {
      id: "84B",
      type: "84B",
      name: "84B㎡",
      summary:
        "실용적인 수납계획과 효율적인 공간 구성이 돋보이는 84B 타입입니다.",
      image: unit02,
      alt: "공주 월송 진아레히 84B㎡ 평면도",
      link: "/FloorPlan/84B",
    },
    {
      id: "104",
      type: "104",
      name: "104㎡",
      summary:
        "가족의 여유로운 생활과 공간 활용을 고려한 104㎡ 타입 평면을 확인하세요.",
      image: unit03,
      alt: "공주 월송 진아레히 104㎡ 평면도",
      link: "/FloorPlan/104",
    },
    {
      id: "116",
      type: "116",
      name: "116㎡",
      summary:
        "넓은 실내 공간과 편리한 생활 동선을 갖춘 116㎡ 타입 평면입니다.",
      image: unit04,
      alt: "공주 월송 진아레히 116㎡ 평면도",
      link: "/FloorPlan/116",
    },
    {
      id: "132",
      type: "132",
      name: "132㎡",
      summary:
        "대형 평형의 여유와 차별화된 공간 구성을 누릴 수 있는 132㎡ 타입입니다.",
      image: unit05,
      alt: "공주 월송 진아레히 132㎡ 평면도",
      link: "/FloorPlan/132",
    },
  ],
};
