# Wedding Card Design

사용자가 직접 모바일 청첩장을 만들고 공유하는 웹앱입니다.

일반적인 모바일 청첩장뿐 아니라 게임식 초대장, 여행권형 초대장, 스토리북, 하객 참여형 롤링페이퍼처럼 보는 사람도 함께 참여하는 초대 경험을 지향합니다.

## Tech Stack

- Next.js 15 App Router
- React 19 + TypeScript
- Tailwind CSS 4
- Supabase Auth, Database, Storage
- Zustand, React Hook Form, Zod

## Getting Started

```bash
yarn install
yarn dev
```

`.env.local`은 `.env.example`을 복사해서 채워주세요.

## MVP Scope

- 간편 로그인
- 청첩장 생성, 수정, 삭제
- 템플릿 선택과 섹션 켜기/끄기
- 이미지 업로드와 갤러리
- 지도와 오시는 길
- 계좌번호 복사
- 방명록
- 공유 링크와 공개 청첩장 페이지
- 하객 이모지 리액션
- 게임식 인터랙션 1종
- 여행권형 템플릿 1종

자세한 제품 기획과 데이터 구조는 [docs/PRODUCT_PLAN.md](docs/PRODUCT_PLAN.md), [docs/DATABASE.md](docs/DATABASE.md)를 참고하세요.
