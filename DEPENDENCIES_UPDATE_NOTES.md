# 종속성 업데이트 권장 사항

## 현재 Outdated 패키지

### 안전하게 업데이트 가능 (Minor/Patch 버전)
```bash
npm update @vitejs/plugin-react-swc
npm update firebase
npm update typescript
npm update unplugin-auto-import
```

### 주의가 필요한 업데이트 (Major 버전)

#### 1. Tailwind CSS (3.x → 4.x)
- **현재**: 3.4.18
- **최신**: 4.1.14
- **주의**: Breaking changes 있음
- **권장**: 당장 업데이트하지 말고 stable release 대기

#### 2. eslint-plugin-react-hooks (5.x → 7.x)
- **현재**: 5.2.0
- **최신**: 7.0.0
- **주의**: React 19와의 호환성 확인 필요

#### 3. react-i18next (15.x → 16.x)
- **현재**: 15.7.4
- **최신**: 16.0.0
- **주의**: API 변경 사항 확인 필요

## 권장 업데이트 순서

1. ✅ 먼저 안전한 minor/patch 업데이트 실행
2. ✅ 각 업데이트 후 `npm run build` 및 `npm run dev`로 테스트
3. ⚠️ Major 버전 업데이트는 프로젝트 안정화 후 진행
4. ✅ 업데이트 전 Git 커밋 필수

## 업데이트 명령어

### 안전한 업데이트
```bash
npm update
```

### 특정 패키지 최신 버전으로
```bash
npm install package-name@latest
```
