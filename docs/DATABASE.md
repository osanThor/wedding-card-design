# Supabase 데이터 구조

초기 MVP는 Supabase Auth, PostgreSQL, Storage를 기준으로 설계한다.

소셜 로그인은 Supabase Auth provider를 사용하고, `profiles.provider`에 최초 가입 provider를 저장한다.

하나의 `invitations` 레코드는 예식 정보의 원본 데이터 역할을 한다. 클래식 청첩장, 게임식 청첩장, 여행 티켓형 청첩장처럼 같은 정보를 다르게 보여주는 결과물은 `invitation_variants`로 분리해 관리한다.

## Tables

### profiles

- id uuid primary key, auth.users 참조
- name text
- email text
- provider text
- created_at timestamptz

### invitations

- id uuid primary key
- user_id uuid references profiles(id)
- slug text unique
- title text
- groom_name text
- bride_name text
- wedding_date timestamptz
- wedding_hall text
- address text
- template_id text
- theme_color text
- is_published boolean
- created_at timestamptz
- updated_at timestamptz

### invitation_variants

- id uuid primary key
- invitation_id uuid references invitations(id)
- type text
- template_id text
- slug text unique
- title text
- is_published boolean
- og_image_url text
- settings jsonb
- created_at timestamptz
- updated_at timestamptz

### invitation_sections

- id uuid primary key
- invitation_id uuid references invitations(id)
- variant_id uuid references invitation_variants(id), nullable
- type text
- sort_order integer
- is_visible boolean
- content jsonb

### invitation_images

- id uuid primary key
- invitation_id uuid references invitations(id)
- section_id uuid references invitation_sections(id)
- image_url text
- sort_order integer

### guestbook_entries

- id uuid primary key
- invitation_id uuid references invitations(id)
- name text
- message text
- password_hash text
- is_hidden boolean
- created_at timestamptz

### accounts

- id uuid primary key
- invitation_id uuid references invitations(id)
- side text
- bank_name text
- account_number text
- holder_name text

### rsvps

- id uuid primary key
- invitation_id uuid references invitations(id)
- name text
- attendance text
- meal boolean
- companion_count integer
- message text
- created_at timestamptz

### guest_interactions

- id uuid primary key
- invitation_id uuid references invitations(id)
- variant_id uuid references invitation_variants(id), nullable
- type text
- guest_name text, nullable
- payload jsonb
- created_at timestamptz

예시:

- 이모지 리액션
- 게임 결과
- 퀴즈 정답 여부
- 공유 완료 이벤트
- 지도 열기, 계좌 복사 같은 행동 로그
