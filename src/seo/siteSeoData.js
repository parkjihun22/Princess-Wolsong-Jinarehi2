const SITE_URL = "https://cheongju-hanyanglips.com";

export const siteSeo = {
  siteName: "공주 월송 진아레히",
  siteUrl: SITE_URL,
  phone: "1533-8848",
  ogImage: "/img/og/main.jpg",
  locale: "ko_KR",
  organizationId: `${SITE_URL}/#organization`,
  websiteId: `${SITE_URL}/#website`,
  defaultDescription:
    "공주 월송 진아레히 홈페이지입니다. 충청남도 공주시 금흥동 39-4번지 일원에 조성되는 총 811세대, 지하 2층~지상 최고 27층, 전용 84㎡A·B·104㎡·116㎡·132㎡ 아파트의 분양정보, 분양가 상담, 견본주택 및 모델하우스 방문예약 정보를 확인하세요.",
  project: {
    addressCountry: "KR",
    addressRegion: "충청남도",
    addressLocality: "공주시",
    streetAddress: "금흥동 39-4번지 일원",
    brands: [
      "진아레히",
      "진아건설",
      "리채",
      "아이리스건설",
    ],
    navigationSchemaName: "공주 월송 진아레히 주요 메뉴",
  },
  keywords: [
    "공주 월송 진아레히",
    "공주월송 진아레히",
    "월송 진아레히",
  ],
};

export const seoNavigation = [
  {
    name: "브랜드소개",
    path: "/Brand/intro",
    children: [
      { name: "브랜드소개", path: "/Brand/intro" },
      { name: "홍보영상", path: "/Brand/video" },
    ],
  },
  {
    name: "사업안내",
    path: "/BusinessGuide/intro",
    children: [
      { name: "사업안내", path: "/BusinessGuide/intro" },
      { name: "분양일정", path: "/BusinessGuide/plan" },
    ],
  },
  {
    name: "입지환경",
    path: "/LocationEnvironment/intro",
    children: [
      { name: "입지안내", path: "/LocationEnvironment/intro" },
      {
        name: "프리미엄",
        path: "/LocationEnvironment/primium",
      },
    ],
  },
  {
    name: "단지안내",
    path: "/ComplexGuide/intro",
    children: [
      { name: "단지배치도", path: "/ComplexGuide/intro" },
      {
        name: "호수배치도",
        path: "/ComplexGuide/detailintro",
      },
      {
        name: "커뮤니티",
        path: "/ComplexGuide/community",
      },
    ],
  },
  {
    name: "분양안내",
    path: "/BusinessGuide/documents",
    children: [
      {
        name: "공급안내",
        path: "/BusinessGuide/documents",
      },
      {
        name: "입주자 모집공고",
        path: "/SalesInfo/announcement",
      },
      {
        name: "계약서류안내",
        path: "/SalesInfo/guide",
      },
    ],
  },
  {
    name: "타입안내",
    path: "/FloorPlan/59A",
    children: [
      { name: "84㎡A", path: "/FloorPlan/59A" },
      { name: "84㎡B", path: "/FloorPlan/59B" },
      { name: "104㎡", path: "/FloorPlan/84A" },
      { name: "116㎡", path: "/FloorPlan/84B" },
      { name: "132㎡", path: "/FloorPlan/114A" },
      {
        name: "E-모델하우스",
        path: "/FloorPlan/Emodel",
      },
    ],
  },
  {
    name: "홍보센터",
    path: "/Promotion/Customer",
    children: [
      {
        name: "관심고객등록",
        path: "/Promotion/Customer",
      },
    ],
  },
];

const page = ({
  path,
  title,
  description,
  menu,
  image = siteSeo.ogImage,
  priority = 0.8,
  changefreq = "weekly",
  robots = "index, follow, max-snippet:-1, max-image-preview:large",
}) => ({
  path,
  title,
  description,
  menu,
  image,
  priority,
  changefreq,
  robots,
});

