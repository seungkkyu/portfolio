// 문구 원본: career/portfolio/web-content.md
// 공개용 정보만 둔다. 전화번호, 생년월일, 지원 이력은 넣지 않는다.

import type { StaticImageData } from "next/image";
import aiTextbookChatbot from "@/assets/works/ai-textbook-chatbot.png";
import aiTextbookDashboard from "@/assets/works/ai-textbook-dashboard.png";
import chatbotPoc from "@/assets/works/chatbot-poc.png";
import dreamssam from "@/assets/works/dreamssam.png";
import elementaryRecord from "@/assets/works/elementary-record.png";
import kinderboard from "@/assets/works/kinderboard.png";
import littleHomerun from "@/assets/works/little-homerun.png";
import middleSchoolRecord from "@/assets/works/middle-school-record.png";
import myTreeForest from "@/assets/works/my-tree-forest.png";

export type Shot = {
  src: StaticImageData;
  alt: string;
};

export type Career = {
  period: string;
  company: string;
  team: string;
  summary: string;
  // 공식 로고 SVG/PNG를 src/assets/logos/에 넣고 import해서 연결한다. 없으면 회사명만 표시.
  logo?: StaticImageData;
};

export type Capability = {
  title: string;
  description: string;
};

export type Work = {
  slug: string;
  title: string;
  period: string;
  company: string;
  role: string;
  summary: string;
  stack: string[];
  problems: string[];
  approaches: string[];
  results: string[];
  shots: Shot[];
  diagram?: "voice-loop" | "chunk-upload";
};

export type OtherWork = {
  title: string;
  period: string;
  description: string;
  stack: string[];
  shot: Shot;
};

export const profile = {
  name: "SeungKyu Park",
  nameKo: "박승규",
  position: "Frontend Developer",
  headline: "제품의 맥락까지 이해하는 프론트엔드 개발자입니다.",
  intro:
    "교육 서비스에서 AI 음성 대화, 학습 데이터 대시보드, 교사용 업무 도구를 만들어 왔습니다.",
  focus: [
    { title: "Web Services", description: "반응형 UI와 서비스 개발" },
    { title: "AI Interaction", description: "음성, LLM, 캐릭터 인터랙션" },
    { title: "Data Visualization", description: "대시보드, 차트, 리포트" },
  ],
  email: "effortsk@naver.com",
  github: "https://github.com/seungkkyu",
  closing:
    "사용자가 이해하기 쉬운 인터페이스와 개발자가 유지하기 쉬운 구조를 함께 고민합니다.",
};

export const about = [
  "임베디드 소프트웨어에서 출발해 프론트엔드로 옮겨 온 개발자입니다.",
  "아이디스에서 4년 동안 IP카메라 펌웨어(Linux C/C++)와 관리자 웹을 함께 개발했습니다. 디바이스 동작부터 API를 거쳐 화면에 데이터가 전달되는 과정까지 다루면서, 실행 환경과 데이터 흐름을 함께 살피는 습관이 생겼습니다.",
  "이후 아이스크림에듀와 아이스크림미디어에서 React, Next.js 기반 교육 서비스를 개발하고 운영했습니다. 기술 스택 자체보다, 제품 요구를 구조화하고 유지보수 가능한 UI 시스템으로 연결하는 데 집중합니다.",
];

export const careers: Career[] = [
  {
    period: "2026.05 ~ 재직 중",
    company: "아이스크림미디어",
    team: "신사업개발본부 킨더보드팀",
    summary: "교사용 AI 서비스 개발과 운영",
  },
  {
    period: "2022.02 ~ 2026.05",
    company: "아이스크림에듀",
    team: "AI서비스개발팀",
    summary: "교육 서비스, AI 멘토링, 디지털교과서",
  },
  {
    period: "2017.12 ~ 2022.02",
    company: "아이디스",
    team: "IP카메라개발팀",
    summary: "카메라 펌웨어와 관리자 웹",
  },
];

