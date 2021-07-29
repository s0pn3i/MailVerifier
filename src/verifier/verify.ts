import path from 'path'
import dotenv from 'dotenv'
dotenv.config({ path: path.resolve(__dirname, '../../.env') })
import nodemailer, { SendMailOptions } from 'nodemailer'
import createVerifyNumber from '../createVerifyNumber'
const verify = async (email: string, from: string) => {
  const emailRule =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
  if (!email || !from) {
    return {
      ok: false,
      error: 'Please fill in the required fields.'
    }
  } else if (!emailRule.test(email)) {
    return {
      ok: false,
      error: 'Email format is incorrect.'
    }
  }
  const verifyNumber = createVerifyNumber()
  const transport = nodemailer.createTransport({
    service: 'Naver',
    host: 'smtp.naver.com',
    port: 587,
    auth: {
      user: process.env.VERIFIER_EMAIL,
      pass: process.env.VERIFIER_PASSWORD
    }
  })
  const mailOptions: SendMailOptions = {
    from: process.env.VERIFIER_EMAIL,
    to: email,
    subject: `${from} 에서 발송한 인증번호 입니다.`,
    html: `
                  <h2>
                      ${from} 에서 발송한 인증번호 입니다.
                  </h2>
                  <div>
                      인증번호: ${verifyNumber}
                  </div>
                  
                  `
  }

  try {
    await transport.sendMail(mailOptions)
    return {
      ok: true,
      verifyNumber
    }
  } catch (error) {
    console.log(error)
    return {
      ok: false,
      error: String(error)
    }
  }
}

export default verify
