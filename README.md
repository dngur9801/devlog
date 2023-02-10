# devlog
마크다운 형식으로 블로그를 작성할 수 있는 "Devlog"

## # 프로젝트 설명
> 개발자들을 위한 마크다운 블로그 “Devlog”는 마크다운을 이용하여 손쉽게 블로그를 작성 할 수 있고 게시물을 서로 공유할 수 있는 사이트 입니다. 모든페이지는 반응형으로 제작되었습니다.


## # 프로젝트 배포
- front-end : vercel ([https://www.devlog.shop/](https://www.devlog.shop/))
- back-end : cloudetype
- MariaDB : cloudetype

## # 사용 기술
- front-end : TypeScript, Next.js, react-query, recoil, styled-component, toast-ui
- back-end : express, sequelize
- database : MariaDB

## # 주요 기능
- [x] 로그인
  - 서버측에서 발급한 Session id를 브라우저에 쿠키를 사용해서 저장을 하였고,<br/> 데이터 요청시 쿠키를 header에 포함하여 사용자인증을 할 수 있도록 진행하였습니다.  
  - 로그인 후 새로고침시 CSR로 인한 화면 깜빡임으로 인해 SSR을 적용하여<br/> 서버사이드에서 미리 데이터를 받아온뒤 처리하여 개선하였습니다.
- [x] 게시물 등록 / 수정 / 삭제
  - toast ui 라이브러리를 사용하여 마크다운 형식으로 글을 작성할 수 있도록 구현하였습니다.
- [x] 댓글 등록 / 수정 / 삭제
- [x] 좋아요 기능
- [x] 게시글 인기순 / 최신순 / 북마크 정렬
  - 인기순, 최신순, 좋아요한 게시물만 볼 수 있는 북마크 정렬기능을 구현하였습니다.
- [x] 유저페이지 (유저게시물 조회)
- [x] 설정페이지 (프로필 이미지 수정 / 프로필 닉네임, 소개글 수정 / 블로그 제목 수정 / 회원탈퇴)
- [x] 게시물 검색
  - 스크롤 이벤트에 디바운싱 기법을 적용하여 성능을 개선하였습니다.
- [x] 다크모드
- [x] 공개 범위 설정 (private, public)
  - 게시물을 공개 혹은 비공개 방식으로 설정할 수 있습니다.
- [x] 반응형
  - 모든페이지는 반응형으로 제작하였습니다.
- [x] SEO
  - 구글 검색엔진 최적화를 진행하였습니다. 구글에 검색시 해당사이트가 노출됩니다.
