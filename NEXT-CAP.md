# 초기화
* 생성
```
npx create-next-app@latest
```
use experimental `app/` directory with this project? No (page router)
* next.config.js 설정
```
const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  swcMinify: true,
  images: {
    unoptimized: true
  },
};
```
* next build & export
```
"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "static": "next build && next export" // 추가
},
```
* capacitor 설치
```
npm install -save @capacitor/core
npm install -save -D @capacitor/cli
```
* capacitor 초기화
```
npx cap init --web-dir=out
```
* android 플랫폼 추가
```
npm install -save @capacitor/android
npx cap add android
```

# 실행 및 배포
```
npm run static
npx cap sync
npx cap open android
```