export const capabilities: Capability[] = [
  {
    title: "Product Architecture",
    description:
      "요구사항을 화면 흐름, 상태, 데이터 구조로 나눠 설계합니다. 공통 로직은 커스텀 Hooks와 공통 컴포넌트로 분리합니다.",
  },
  {
    title: "AI & Conversation",
    description:
      "음성 입력(STT), LLM 응답, TTS 출력, 캐릭터 반응이 이어지는 대화 흐름을 UI 상태로 모델링했습니다. WebSocket 기반 실시간 질의응답을 구현했습니다.",
  },
  {
    title: "Dashboard & Visualization",
    description:
      "학습 데이터와 AI 분석 결과를 대시보드와 리포트로 시각화했습니다. 주간, 월간, 누적 지표를 일관된 UI 패턴으로 표현합니다.",
  },
  {
    title: "Cross Environment",
    description:
      "WebView, 구형 Chromium, 태블릿과 PC 환경에서 같은 경험을 제공하도록 빌드 설정, 폴리필, 반응형 UI를 조정했습니다.",
  },
  {
    title: "Web Performance",
    description:
      "모든 프로젝트에서 Lighthouse로 점검합니다. 이미지를 WebP로 변환하고, Next.js 로컬 폰트와 번들 분리를 기본으로 적용합니다.",
  },
];

export const stacks: { label: string; items: string[] }[] = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Vue", "JavaScript"] },
  {
    label: "State & Data",
    items: ["Zustand", "TanStack Query", "SWR", "Redux", "Redux-Saga"],
  },
  {
    label: "Interaction & Visualization",
    items: ["WebSocket", "STT", "TTS", "Unity WebGL", "Chart.js"],
  },
  {
    label: "Environment",
    items: ["WebView", "AWS", "NCP", "Git", "GitLab", "Linux", "C/C++"],
  },
];

