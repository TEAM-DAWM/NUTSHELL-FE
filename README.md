<div align="center">

# NutShell

> 『Sopt 34기』 앱잼 진행을 위한 FE 저장소입니다.

</div>
<p align="center">
  <img src="https://github.com/TEAM-DAWM/NUTSHELL-FE/assets/151596186/b1f70018-9c9c-4bcc-a072-9d3b045343df" width=250px>
</p>
<div align="center">
  
        다양한 일을 해내야 하는 당신을 위해, 일상을 관리하는 새로운 방법

</div>
  
## 💻 Developers

<table>
      <tr align="center">
       <td>유승연<br/>
      </td>
       <td>문성희<br/>
      </td>
       <td>김지원<br/>
      </td>
      <td>이지민<br/>
      </td>
    </tr>
    <tr align="center">
      <td style="min-width: 150px;">
            <a href="https://github.com/wrryu09">
              <img src="https://avatars.githubusercontent.com/u/98469609?v=4" width="200" alt="깃허브계정-프로필사진">
              <br />
            </a>
        </td>
      <td style="min-width: 150px;">
            <a href="https://github.com/seong-hui">
              <img src="https://avatars.githubusercontent.com/u/52481403?v=4" width="200" alt="깃허브계정-프로필사진">
              <br />
            </a>
        </td>
      <td style="min-width: 150px;">
            <a href="https://github.com/Kjiw0n">
              <img src="https://avatars.githubusercontent.com/u/128016888?v=4" width="200" alt="깃허브계정-프로필사진">
              <br />
            </a>
        </td>
      <td style="min-width: 150px;">
            <a href="https://github.com/jeeminyi">
              <img src="https://avatars.githubusercontent.com/u/151596186?v=4" width="200" alt="깃허브계정-프로필사진">
              <br />
            </a>
        </td>
    </tr>
    <tr align="center">
       <td>
            FE Developer <br/>
      </td>
       <td>
            FE Developer <br/>
      </td>
       <td>
            FE Developer <br/>
      </td>
      <td>
            FE Developer <br/>
      </td>
    </tr>
</table>

  
## ⚒️ 기술 스택

<table>
      <tr align="center">
       <td>Category<br/>
      </td>
       <td>Stack<br/>
      </td>
      </td>
    </tr>
    <tr align="center">
       <td>Package Manager<br/>
      </td>
       <td><img src="https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white"><br/>
      </td>
    </tr>
      <tr align="center">
       <td>Language<br/>
      </td>
       <td>
         <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"><br/>
      </td>
    </tr>
        <tr align="center">
       <td>Build<br/>
      </td>
       <td>
         <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white"><br/>
      </td>
    </tr>
        <tr align="center">
       <td>Framework<br/>
      </td>
       <td>
         <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"><br/>
      </td>
    </tr>
          <tr align="center">
       <td>Style<br/>
      </td>
       <td>
         <img src="https://img.shields.io/badge/emotion-3776AB?style=for-the-badge&logo=emotion&logoColor=white"><br/>
      </td>
    </tr>
              <tr align="center">
       <td>Data Fetching<br/>
      </td>
       <td>
         <img src="https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white">
         <img src="https://img.shields.io/badge/axios-3776AB?style=for-the-badge&logo=axios&logoColor=white">
      </td>
    </tr>
              <tr align="center">
       <td>Formatting<br/>
      </td>
       <td>
         <img src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white">
        <img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E">
         <img src="https://img.shields.io/badge/stylelint-000?style=for-the-badge&logo=stylelint&logoColor=white">
      </td>
    </tr>
</table>

  
## 📄 컨벤션 및 브랜치 전략
[웹수레의 컨벤션](https://topaz-work-262.notion.site/2-a73cfb581f9140ac8e93772df0696f36#f070928368a148cbbee58b1018451aa7)

<h3>Commit Convention</h3>

```
- init: 초기 세팅
- feat: 새로운 기능 추가 (새로운 구현) 
- fix: 버그 수정 
- docs: 문서 추가, 수정, 삭제 
- style: UI 디자인 변경  
- refactor: 코드 리팩토링 
- chore: 그 외 자잘한 수정, 코드 포맷팅(코드 순서 변경, 세미콜론 추가) (주석 삭제)
```

<h3>Issue / Pull Request Convention</h3>

```
[종류] 작업 이름
ex) [FEAT] 회원가입 구현 및 이메일 본인인증, 비밀번호 찾기
```
`담당자`, `라벨` 추가하기

<h3>Git Branch</h3>

GitHub-flow 전략을 사용





<img width="271" alt="스크린샷 2024-07-05 오후 2 30 02" src="https://github.com/TEAM-DAWM/NUTSHELL-FE/assets/151596186/3d0e02d8-dbf7-4217-9bc5-7e64e86d6c4b">

```
- main : 배포용
- develop : 작업용
- feature : feature/#{issue-number}/{feature-name}
- fix : fix/#{issue-number}/{feature-name}
```

## 📁 폴더 구조

```
├── 📁 node_modules
├── 📁 public
└── 📁 src
    ├── 📁 assets
    │   ├── 📁 images
    │   └── 📁 icons
    ├── 📁 components
    │   ├── 📁 commons
    │   └── 📁 APage
    │      └── APageBtn.tsx
    ├── 📁 hooks
    │   └── useClickOutside.tsx
    ├── 📁 apis
    │   └── 📁 APage
    ├── 📁 constants
    │   └── 📁 APage
    ├── 📁 types
    │   └── 📁 APage
    ├── 📁 pages
    │   ├── APage.tsx
    │   ├── BPage.tsx
    │   └── CPage.tsx
    └── 📁 styles
        ├── GlobalStyle.tsx
        ├── theme.ts
        └── style.ts
├── App.tsx
├── main.tsx
├── Router.tsx
├── .eslintrc.json
├── .prettierrc
└── .stylelintrc
```

