import { EmailValidatorAdapter } from './email-validator'
describe('EmailValidator Adapter', () => {
  test('Should return false if email validator return false', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('invalidEmail@email.com')
    expect(isValid).toBe(false)
  })
})
