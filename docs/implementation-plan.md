# 광림전산 홈페이지 구현 계획

## 목표

광림전산의 신뢰감 있는 React 단일 페이지 홈페이지를 만든다. 방문자는 첫 화면에서 광림전산이 관공서, 기업체, 개인 고객 모두에게 전산용품, 사무용품, 인쇄물, 판촉물, 산업용 잡자재 납품과 제작 상담을 제공한다는 점을 바로 이해해야 한다.

## 구현 방향

- Vite + React 기반으로 구성한다.
- 스타일은 Tailwind CSS 유틸리티 클래스를 사용한다.
- 사업 정보와 화면 문구는 `src/data/siteContent.js`에서 관리한다.
- 반복되는 UI는 작은 컴포넌트로 분리해 재사용한다.
- 설명과 주석은 한글로 작성한다.
- 명함에서 가려진 휴대전화번호는 포함하지 않는다.

## 기술 스택

- React 19
- Vite
- Tailwind CSS 4
- JavaScript

## 파일 구조

### 문서

- `AGENTS.md`
  - 프로젝트 작업 규칙과 문서 목차를 정리한다.

- `design.md`
  - 사이트의 디자인 방향, 고객 유형, 페이지 구조, 신뢰 전략을 정리한다.

- `docs/content-strategy.md`
  - 핵심 문구, 고객별 메시지, 취급 품목, 연락처 기준을 정리한다.

- `docs/component-architecture.md`
  - 컴포넌트 역할, 데이터 관리 방식, Tailwind 스타일 규칙을 정리한다.

- `docs/implementation-plan.md`
  - 구현 순서와 검증 기준을 정리한다.

### 앱 진입 파일

- `index.html`
  - HTML 기본 문서와 SEO 설명을 관리한다.

- `src/main.jsx`
  - React 앱을 브라우저에 마운트한다.

- `src/App.jsx`
  - Header, Footer, 주요 섹션 컴포넌트를 조립한다.

### 데이터

- `src/data/siteContent.js`
  - 회사명, 대표자, 전화번호, 이메일, 주소, 메뉴, 고객 유형, 취급 품목, 제작 서비스, 문의 체크리스트를 관리한다.

### 레이아웃 컴포넌트

- `src/components/layout/Header.jsx`
  - 상단 브랜드, 메뉴, 전화 문의 버튼을 표시한다.

- `src/components/layout/Footer.jsx`
  - 회사 요약과 주요 연락처를 표시한다.

### 공통 UI 컴포넌트

- `src/components/ui/ButtonLink.jsx`
  - 전화, 이메일, 섹션 이동에 쓰는 링크 버튼을 표시한다.

- `src/components/ui/Section.jsx`
  - 섹션 배경, 여백, 제목 영역을 공통 처리한다.

- `src/components/ui/InfoCard.jsx`
  - 고객 유형과 서비스 카테고리를 카드 형태로 표시한다.

### 페이지 섹션 컴포넌트

- `src/components/sections/Hero.jsx`
  - 첫 화면 핵심 메시지와 주요 문의 버튼을 표시한다.

- `src/components/sections/TrustBar.jsx`
  - 관공서, 기업체, 개인, 제작 서비스 요약을 표시한다.

- `src/components/sections/AudienceSection.jsx`
  - 고객 유형별 안내를 표시한다.

- `src/components/sections/ServicesSection.jsx`
  - 전산용품, 사무용품, 인쇄·제작물, 판촉물, 산업용 잡자재를 표시한다.

- `src/components/sections/ProductionSection.jsx`
  - 현수막, 실사출력, 배너, 전단지, 시트컷팅, 아크릴 레이저 가공을 표시한다.

- `src/components/sections/ProcessSection.jsx`
  - 문의부터 납품까지의 진행 단계를 표시한다.

- `src/components/sections/ContactSection.jsx`
  - 전화, 팩스, 이메일, 주소, 견적 문의 체크리스트를 표시한다.

## 구현 순서

1. 프로젝트 폴더 생성
   - `gwangrim-homepage` 폴더를 만든다.

2. 문서 작성
   - `AGENTS.md`, `design.md`, `docs/content-strategy.md`, `docs/component-architecture.md`, `docs/implementation-plan.md`를 작성한다.

3. Vite React 기본 구조 작성
   - `package.json`, `vite.config.js`, `index.html`, `src/main.jsx`, `src/App.jsx`를 작성한다.

4. 콘텐츠 데이터 작성
   - `src/data/siteContent.js`에 회사 정보와 화면 문구를 작성한다.

5. 공통 UI 작성
   - 버튼, 섹션, 카드 컴포넌트를 만든다.

6. 레이아웃 작성
   - Header와 Footer를 만든다.

7. 섹션 작성
   - Hero, TrustBar, Audience, Services, Production, Process, Contact 섹션을 만든다.

8. Tailwind 스타일 적용
   - JSX에 Tailwind 유틸리티 클래스를 적용한다.
   - `src/styles/global.css`에는 Tailwind import와 최소 기본 스타일만 둔다.

9. 빌드 검증
   - `npm run build`를 실행해 컴파일 오류가 없는지 확인한다.

10. 화면 확인
   - 개발 서버를 실행하고 브라우저에서 데스크톱/모바일 화면을 확인한다.

## 검증 체크리스트

- 첫 화면에 회사명, 핵심 서비스, 견적 문의 버튼, 전화 문의 버튼이 보인다.
- 관공서, 기업체, 개인 고객 모두 문의 가능하다는 내용이 보인다.
- 취급 품목과 제작 서비스가 구분되어 있다.
- 문의 섹션에 전화번호, 팩스, 이메일, 주소가 표시된다.
- 명함에서 가려진 휴대전화번호가 포함되어 있지 않다.
- `npm run build`가 성공한다.
- 모바일에서 가로 스크롤 없이 읽을 수 있다.

## 향후 확장 가능 항목

- 실제 문의 폼 연동
- 제작 사례 갤러리
- 품목 카탈로그 페이지
- 지도 삽입
- 관리자용 콘텐츠 수정 기능
