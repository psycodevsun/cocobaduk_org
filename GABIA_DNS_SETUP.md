# 가비아 DNS 설정 가이드 (Vercel 연동)

이 문서는 가비아에서 구매한 도메인을 Vercel에 배포된 웹사이트와 연결하는 방법을 설명합니다.

---

## 📋 사전 준비사항

- ✅ 가비아에서 구매한 도메인 (예: cocobaduk.org)
- ✅ Vercel에 배포된 프로젝트
- ✅ 가비아 계정 로그인 정보

---

## 🚀 1단계: Vercel에서 도메인 추가

### 1-1. Vercel 대시보드 접속
1. https://vercel.com 로그인
2. 프로젝트 선택 (`cocobaduk_org`)
3. **Settings** 탭 클릭

### 1-2. 도메인 추가
1. 왼쪽 메뉴에서 **Domains** 클릭
2. 도메인 입력 (예: `cocobaduk.org`, `www.cocobaduk.org`)
3. **Add** 버튼 클릭

### 1-3. DNS 레코드 정보 확인
Vercel이 다음과 같은 정보를 제공합니다:

**방법 A: A 레코드 (추천)**
```
Type: A
Name: @
Value: 76.76.21.21
```

**방법 B: CNAME 레코드**
```
Type: CNAME
Name: @
Value: cname.vercel-dns.com
```

⚠️ **중요**: 이 정보를 메모해두세요. 다음 단계에서 사용합니다.

---

## 🌐 2단계: 가비아 DNS 설정

### 2-1. 가비아 관리 콘솔 접속
1. https://www.gabia.com 접속
2. 로그인
3. 상단 메뉴: **My가비아** 클릭
4. **서비스 관리** → **도메인** 선택

### 2-2. DNS 설정 진입
1. 설정할 도메인 찾기 (예: `cocobaduk.org`)
2. **관리** 또는 **DNS 관리** 버튼 클릭
3. **DNS 정보** 또는 **DNS 설정** 탭 선택

### 2-3. DNS 레코드 추가/수정

#### 방법 1: A 레코드 사용 (추천)

**루트 도메인 (@) 설정:**
```
타입(Type): A
호스트(Name): @
값/위치(Value): 76.76.21.21
TTL: 3600 (기본값)
```

**www 서브도메인 설정:**
```
타입(Type): CNAME
호스트(Name): www
값/위치(Value): cname.vercel-dns.com
TTL: 3600
```

#### 방법 2: CNAME 레코드 사용

⚠️ **주의**: 일부 DNS 제공업체는 루트 도메인(@)에 CNAME을 허용하지 않습니다.

```
타입(Type): CNAME
호스트(Name): @
값/위치(Value): cname.vercel-dns.com
TTL: 3600
```

```
타입(Type): CNAME
호스트(Name): www
값/위치(Value): cname.vercel-dns.com
TTL: 3600
```

### 2-4. 기존 레코드 삭제 (필요시)

⚠️ **중요**: 기존에 @ 또는 www에 설정된 A 레코드나 CNAME 레코드가 있다면 삭제해야 합니다.

1. 기존 레코드 찾기
2. **삭제** 버튼 클릭
3. 새로운 레코드 추가

### 2-5. 설정 저장
1. **저장** 또는 **적용** 버튼 클릭
2. 변경사항 확인

---

## ⏱️ 3단계: DNS 전파 대기

DNS 변경사항이 전 세계에 전파되는데 **최대 24-48시간** 소요될 수 있습니다.
일반적으로 **5분~1시간** 내에 적용됩니다.

### DNS 전파 확인 방법

#### 방법 1: 터미널에서 확인
```bash
# A 레코드 확인
dig cocobaduk.org

# CNAME 레코드 확인  
dig www.cocobaduk.org

# Windows에서
nslookup cocobaduk.org
```

#### 방법 2: 온라인 도구 사용
- https://dnschecker.org
- https://www.whatsmydns.net

도메인 입력 후 전 세계 DNS 서버에서 전파 상태 확인

---

## 🔍 4단계: Vercel에서 도메인 확인

