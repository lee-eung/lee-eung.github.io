---
layout: single
title: "Svelte로 한글 검색어 자동완성 구현하기"
---
아래 내용은 Svelte로 한글 검색어 자동완성 페이지를 만드는 절차입니다.

```bash
1. $ npx degit sveltejs/template svelte-korean-autocomplete
2. $ cd svelte-korean-autocomplete
3. $ npm install
4. $ npm install hangul-js  (Hangul.js 라이브러리 설치)
5. $ code .         (VSCode 실행, KoreanAutocomplete.svelte 작성)
6. $ npm run dev    (로컬 3000포트로 페이지 열어서 확인)
```

로컬 테스트:
```bash
$ npx sapper dev
```
<a href="https://lee-eung.github.io/svelte/korean-autocomp/" target="_blank">Svelte로 만든 한글 검색어 자동완성 페이지</a>
