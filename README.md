---
date_started: 2025.11.05
head_count: 2
role: Full-stack
---

<img alt="Image" src="https://github.com/user-attachments/assets/f6693d95-8245-49e2-b41b-991614701f63" />

## [Find The Octopus](https://find-octopus.com/)

## 개요
오징어 마을에 숨어든 문어를 찾아내는 **멀티플레이어 그림/추리 게임**입니다.  
플레이어는 오징어 또는 문어 역할을 맡으며, 오징어는 제시어를 그림으로 표현하고 문어는 이를 추측해 정체를 숨깁니다.  
실시간 WebSocket 기반으로 라운드 진행, 투표, 결과 집계가 동기화됩니다.

## 사용 기술
- **Frontend**: React 19, TypeScript, Vite
- **State**: Zustand, React Query
- **Routing**: React Router
- **Styling**: Tailwind CSS, tailwind-merge
- **Realtime**: WebSocket
- **i18n**: react-i18next

## 게임 튜토리얼
1. **방 입장/생성**: 랜덤 방 또는 방 코드로 입장하고 라운드 수, 드로잉 시간, 문어 수, 공개/비공개, 사용자 제시어 사용 여부를 설정합니다.
2. **역할/제시어 확인**: 오징어는 동일한 제시어를 받고, 문어는 다른 제시어를 받거나(설정에 따라) 제시어를 모릅니다.
3. **그림 그리기 (Drawing)**
   - 차례가 온 플레이어가 캔버스에 제시어를 그림으로 표현
4. **토론 (Discussion)**
   - 모두가 그림을 보고 문어를 추리
5. **투표 (Voting)**
   - 의심되는 플레이어에게 투표
   - 동점이면 재투표, 재차 동점 시 문어 승리
6. **결과 (Vote Result / Round Result)**
   - 문어 적발 여부와 라운드 점수 공개
7. **문어 추측 (Guessing)**
   - 문어가 제시어를 맞히면 문어 팀 승리
8. **게임 종료 (Game Result)**
   - 누적 점수 기준 최종 순위 공개

## 디렉토리 구조
```
.
├─ public/                # 정적 리소스
├─ src/
│  ├─ apis/                # API/소켓 요청 훅
│  ├─ assets/              # 사운드, 이미지 등 에셋
│  ├─ components/          # UI 컴포넌트
│  ├─ context/             # React Context
│  ├─ hooks/               # 커스텀 훅 (WebSocket 포함)
│  ├─ layouts/             # 레이아웃
│  ├─ locales/             # 다국어 리소스
│  ├─ pages/               # 페이지 및 게임 페이즈 화면
│  ├─ routes/              # 라우팅 정의
│  ├─ store/               # Zustand 스토어
│  ├─ App.tsx              # 앱 루트
│  └─ main.tsx             # 엔트리 포인트
├─ index.html
├─ package.json
└─ vite.config.ts
```