export const works: Work[] = [
  {
    slug: "kinderboard",
    title: "킨더보드",
    period: "2026.05 ~ 재직 중",
    company: "아이스크림미디어",
    role: "프론트엔드 개발 및 운영",
    summary:
      "어린이집, 유치원 교사의 놀이계획, 관찰기록, 교육 자료 제작을 지원하는 AI 기반 웹 서비스",
    stack: ["React 18", "Vite 6", "TypeScript", "Zustand", "TanStack Query v5", "Tailwind CSS"],
    problems: [
      "기관마다 다른 운영 정책과 권한을 교사의 문서 작성 흐름에 반영해야 했습니다.",
      "원아별로 같은 조회가 반복되고, 데이터 변경 후 화면 간 기록이 어긋나는 문제가 있었습니다.",
    ],
    approaches: [
      "학급, 교사, 원아, 폴더 관리와 권한 정책을 구현하고, 수료 학급의 작성, 편집 제한을 반영했습니다.",
      "원아별 반복 조회를 목록 요청으로 통합하고, 캐시 활용 구간과 갱신 흐름을 정리했습니다.",
      "놀이계획 캔버스 편집기에 실측 기반 인쇄 분할을 적용하고, PDF, 한글, Word, Excel, PPT 미리보기를 구현했습니다.",
      "관찰기록 대시보드와 레이더차트, 토스페이 결제, 통합로그인(SSO) 흐름을 구현했습니다.",
    ],
    results: [
      "반복 호출을 줄이고, 데이터 변경 후에도 화면의 기록이 일관되게 표시되도록 했습니다.",
      "기관 정책, 문서 편집, AI 활용, 관찰기록 확인이 하나의 업무 흐름으로 이어지도록 했습니다.",
    ],
    shots: [
      {
        src: kinderboard,
        alt: "킨더보드 홈의 AI 비서 입력창, AI 갤러리, AI 기능 메뉴, 우리반 원아 관리 화면",
      },
    ],
  },
  {
    slug: "little-homerun",
    title: "리틀홈런 생활기록부",
    period: "2026.03 ~ 2026.05",
    company: "아이스크림에듀",
    role: "프론트엔드 개발 및 운영",
    summary:
      "영유아 학습, 행동 데이터를 주간, 월간 대시보드와 상세 리포트로 제공하는 학습 분석 서비스",
    stack: ["Next.js App Router", "React", "TypeScript", "Zustand", "React Query", "SCSS"],
    problems: [
      "학습, 행동 데이터를 상담교사가 빠르게 읽을 수 있는 대시보드와 리포트로 보여줘야 했습니다.",
    ],
    approaches: [
      "주간, 월간 대시보드와 상세 리포트의 UI를 설계부터 구현까지 맡았습니다.",
      "리포트와 차트 공통 로직을 커스텀 Hooks로 분리했습니다.",
      "React Query로 조회, 캐싱, 로딩 상태를 관리하고, Zustand로 화면 간 공유 상태를 구성했습니다.",
      "태블릿, PC 반응형 UI와 상담교사 전용 백오피스를 구현했습니다.",
    ],
    results: [
      "학생별 학습 패턴 조회, 상세 리포트 확인, 상담 이력 관리를 한 인터페이스에서 지원했습니다.",
    ],
    shots: [
      {
        src: littleHomerun,
        alt: "리틀홈런 AI생활기록부의 주간 대시보드와 월간 출석, 주간 수행 현황 차트",
      },
    ],
  },
  {
    slug: "dreamssam",
    title: "중등 AI 드림쌤",
    period: "2025.05 ~ 2025.12",
    company: "아이스크림에듀",
    role: "프론트엔드 개발 및 운영",
    summary: "음성, LLM, 2D 캐릭터(Unity WebGL)를 결합한 중학생 대상 AI 멘토링 서비스",
    stack: [
      "Next.js App Router",
      "React",
      "TypeScript",
      "Unity WebGL",
      "OpenAI Whisper (STT)",
      "Zustand",
      "React Query",
      "SCSS",
    ],
    problems: [
      "음성 입력, STT, LLM 응답, TTS 출력, 캐릭터 반응이 끊기지 않고 순환되는 대화 흐름이 필요했습니다.",
      "Unity WebGL은 초기 리소스가 커서 진입할 때마다 로딩 부담이 있었습니다.",
    ],
    approaches: [
      "음성 대화 파이프라인을 UI 상태 흐름으로 모델링하고, Unity 캐릭터 이벤트를 받아 표정, 모션과 연동했습니다.",
      "Zustand 전역 상태를 음성 상태, UI 상태, Unity 연동 상태로 나눠 관리했습니다.",
      "음성 입력, 대화 상태, API 인터랙션 로직을 커스텀 Hooks로 분리했습니다.",
      "캐시 컨트롤과 로딩 흐름을 설계했습니다.",
    ],
    results: [
      "음성 입력부터 캐릭터 반응까지 이어지는 실시간 상담 UI를 구현하고, 상담 이력과 예약 기능을 연결했습니다.",
      "재접속 시 캐싱된 리소스를 사용해 반복 다운로드 없이 진입하도록 했습니다.",
    ],
    shots: [
      {
        src: dreamssam,
        alt: "AI 드림쌤 상담 메인, Unity WebGL 캐릭터와의 음성 상담, 지난 이야기, 이야기 노트 화면",
      },
    ],
    diagram: "voice-loop",
  },
  {
    slug: "middle-school-record",
    title: "중등 AI 생활기록부",
    period: "2025.01 ~ 2025.02",
    company: "아이스크림에듀",
    role: "프론트엔드 개발 및 운영",
    summary: "중학생의 학습 이력과 AI 분석 결과를 주간, 누적 리포트로 제공하는 대시보드형 서비스",
    stack: [
      "Next.js App Router",
      "React",
      "TypeScript",
      "React Query",
      "Zustand",
      "Chart.js",
      "SCSS",
      "styled-components",
    ],
    problems: ["종류가 다양한 학습 데이터를 대시보드와 리포트 단위로 일관되게 보여줘야 했습니다."],
    approaches: [
      "대시보드와 상세 리포트 UI 구조를 설계하고, Chart.js로 주간 학습 데이터를 시각화했습니다.",
      "컴포넌트 계층을 정리하고 리포트와 차트 공통 로직을 Hooks와 공통 컴포넌트로 분리했습니다.",
      "맞춤형 학습 웹뷰와 연동했습니다.",
    ],
    results: [
      "학생별 학습 패턴을 확인하고 맞춤형 학습으로 이어지는 데이터 중심 인터페이스를 만들었습니다.",
    ],
    shots: [
      {
        src: middleSchoolRecord,
        alt: "중등 AI생활기록부의 학습 분석 대시보드, 과목별 화면, 학습 태도, 오답노트 리포트",
      },
    ],
  },
  {
    slug: "ai-textbook",
    title: "AI 디지털교과서 교사용 대시보드와 챗봇",
    period: "2023.11 ~ 2024.10",
    company: "아이스크림에듀",
    role: "프론트엔드 개발 및 운영",
    summary:
      "학생 학습 데이터 기반 맞춤 학습 지원, AI 문제 추천, 생활기록부 작성을 돕는 교사용 도구",
    stack: [
      "Next.js App Router",
      "React",
      "TypeScript",
      "SWR",
      "Chart.js",
      "next-intl",
      "WebSocket",
      "RecordRTC",
      "SCSS",
      "html2canvas",
    ],
    problems: [
      "음성 질문은 녹음이 끝난 뒤 전체 파일을 보내는 방식이라, 녹음 종료 후에야 STT 처리가 시작됐습니다.",
      "교사가 학습 현황 확인부터 리포트 저장까지 한 흐름으로 처리할 수 있어야 했습니다.",
    ],
    approaches: [
      "백엔드와 협의해 녹음 중에 데이터를 나눠 보내는 WebSocket 청크 전송으로 바꿨습니다.",
      "문제 풀이 가이드, 사용법 안내, 실시간 질의응답, 페이지 이동을 지원하는 멀티 기능 챗봇을 만들었습니다.",
      "화면 캡처, PDF 저장 기능과 next-intl 다국어, 웹 접근성을 적용했습니다.",
    ],
    results: [
      "녹음 종료 시점에 이미 대부분의 데이터가 전달돼, 녹음 직후 응답 처리를 시작하도록 했습니다.",
      "학습 현황 확인, 음성 질의응답, 리포트 저장과 공유가 이어지는 교사용 업무 도구를 만들었습니다.",
    ],
    shots: [
      {
        src: aiTextbookDashboard,
        alt: "AI 디지털교과서 교사용 대시보드의 수업 달력, 학습 수준별 학생 분포, 개념 맵",
      },
      {
        src: aiTextbookChatbot,
        alt: "AI 디지털교과서 챗봇의 학습 이력 질의응답 화면",
      },
    ],
    diagram: "chunk-upload",
  },
];

