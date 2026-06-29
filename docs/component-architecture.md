# 컴포넌트 구조

## 현재 페이지 권장 구조

현재 홈페이지는 아래 순서로 단순하게 정리하는 것을 기준으로 합니다.

1. 첫 화면
2. 주요 품목 및 제작 서비스
3. 문의 및 진행 안내
4. 회사 정보

## 섹션 정리 원칙

### 삭제 대상

- 브랜드를 따로 설명하는 장식성 블록
- 사용자 행동에 직접 도움을 주지 않는 보조 카드
- 같은 정보를 반복 설명하는 요약 섹션

### 병합 대상

- `AudienceSection`은 별도 섹션보다 첫 화면 보조 문구로 흡수하는 쪽을 우선 검토합니다.
- `ServicesSection`과 `ProductionSection`은 사용자가 보기 쉽게 하나의 큰 범주 안에서 재구성할 수 있습니다.

### 유지 대상

- `Hero`
- `ContactSection`
- `Footer`
- 필요한 경우 압축된 `ProcessSection`

## 파일 책임

### 데이터

- `src/data/siteContent.js`
  - 회사 정보
  - 히어로 카피
  - 메뉴
  - 품목/서비스 데이터
  - 문의 체크리스트

### 레이아웃

- `src/components/layout/Header.jsx`
  - 로고
  - 메뉴
  - 상단 문의 동선

- `src/components/layout/Footer.jsx`
  - 회사 기본 정보
  - 사업자 정보
  - 로고 보조 노출

### 섹션

- `src/components/sections/Hero.jsx`
  - 핵심 메시지
  - 문의 CTA
  - 보조 정보 요약

- `src/components/sections/ServicesSection.jsx`
  - 주요 품목 및 서비스 정리

- `src/components/sections/ProductionSection.jsx`
  - 제작 서비스 정리
  - 필요 시 Services와 병합 검토

- `src/components/sections/ProcessSection.jsx`
  - 문의 진행 흐름
  - 길면 축약

- `src/components/sections/ContactSection.jsx`
  - 연락처
  - 문의 체크리스트

### 공통 UI

- `src/components/ui/LogoMark.jsx`
  - 컬러/화이트/블랙 로고 공통 처리

- `src/components/ui/Section.jsx`
  - 섹션 제목, 여백, 톤 처리

- `src/components/ui/button.jsx`
- `src/components/ui/badge.jsx`
  - 버튼과 배지 스타일 규칙 관리

## 수정 우선순위

1. 사용자에게 불필요한 섹션 제거
2. 내부용 문구 제거
3. 로고와 핵심 메시지의 가독성 정리
4. 품목/문의 정보 중심으로 구조 재배치
