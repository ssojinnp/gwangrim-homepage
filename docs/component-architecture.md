# 컴포넌트 구조

## 데이터 관리

수정 가능한 사업 정보와 화면 문구는 `src/data/siteContent.js`에서 관리한다.

컴포넌트는 이 데이터를 import해서 화면에 표시한다. 이렇게 하면 전화번호, 주소, 취급 품목을 JSX 파일 여러 곳에서 찾지 않아도 된다.

## 레이아웃 컴포넌트

- `src/components/layout/Header.jsx`
  - 상단 브랜드, 메뉴, 전화 문의 버튼을 담당한다.

- `src/components/layout/Footer.jsx`
  - 하단 회사 요약과 주요 연락처를 담당한다.

## UI 컴포넌트

- `src/components/ui/ButtonLink.jsx`
  - 전화, 이메일, 섹션 이동 버튼에 쓰는 링크형 버튼이다.

- `src/components/ui/Section.jsx`
  - 섹션 여백, 배경 톤, 제목 영역을 공통 처리한다.

- `src/components/ui/InfoCard.jsx`
  - 고객 유형, 서비스 카테고리, 태그 목록을 카드 형태로 표시한다.

## 섹션 컴포넌트

- `Hero.jsx`: 첫 화면 핵심 메시지와 주요 문의 버튼
- `TrustBar.jsx`: 짧은 신뢰 포인트
- `AudienceSection.jsx`: 고객 유형별 안내
- `ServicesSection.jsx`: 취급 품목 안내
- `ProductionSection.jsx`: 제작 서비스 안내
- `ProcessSection.jsx`: 문의와 납품 진행 방식
- `ContactSection.jsx`: 연락처와 견적 문의 체크리스트

## 스타일 규칙

- 스타일은 Tailwind 유틸리티 클래스를 우선 사용한다.
- 전역 CSS는 Tailwind import와 최소한의 기본 스타일만 둔다.
- 반복되는 버튼, 카드, 섹션 스타일은 UI 컴포넌트 내부에서 관리한다.
- 컴포넌트마다 역할을 작게 유지하고, 복잡한 화면 조합은 섹션 컴포넌트에서 처리한다.

## 확장 가능성

현재 구조에서 다음 기능을 추가할 수 있다.

- 품목 카탈로그 페이지
- 문의 폼 연동
- 제작 사례 갤러리
- 지도 삽입
- 관리자용 콘텐츠 수정 기능
