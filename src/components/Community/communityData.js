import bgImage from "../../assets/ComplexGuide/ComplexGuide1/bg-section.jpg";
import bannerImage from "../../assets/ComplexGuide/ComplexGuide1/complex-1024x573.jpg";
import layoutImage from "../../assets/ComplexGuide/ComplexGuide1/page1.webp";
import designImage from "../../assets/ComplexGuide/ComplexGuide2/page1.webp";
import communityImage from "../../assets/ComplexGuide/ComplexGuide3/page1.jpg";

export const communityData = {
  eyebrow: "COMMUNITY",
  title: "품격 있는 일상을 완성하는 단지 설계",
  description:
    "공주월송 진아레히는 지하 2층~지상 최고 27층, 7개 동, 총 811세대 규모의 대단지로 조성되며 특화조경과 다채로운 커뮤니티 시설을 통해 일상과 휴식이 조화를 이루는 주거 공간을 제안합니다.",
  backgroundImage: bgImage,
  banner: {
    image: bannerImage,
    alt: "공주월송 진아레히 단지 전경",
  },
  items: [
    {
      id: "complex-layout",
      label: "단지 배치도",
      title: "지상에 차가 없는 공원형 단지",
      description:
        "공주월송 진아레히는 지상에 차량이 다니지 않는 공원형 단지로 계획되어 쾌적하고 안전한 보행환경과 여유로운 주거 공간을 제공합니다.",
      image: layoutImage,
      alt: "공주월송 진아레히 단지 배치도",
    },
    {
      id: "complex-design",
      label: "단지 특화설계",
      title: "자연과 일상이 어우러지는 특화조경",
      description:
        "삼성물산 리조트부문과 협업한 에버스케이프 특화조경을 적용해 조경과 휴게공간, 보행동선이 자연스럽게 이어지는 공원형 단지로 조성될 예정입니다.",
      image: designImage,
      alt: "공주월송 진아레히 특화조경 설계",
    },
    {
      id: "community-space",
      label: "커뮤니티",
      title: "811세대가 누리는 커뮤니티 시설",
      description:
        "피트니스센터와 골프연습장, 사우나, 게스트룸, 독서실·북카페, 키즈카페 등 건강과 여가, 교육을 위한 다양한 커뮤니티 시설이 마련될 예정입니다.",
      image: communityImage,
      alt: "공주월송 진아레히 커뮤니티 시설",
    },
  ],
};