export const otherWorks: OtherWork[] = [
  {
    title: "챗봇 체험단 (PoC)",
    period: "2023.09 ~ 2023.10",
    description:
      "홈런 학습기에서 GPT 기반 학습 가이드 챗봇을 검증한 PoC입니다. 여기서 만든 채팅 UI 구조를 교사용 챗봇과 드림쌤 음성 상담으로 확장했습니다.",
    stack: ["Next.js Pages Router", "React", "TypeScript", "React Query"],
    shot: { src: chatbotPoc, alt: "홈런 챗봇 체험의 과목별 대화 목록과 채팅 화면" },
  },
  {
    title: "내 나무 숲",
    period: "2022.08 ~ 2023.02",
    description:
      "독서, 학습 미션과 보상을 연결하고 활동에 따라 나무가 자라는 서비스입니다. Redux-Saga로 비동기 흐름을 관리하고, Lottie 보상 애니메이션과 WebView 앱 연동을 구현했습니다.",
    stack: ["React", "Redux", "Redux-Saga", "Swiper", "Lottie"],
    shot: { src: myTreeForest, alt: "내 나무 숲의 나무 성장 화면과 독서 미션, 보상 화면" },
  },
  {
    title: "AI 생활기록부 (초등)",
    period: "2022.05 ~ 2022.12",
    description:
      "Vue로 만든 학습 분석 화면과 React로 만든 학습 유형, 상장 화면을 통합 대시보드 안에서 iframe으로 연동했습니다. 구형 Chromium WebView에 맞춰 Webpack 빌드 설정과 폴리필을 조정했습니다.",
    stack: ["Vue", "Vuex", "React", "Redux-Saga", "Chart.js"],
    shot: { src: elementaryRecord, alt: "초등 AI 생활기록부의 학습 분석 대시보드와 차트" },
  },
];

export const foundation = {
  company: "아이디스",
  period: "2017.12 ~ 2022.02",
  lead: "웹 바깥의 시스템까지 이해하게 된 첫 4년입니다.",
  groups: [
    {
      title: "IP카메라 애플리케이션과 펌웨어",
      items: [
        "HiSilicon, Ambarella SoC 기반 카메라의 기능 개발, 신규 모델 SDK 포팅",
        "Video Encoder 오류 디버깅, 주야간 자동 전환(DN Level) 튜닝, OSD, GPIO 제어",
        "QA 대응, 펌웨어 빌드와 배포",
      ],
      stack: ["C", "C++", "Linux"],
    },
    {
      title: "IP카메라 관리자 웹",
      items: [
        "신규 모델 관리자 페이지 개발, 실시간 영상 위 이벤트 감지 영역 설정",
        "XML 설정값 Import, Export, html2canvas 화면 저장",
        "YUI Compressor로 정적 리소스 경량화",
      ],
      stack: ["HTML", "CSS", "JavaScript", "jQuery"],
    },
  ],
};
