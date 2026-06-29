# shadcn 컴포넌트 시스템

## MCP 연결 상태

현재 프로젝트는 shadcn MCP가 연결되어 있으며 registry는 `@shadcn`을 사용한다.

MCP로 확인한 기본 UI 항목:

- `@shadcn/button`
- `@shadcn/card`
- `@shadcn/badge`

## 프로젝트 설정

- `components.json`
  - shadcn 프로젝트 설정 파일
  - `style`: `new-york`
  - `tsx`: `false`
  - `css`: `src/styles/global.css`
  - alias: `@/components`, `@/lib/utils`, `@/components/ui`

- `src/lib/utils.js`
  - `cn()` 유틸을 제공한다.
  - `clsx`와 `tailwind-merge`를 사용한다.

## 현재 사용하는 UI 컴포넌트

### Button

파일: `src/components/ui/button.jsx`

용도:

- 주요 견적 문의 버튼
- 전화 문의 버튼
- 이메일 문의 버튼
- 헤더 CTA

variant:

- `default`: 주요 CTA
- `secondary`: 보조 CTA
- `outline`: 헤더와 보조 액션
- `ghost`: 메뉴나 낮은 강조 액션

### Card

파일: `src/components/ui/card.jsx`

용도:

- 고객 유형 카드
- 서비스 카테고리 카드
- 문의 정보 패널
- 체크리스트 패널

### Badge

파일: `src/components/ui/badge.jsx`

용도:

- 취급 품목 태그
- 고객 유형 태그
- 상태성 라벨

variant:

- `default`: 일반 태그
- `brand`: 파란색 강조 태그
- `trust`: 가능 상태, 개인 고객 가능 표시
- `outline`: 낮은 강조 태그

## 작성 규칙

- 새 UI를 만들기 전에 shadcn MCP에서 registry 항목을 검색한다.
- shadcn 기본 컴포넌트를 먼저 사용하고, 필요한 경우 variant만 프로젝트에 맞게 조정한다.
- `className` 조합은 `cn()`으로 병합한다.
- 버튼과 카드는 직접 Tailwind 클래스를 반복해서 만들지 않는다.
- 섹션별 조합은 `src/components/sections`에서 처리한다.

## 향후 추가 후보

- `separator`: 정보 구분선 정리
- `sheet`: 모바일 메뉴가 필요할 때
- `accordion`: FAQ나 품목 상세가 많아질 때
- `form`, `input`, `textarea`: 견적 문의 폼을 붙일 때
- `toast`: 문의 전송 결과 안내가 필요할 때
