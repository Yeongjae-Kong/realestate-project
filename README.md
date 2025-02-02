# Real Estate Platform (부동산 중개 서비스) 🏠
https://realestate-project-two.vercel.app/

## Introduction (소개)
React와 TypeScript를 기반으로 한 부동산 중개 서비스. Vite를 통한 개발 환경 구축, vercel을 통한 배포 및 Supabase를 통한 백엔드 서비스 제공

## Tech Stack (기술 스택) 🛠

- ### **Frontend**
 - React
 - TypeScript 
 - Vite

- ### **Backend & Database**
 - Supabase
   
- ### **Deployment**
 - Vercel

## Project Structure (프로젝트 구조) 📁

```bash
src/
├── components/         # 재사용 가능한 컴포넌트
│   ├── ui/            # UI 공통 컴포넌트
│   ├── Navigation.tsx # 네비게이션 컴포넌트
│   └── PropertyCard.tsx # 매물 카드 컴포넌트
├── hooks/             # 커스텀 훅
│   ├── use-mobile.tsx # 모바일 환경 감지 훅
│   └── use-toast.ts   # 토스트 알림 훅
├── lib/               # 유틸리티 및 설정
│   ├── supabase.ts    # Supabase 설정
│   └── utils.ts       # 유틸리티 함수
└── pages/             # 페이지 컴포넌트
   ├── Index.tsx      # 메인 페이지
   ├── Location.tsx   # 탭1, 2, 3
   ├── Properties.tsx 
   └── Reservation.tsx
```

Made with YeongjaeKong
