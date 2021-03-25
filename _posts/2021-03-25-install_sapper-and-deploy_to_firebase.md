---
layout: single
title: "sapper 설치 및 firebase 배포 절차"
---
아래 내용은 sapper를 설치하고 [firebase](https://firebase.google.com/)에 배포하는 절차를 간략하게 정리한 것입니다.

[Sapper](https://sapper.svelte.dev/)는 Svelte.js로 웹앱을 손쉽게 만들 수 있게 해주는 프레임워크인데요. 공식적으론 "[a framework for building extremely high-performance web apps](https://sapper.svelte.dev/docs/#What_is_Sapper)"라고 합니다. 아무튼 sapper 설치 후 firebase에 배포하면 곧바로 자신만의 가볍고 빠른 동적 웹사이트가 생겨납니다. 

[Svelte.js](https://svelte.dev/)는 프론트엔드 프레임워크 중엔 가장 가볍고 빠르면서 코드 역시 간결하기로 타의 추종을 불허하는데요. 지금은 비록 인지도가 낮지만, 장차 압도적인 인기를 얻게 되리라 확신합니다.

아래 내용은 bash에서 실행할 명령 위주로 정리한 것이고, 각 명령줄에 대한 코멘트는 선택적으로 괄호 안에 아주 간략하게 적어뒀습니다. 나중에 sapper로 또 다른 웹앱을 만들 때 이거 보고 그대로 진행하려고 정리한 건데요. 이 절차대로 해보면 웬만해선 별 문제없이 배포까지 될 겁니다.

```bash
1. $ npx degit "sveltejs/sapper-template#rollup" sapper_firebase_v3
2. $ cd sapper_firebase_v3
3. $ git init
4. $ git commit (sapper 템플릿 설치)
5. github에서 repository 신규 생성 (프로젝트명과 동일하게)
6. $ git remote add origin https://github.com/lee-eung/sapper_firebase_v3.git
7. $ git push -u origin master 
8. $ npm install
9. $ npm run dev (로컬 3000포트로 페이지 잘 열리는지 확인)
10. $ npx sapper export (배포를 위한 정적 파일들 생성)
11. $ npx serve __sapper__/export (배포 버전 5000포트로 잘 열리는지 확인)
12. $ firebase init
    ? Which Firebase CLI features ... ? Hosting 선택
    ? Please select an option: "Create a new project" 선택
    ? Please specify a unique project id: sapper-firebase-ver3 (자신이 원하는 유니크할만한 명칭으로)
    ? What would you like to call your project? 그냥 엔터치면 'defaults to your project ID'
    ? What do you want to use as your public directory? dist
    ? Configure as a single-page app (rewrite all urls to /index.html)? No
13. ./package.json 파일의 “scripts“ 부분 수정:
    "build": "sapper export --legacy && cp -R ./__sapper__/export ./dist",
    "prebuild": "rm -rf ./dist",
    "start": "npm run build && firebase serve",
    "predeploy": "npm run build",
    "deploy": "firebase deploy",
14. $ npm start (배포를 위한 dist 폴더 재생성 후 5000포트로 잘 열리는지 확인)
15. $ npm run deploy (배포를 위한 dist 폴더 재생성 후 firebase로 정식 배포)
```

초간단 버전:

```bash
1. $ npx degit "sveltejs/sapper-template#rollup" sapper_firebase_v3
2. $ cd sapper_firebase_v3 && npm install
3. $ firebase init
    ? Which Firebase CLI features ... ? Hosting 선택
    ? Please select an option: "Create a new project" 선택
    ? Please specify a unique project id: sapper-firebase-ver3 (자신이 원하는 유니크할만한 명칭으로)
    ? What would you like to call your project? 그냥 엔터치면 'defaults to your project ID'
    ? What do you want to use as your public directory? dist
    ? Configure as a single-page app (rewrite all urls to /index.html)? No
4. ./package.json 파일의 “scripts“ 부분 수정:
    "build": "sapper export --legacy && cp -R ./__sapper__/export ./dist",
    "prebuild": "rm -rf ./dist",
    "start": "npm run build && firebase serve",
    "predeploy": "npm run build",
    "deploy": "firebase deploy",
5. $ npm run deploy (배포를 위한 dist 폴더 재생성 후 firebase로 정식 배포)
```

로컬 테스트:

```bash
$ npx sapper dev
```

[Sapper 프로젝트 템플릿](https://sapper-firebase-ver3.web.app/)