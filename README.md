# 🎯 코코바둑 온라인 바둑학원

온라인 프리미엄 바둑 교육 플랫폼

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)
![React](https://img.shields.io/badge/React-19.2.0-61dafb)
![Vite](https://img.shields.io/badge/Vite-7.1.9-646cff)

---

## 📋 목차

- [프로젝트 소개](#-프로젝트-소개)
- [기술 스택](#-기술-스택)
- [시작하기](#-시작하기)
- [배포](#-배포)
- [프로젝트 구조](#-프로젝트-구조)
- [주요 기능](#-주요-기능)
- [문서](#-문서)

---

## 🎓 프로젝트 소개

코코바둑은 온라인 바둑 교육을 제공하는 프리미엄 바둑학원 웹사이트입니다.

### 주요 특징
- 🧠 집중력·판단력·사고력 향상 교육
- 👨‍🏫 원장 직강 (1:1 맞춤 수업 / 1:2 소수정예 수업)
- 🎯 체험수업 신청 시스템
- 📱 모바일/데스크톱 완벽 지원
- 🌍 다국어 지원 (i18n)
- ⚡ 최적화된 성능

---

## 🛠 기술 스택

### Frontend
- **Framework**: React 19.2.0
- **Build Tool**: Vite 7.1.9
- **Language**: TypeScript 5.8.3
- **Styling**: Tailwind CSS 3.4.18
- **Routing**: React Router DOM 7.9.4
- **i18n**: react-i18next 15.7.4

### Development Tools
- **Linting**: ESLint 9.37.0
- **Auto Import**: unplugin-auto-import 19.3.0
- **Code Quality**: TypeScript ESLint 8.46.0

### Deployment
- **Hosting**: Vercel
- **Version Control**: Git & GitHub

---

## 🚀 시작하기

### 필수 요구사항
- Node.js 18.x 이상
- npm 또는 yarn

### 설치

```bash
# 저장소 클론
git clone git@github.com:psycodevsun/cocobaduk_org.git
cd cocobaduk_org

# 의존성 설치
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 http://localhost:3000 접속

### 빌드

```bash
# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

### 코드 품질 검사

```bash
# ESLint 실행
npm run lint

# ESLint 자동 수정
npm run lint:fix
```

---

## 🌐 배포

### Vercel 배포 (자동)

1. Vercel 계정 연동
2. GitHub 저장소 연결
3. 자동 배포 설정 완료

```bash
# main 브랜치에 푸시하면 자동 배포
git push origin main
```

### 수동 배포

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel

# 프로덕션 배포
vercel --prod
```

### 가비아 도메인 연결

상세한 DNS 설정 방법은 [GABIA_DNS_SETUP.md](./GABIA_DNS_SETUP.md) 참고

---

## 📁 프로젝트 구조

```
cocobaduk_org/
├── public/                 # 정적 파일
│   ├── images/            # 이미지 파일 (9.1MB)
│   ├── robots.txt         # 검색엔진 크롤러 설정
│   └── sitemap.xml        # 사이트맵
├── src/
│   ├── components/        # 재사용 컴포넌트
│   │   └── feature/       # 기능별 컴포넌트
│   │       └── Navbar.tsx # 네비게이션 바
│   ├── i18n/              # 다국어 설정
│   │   ├── index.ts       # i18n 초기화
│   │   └── local/         # 번역 파일
│   ├── pages/             # 페이지 컴포넌트
│   │   ├── home/          # 홈페이지
│   │   │   ├── page.tsx   # 메인 페이지
│   │   │   └── components/ # 홈 섹션 컴포넌트
│   │   │       ├── Hero.tsx              # 히어로 섹션
│   │   │       ├── Features.tsx          # 특징 섹션
│   │   │       ├── WhyOnline.tsx         # 온라인 교육 장점
│   │   │       ├── BrainDevelopment.tsx  # 두뇌 발달
│   │   │       ├── OnlineAdvantages.tsx  # 온라인 장점
│   │   │       ├── Instructor.tsx        # 강사 소개
│   │   │       ├── Curriculum.tsx        # 커리큘럼
│   │   │       ├── LearningProcess.tsx   # 학습 과정
│   │   │       ├── Pricing.tsx           # 가격 정보
│   │   │       ├── Testimonials.tsx      # 후기
│   │   │       ├── Reviews.tsx           # 리뷰
│   │   │       ├── CTA.tsx               # 행동 유도
│   │   │       └── Footer.tsx            # 푸터
│   │   └── NotFound.tsx   # 404 페이지
│   ├── router/            # 라우팅 설정
│   │   ├── config.tsx     # 라우트 설정
│   │   └── index.ts       # 라우터 초기화
│   ├── App.tsx            # 앱 루트 컴포넌트
│   ├── main.tsx           # 엔트리 포인트
│   ├── index.css          # 글로벌 스타일
│   └── vite-env.d.ts      # Vite 타입 정의
├── eslint.config.js       # ESLint 설정
├── tailwind.config.ts     # Tailwind CSS 설정
├── tsconfig.json          # TypeScript 설정
├── vite.config.ts         # Vite 설정
├── vercel.json            # Vercel 배포 설정
├── package.json           # 프로젝트 의존성
├── GABIA_DNS_SETUP.md     # 가비아 DNS 설정 가이드
├── DEPENDENCIES_UPDATE_NOTES.md # 종속성 업데이트 가이드
└── README.md              # 프로젝트 문서
```

---

## ✨ 주요 기능

### 1. 반응형 디자인
- 모바일, 태블릿, 데스크톱 완벽 지원
- Tailwind CSS를 활용한 모던한 UI

### 2. SEO 최적화
- 메타 태그 최적화
- Open Graph & Twitter Card 지원
- Sitemap & Robots.txt 제공
- Schema.org JSON-LD 마크업

### 3. 성능 최적화
- Vite 빌드 최적화
- 이미지 로컬 호스팅 (CDN 의존성 제거)
- 코드 스플리팅
- 빠른 초기 로딩 속도

### 4. 다국어 지원
- react-i18next 통합
- 한국어 기본 지원
- 추가 언어 확장 가능

### 5. 자동 Import
- React Hooks 자동 import
- React Router 자동 import
- 개발 생산성 향상

---

## 📚 문서

- [가비아 DNS 설정 가이드](./GABIA_DNS_SETUP.md)
- [종속성 업데이트 노트](./DEPENDENCIES_UPDATE_NOTES.md)

---

## 🎨 디자인

### 컬러 스킴
- Primary: Teal (#14B8A6)
- Secondary: Amber (#F59E0B)
- Background: Warm Beige (#F8EEE2)
- Text: Gray (#1F2937)

### 폰트
- Primary: System Font Stack
- Special: Pacifico (로고)
- Icons: Remix Icon

---

## 📊 프로젝트 상태

### 빌드 정보
- ✅ 빌드 시간: ~660ms
- ✅ 번들 크기: ~270KB (gzip: 82KB)
- ✅ CSS 크기: ~21KB (gzip: 4.4KB)

### 코드 품질
- ✅ TypeScript 에러: 0개
- ✅ ESLint 에러: 0개
- ✅ 보안 취약점: 0개

---

## 🔧 환경 변수

현재 환경 변수 없이 작동합니다.

추후 추가될 수 있는 환경 변수:
```bash
# .env.local (예시)
VITE_API_URL=https://api.example.com
VITE_GOOGLE_ANALYTICS_ID=GA-XXXXXXXXX
```

---

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 라이선스

This project is private and proprietary.

---

## 📞 연락처

**코코바둑 온라인 바둑학원**
- 전화: 010-6753-8985
- 카카오톡: [상담 문의]
- 이메일: [이메일 주소]

---

## 🙏 감사의 말

이 프로젝트는 다음 오픈소스 프로젝트들을 사용합니다:
- React
- Vite
- Tailwind CSS
- TypeScript
- React Router
- i18next

---

**Made with ❤️ for Korean Baduk Education**
