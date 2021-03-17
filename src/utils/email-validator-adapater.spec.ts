import { EmailValidatorAdapter } from './email-validator'
import validator from 'validator'

jest.mock('validator', () => ({
  isEmail (): boolean {
    return true
  }
}))

describe('EmailValidator Adapter', () => {
  test('Should return false if email validator return false', () => {
    const sut = new EmailValidatorAdapter()
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
    const isValid = sut.isValid('invalidEmail@Email.com')
    expect(isValid).toBe(false)
  })
  test('Should return true if email validator return true', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('validEmail@email.com')
    expect(isValid).toBe(true)
  })
})