export const seoPages = {
  home: page({
    path: "/",
    title: "공주 월송 진아레히",
    description: siteSeo.defaultDescription,
    menu: "홈",
    priority: 1,
    changefreq: "daily",
  }),

  brandIntro: page({
    path: "/Brand/intro",
    title: "브랜드소개 | 공주 월송 진아레히",
    description:
      "공주 월송 진아레히의 브랜드 철학과 프리미엄 주거 가치를 소개합니다. 공주 월송과 세종 생활권을 함께 누리는 진아레히의 분양정보를 확인하세요.",
    menu: "브랜드소개",
  }),

  brandVideo: page({
    path: "/Brand/video",
    title: "홍보영상 | 공주 월송 진아레히",
    description:
      "공주 월송 진아레히 홍보영상을 통해 총 811세대 대단지의 입지환경과 단지 설계, 커뮤니티 및 주거 가치를 확인하세요.",
    menu: "브랜드소개",
  }),

  businessIntro: page({
    path: "/BusinessGuide/intro",
    title: "사업안내 | 공주 월송 진아레히",
    description:
      "공주 월송 진아레히 사업안내 페이지입니다. 충청남도 공주시 금흥동 39-4번지 일원, 지하 2층~지상 최고 27층, 7개 동, 총 811세대 규모의 사업정보를 확인하세요.",
    menu: "사업안내",
    image: "/img/og/business.jpg",
    priority: 0.9,
  }),

  businessPlan: page({
    path: "/BusinessGuide/plan",
    title: "분양일정 | 공주 월송 진아레히",
    description:
      "공주 월송 진아레히 분양일정 안내입니다. 입주자모집공고와 청약 접수, 당첨자 발표, 서류접수 및 계약 일정 등 주요 분양 일정을 확인하세요.",
    menu: "사업안내",
  }),

  salesGuide: page({
    path: "/BusinessGuide/documents",
    title: "공급안내 | 공주 월송 진아레히",
    description:
      "공주 월송 진아레히 공급안내 페이지입니다. 총 811세대 공급 규모와 84㎡A·B, 104㎡, 116㎡, 132㎡ 주택형별 공급정보를 확인하세요.",
    menu: "분양안내",
    priority: 0.9,
  }),

  announcement: page({
    path: "/SalesInfo/announcement",
    title: "입주자 모집공고 | 공주 월송 진아레히",
    description:
      "공주 월송 진아레히 입주자모집공고 안내입니다. 총 811세대 공급 대상과 주택형별 세대수, 공급금액, 청약 자격, 계약 조건 및 유의사항을 확인하세요.",
    menu: "분양안내",
    priority: 0.9,
  }),

  salesInfoGuide: page({
    path: "/SalesInfo/guide",
    title: "계약서류안내 | 공주 월송 진아레히",
    description:
      "공주 월송 진아레히 계약서류안내 페이지입니다. 계약과 자격 확인에 필요한 제출서류, 준비사항 및 계약 절차를 확인하세요.",
    menu: "분양안내",
  }),

  locationIntro: page({
    path: "/LocationEnvironment/intro",
    title: "입지환경 | 공주 월송 진아레히",
    description:
      "공주 월송 진아레히 입지환경 안내입니다. 충청남도 공주시 금흥동 39-4번지 일원에서 누리는 공주 월송·세종 더블생활권과 교통, 교육 및 생활 인프라를 확인하세요.",
    menu: "입지환경",
    image: "/img/og/location.jpg",
    priority: 0.9,
  }),

  locationPremium: page({
    path: "/LocationEnvironment/primium",
    title: "프리미엄 | 공주 월송 진아레히",
    description:
      "공주 월송 진아레히 프리미엄 안내입니다. 공주·세종 더블생활권과 공원형 단지, 특화조경, 세대당 약 1.57대의 주차공간 및 커뮤니티 시설을 확인하세요.",
    menu: "입지환경",
    image: "/img/og/location.jpg",
  }),

  complexIntro: page({
    path: "/ComplexGuide/intro",
    title: "단지배치도 | 공주 월송 진아레히",
    description:
      "공주 월송 진아레히 단지배치도 안내입니다. 지하 2층~지상 최고 27층, 7개 동, 총 811세대로 조성되는 공원형 단지의 동선과 배치를 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
    priority: 0.9,
  }),

  complexDetail: page({
    path: "/ComplexGuide/detailintro",
    title: "호수배치도 | 공주 월송 진아레히",
    description:
      "공주 월송 진아레히 호수배치도 안내입니다. 단지의 동·호수 구성과 주택형별 세대 위치 및 배치 정보를 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
  }),

  complexCommunity: page({
    path: "/ComplexGuide/community",
    title: "커뮤니티 | 공주 월송 진아레히",
    description:
      "공주 월송 진아레히 커뮤니티 안내입니다. 피트니스센터, 골프연습장, 사우나, 게스트룸, 독서실·북카페 등 입주민을 위한 다양한 시설을 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
  }),

  // 실제 84㎡A 타입이며 기존 URL은 그대로 유지
  floorPlan59A: page({
    path: "/FloorPlan/59A",
    title: "84㎡A 평면도 | 공주 월송 진아레히",
    description:
      "공주 월송 진아레히 84㎡A 평면도 안내입니다. 총 405세대로 구성되는 84A 타입의 공간 구성과 수납계획, 생활 동선을 확인하세요.",
    menu: "타입안내",
  }),

  // 실제 84㎡B 타입이며 기존 URL은 그대로 유지
  floorPlan59B: page({
    path: "/FloorPlan/59B",
    title: "84㎡B 평면도 | 공주 월송 진아레히",
    description:
      "공주 월송 진아레히 84㎡B 평면도 안내입니다. 총 147세대로 구성되는 84B 타입의 공간 활용과 수납계획, 생활 동선을 확인하세요.",
    menu: "타입안내",
  }),

  // 실제 104㎡ 타입이며 기존 URL은 그대로 유지
  floorPlan75A: page({
    path: "/FloorPlan/84A",
    title: "104㎡ 평면도 | 공주 월송 진아레히",
    description:
      "공주 월송 진아레히 104㎡ 평면도 안내입니다. 총 52세대로 구성되는 104㎡ 타입의 여유로운 실내 공간과 생활 동선을 확인하세요.",
    menu: "타입안내",
  }),

  // 실제 116㎡ 타입이며 기존 URL은 그대로 유지
  floorPlan75B: page({
    path: "/FloorPlan/84B",
    title: "116㎡ 평면도 | 공주 월송 진아레히",
    description:
      "공주 월송 진아레히 116㎡ 평면도 안내입니다. 총 105세대로 구성되는 116㎡ 타입의 넓은 공간과 효율적인 주거 동선을 확인하세요.",
    menu: "타입안내",
  }),

  // 실제 132㎡ 타입이며 기존 URL은 그대로 유지
  floorPlan84A: page({
    path: "/FloorPlan/114A",
    title: "132㎡ 평면도 | 공주 월송 진아레히",
    description:
      "공주 월송 진아레히 132㎡ 평면도 안내입니다. 총 102세대로 구성되는 대형 주택형의 차별화된 공간 구성과 생활 동선을 확인하세요.",
    menu: "타입안내",
  }),

  emodel: page({
    path: "/FloorPlan/Emodel",
    title: "E-모델하우스 | 공주 월송 진아레히",
    description:
      "공주 월송 진아레히 E-모델하우스입니다. 84㎡A·B, 104㎡, 116㎡, 132㎡ 주택형의 실내 구조와 공간 구성, 주거 동선을 온라인으로 확인하세요.",
    menu: "타입안내",
    image: "/img/og/emodel.jpg",
    priority: 0.9,
  }),

  customer: page({
    path: "/Promotion/Customer",
    title: "관심고객등록 | 공주 월송 진아레히",
    description:
      "공주 월송 진아레히 관심고객등록 페이지입니다. 분양정보와 공급 조건, 분양가 상담 및 모델하우스 방문예약 안내를 빠르게 받아보세요.",
    menu: "홍보센터",
    image: "/img/og/customer.jpg",
    priority: 0.9,
    changefreq: "daily",
  }),

  notFound: page({
    path: "/404",
    title: "페이지를 찾을 수 없습니다 | 공주 월송 진아레히",
    description:
      "요청하신 페이지를 찾을 수 없습니다. 공주 월송 진아레히 홈페이지의 사업안내, 입지환경, 단지안내, 타입안내, E-모델하우스 및 관심고객등록 메뉴를 이용해 주세요.",
    menu: "오류",
    priority: 0,
    changefreq: "yearly",
    robots: "noindex, follow",
  }),
};

export const seoPathMap = Object.fromEntries(
  Object.entries(seoPages).map(([key, value]) => [
    value.path.toLowerCase(),
    key,
  ])
);

export const getAbsoluteUrl = (path = "/") => {
  if (/^https?:\/\//.test(path)) return path;

  return `${siteSeo.siteUrl}${path}`;
};

export const getSeoPageByPath = (pathname = "/") => {
  const decodedPath =
    decodeURI(pathname).replace(/\/$/, "") || "/";

  const normalizedPath = decodedPath.toLowerCase();
  const exactKey = seoPathMap[normalizedPath];

  if (exactKey) return seoPages[exactKey];

  if (normalizedPath.endsWith("/customer")) {
    return seoPages.customer;
  }

  return seoPages.notFound;
};