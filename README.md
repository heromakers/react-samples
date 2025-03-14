# react-samples

## features
### mobile with login
### agency with login
### admin console with login

## techs
### vercel nextjs
https://vercel.com/

### vite
```
npm create vite@latest 
```

### framework7
```
$ npm install -g cordova framework7-cli
```
```
mkdir frwk7
cd frwk7
framework7 create
```
- react
- core with vite
- core without vite

### react basic : agency
```
npx create-react-app basic
```

### react typescript : admin
```
npx create-react-app types --template typescript
```

### ionic, capicitor (with typescript) : mobile
```
ionic start ioni-cap

npm i @capacitor/core –save
npm i -D @capacitor/cli –save

npx cap init

npm i @capacitor/android @capacitor/ios –save

npx cap add android

npm run build
npx cap copy
npx cap sync android
```

### react, capicitor (with typescript) : mobile
```
npx create-react-app type-cap --template typescript

npm i @capacitor/core –save
npm i -D @capacitor/cli –save

npx cap init

npm i @capacitor/android @capacitor/ios –save

npx cap add android

npm run build
npx cap copy
npx cap sync android
```

### react graphql (with typescript) : agency
```
npx create-react-app graphql-type --template typescript

npm i -s @apollo/client graphql (apollo-boost @apollo/react-hooks )
npm i -s -D @graphql-codegen/cli, ...
```

### next (with typescript) : admin
```
npx create-next-app --ts

npm run dev
npm run build
npm run start
```

### next graphql (with typescript) : admin
```
npx create-next-app --ts

npm i -s @apollo/client graphql (apollo-boost @apollo/react-hooks )
npm i -s -D @graphql-codegen/cli, ...

npm run dev
npm run build
npm run start
```

### react, capicitor, graphql (with typescript) : mobile
```
npx create-react-app type-cap --template typescript

npm i @capacitor/core –save
npm i -D @capacitor/cli –save

npx cap init

npm i @capacitor/android @capacitor/ios –save

npm i -s @apollo/client graphql (apollo-boost @apollo/react-hooks )
npm i -s -D @graphql-codegen/cli, ...

npx cap add android

npm run build
npx cap copy
npx cap sync android
```

### common
```
npm i -s swiper animate.css axios
```
