const createVerifyNumber = () => {
  let verifyNumber: string = ''
  for (let i = 0; i < 6; i++) {
    const randomNumber: string = String(Math.floor(Math.random() * 9 + 1))
    verifyNumber = verifyNumber + randomNumber
  }

  return verifyNumber
}

export default createVerifyNumber