### 4-1. 도메인 상태 확인
1. Vercel 대시보드 → **Settings** → **Domains**
2. 추가한 도메인 상태 확인:
   - ✅ **Valid Configuration**: 정상 연결됨
   - ⏳ **Pending**: DNS 전파 대기 중
   - ❌ **Invalid Configuration**: 설정 오류

### 4-2. SSL 인증서 자동 발급
도메인이 정상 연결되면 Vercel이 자동으로:
- ✅ Let's Encrypt SSL 인증서 발급
- ✅ HTTPS 자동 리다이렉트 설정
- ✅ HTTP/2 활성화

---

## 📝 설정 예시

### 예시 1: cocobaduk.org + www.cocobaduk.org

**가비아 DNS 설정:**
```
레코드 1:
타입: A
호스트: @
값: 76.76.21.21

레코드 2:
타입: CNAME
호스트: www
값: cname.vercel-dns.com
```

**Vercel Domains 설정:**
- `cocobaduk.org` (Primary)
- `www.cocobaduk.org` → `cocobaduk.org`로 리다이렉트

---

## ⚠️ 주의사항 및 문제 해결

### 문제 1: DNS 레코드가 적용되지 않음
**원인:**
- DNS 캐시 문제
- 잘못된 레코드 값

**해결:**
```bash
# DNS 캐시 초기화 (Mac)
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder

# DNS 캐시 초기화 (Windows)
ipconfig /flushdns

# 시크릿 모드로 브라우저 테스트
```

### 문제 2: "Invalid Configuration" 에러
**원인:**
- DNS 레코드 값이 잘못됨
- DNS 전파 미완료

**해결:**
1. 가비아 DNS 설정 재확인
2. 24시간 대기 후 재확인
3. Vercel 도메인 삭제 후 재추가

### 문제 3: SSL 인증서 발급 실패
**원인:**
- DNS가 완전히 전파되지 않음

**해결:**
1. DNS 전파 완료까지 대기 (최대 48시간)
2. Vercel이 자동으로 재시도함
3. 수동 재시도: Domains 설정에서 **Refresh** 클릭

### 문제 4: 가비아에서 @ 호스트에 CNAME 설정 불가
**원인:**
- DNS 표준 제한사항

**해결:**
- **A 레코드 사용** (76.76.21.21)
- 또는 가비아 DNS 대신 Cloudflare 같은 서비스 사용

---

## 🎯 권장 설정

### Primary Domain
```
cocobaduk.org (루트 도메인)
```

### Redirects
```
www.cocobaduk.org → cocobaduk.org
```

### 이유
- SEO에 유리 (중복 컨텐츠 방지)
- 짧고 기억하기 쉬움
- 표준 관행

---

## ✅ 설정 완료 체크리스트

- [ ] Vercel에 도메인 추가
- [ ] 가비아 DNS A 레코드 설정 (@)
- [ ] 가비아 DNS CNAME 레코드 설정 (www)
- [ ] DNS 전파 확인 (dnschecker.org)
- [ ] Vercel 도메인 상태 "Valid Configuration" 확인
- [ ] HTTPS 접속 테스트 (https://cocobaduk.org)
- [ ] www 리다이렉트 테스트 (https://www.cocobaduk.org)
- [ ] 모바일/데스크톱 접속 테스트

---

## 📞 문제 발생 시 연락처

**Vercel 지원:**
- 문서: https://vercel.com/docs/concepts/projects/domains
- 지원: https://vercel.com/support

**가비아 고객센터:**
- 전화: 1544-2243
- 문의: https://www.gabia.com/customer

---

## 🔄 DNS 설정 완료 후 자동 배포

DNS 설정 후에는 모든 것이 자동으로 작동합니다:

```bash
# 코드 수정
git add .
git commit -m "Update content"
git push

# → GitHub에 푸시
# → Vercel 자동 빌드
# → 도메인으로 자동 배포
```

---

## 📚 추가 참고 자료

- [Vercel 도메인 설정 공식 문서](https://vercel.com/docs/concepts/projects/domains)
- [가비아 DNS 설정 가이드](https://customer.gabia.com)
- [DNS 전파 확인 도구](https://dnschecker.org)

---

**작성일:** 2025-10-09  
**프로젝트:** 코코바둑 온라인 바둑학원  
**도메인:** cocobaduk.org (예시)
