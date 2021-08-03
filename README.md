# MailVerifier

이메일 인증을 간편하게 구현할 수 있는 모듈입니다.
- - -
사용법
```
npm i mailverifier or yarn add mailverifier
```

```ts
import verifier from 'mailverifier'
    try{
    const { verifyNumber } = verifier.verify('email', 'Test') 
    const inputVerifyNumber = 133262 //실제로 사용할 땐 유저가 입력한 값을 사용해야 합니다.

    if(verifyNumber === inputVerifyNumber) {
        console.log('인증되었습니다.')
    } else {
        console.log('실패하였습니다.')
    }
} catch(err) {
    console.log(err)
}
```
