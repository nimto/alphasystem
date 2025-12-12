# EmailJS 설정 가이드

ALPHA LASER 견적 요청 폼에서 실제 이메일을 전송하려면 EmailJS 설정이 필요합니다.

## 1단계: EmailJS 계정 생성

1. https://www.emailjs.com/ 접속
2. **Sign Up** 클릭 (무료 계정)
3. 이메일 인증 완료

## 2단계: Email Service 추가

1. 대시보드에서 **Email Services** 클릭
2. **Add New Service** 클릭
3. **Gmail** 선택 (또는 원하는 메일 서비스)
4. Gmail 계정으로 로그인 및 권한 승인
5. Service ID 복사 (예: `service_abc123`)

## 3단계: Email Template 생성

1. 대시보드에서 **Email Templates** 클릭
2. **Create New Template** 클릭
3. Template 설정:

```
Template Name: ALPHA LASER Quote Request

Subject: [ALPHA LASER] 견적 요청 - {{from_company}}

Content (HTML):
{{{html_body}}}
```

4. Template ID 복사 (예: `template_xyz789`)

## 4단계: Public Key 확인

1. 대시보드에서 **Account** → **General** 클릭
2. **Public Key** 복사 (예: `a1b2c3d4e5f6g7h8`)

## 5단계: quote.html 파일 수정

`quote.html` 파일에서 다음 3곳의 값을 변경:

### 라인 420 근처:
```javascript
const EMAILJS_PUBLIC_KEY = 'a1b2c3d4e5f6g7h8';  // 여기에 실제 Public Key 입력
```

### 라인 433-435 근처:
```javascript
const EMAILJS_SERVICE_ID = 'service_abc123';     // 여기에 실제 Service ID 입력
const EMAILJS_TEMPLATE_ID = 'template_xyz789';   // 여기에 실제 Template ID 입력
const EMAILJS_PUBLIC_KEY = 'a1b2c3d4e5f6g7h8';  // 여기에 실제 Public Key 입력
```

## 6단계: 테스트

1. quote.html 페이지에서 견적 요청 폼 작성
2. **견적요청 보내기** 버튼 클릭
3. nimtos@gmail.com 으로 이메일 수신 확인

## 주의사항

- **무료 계정**: 월 200개 이메일 전송 제한
- **Public Key**: 클라이언트 측에 노출되어도 안전 (읽기 전용)
- **Template**: HTML 본문은 `{{{html_body}}}` 변수로 전달됨

## 현재 수신자 설정

```javascript
const recipients = ['nimtos@gmail.com'];  // 테스트용
```

실제 운영시:
```javascript
const recipients = ['alpha@alphasystem.kr', 'nimtos@gmail.com'];
```

## 문제 해결

- **CORS 오류**: EmailJS는 CORS를 지원하므로 문제 없음
- **전송 실패**: 개발자 도구 콘솔에서 에러 확인
- **설정 미완료**: mailto 링크로 폴백됨 (개발용)
