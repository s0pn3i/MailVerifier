# MailVerifier

이메일 인증을 간편하게 구현할 수 있는 모듈입니다.
- - -
사용법
```
npm i mailverifier or yarn add mailverifier
```

```ts
import verifier from 'mailverifier'

const verify = async() => {
    try{
    const { verifyNumber } = await verifier.verify('email', 'Test') 
   //요청한 이메일 주소로 6자리 코드가 보내집니다.
   //이메일 제목은 Test에서 발송한 인증번호 입니다. 가 된다.
   if(verifiyNumber) {
       console.log('인증되었습니다')
   }
   else {
       console.log('실패하였습니다')
   }
} catch(err) {
    console.log(err)
}
}
