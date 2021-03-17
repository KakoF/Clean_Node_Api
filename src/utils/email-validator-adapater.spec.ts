import { EmailValidatorAdapter } from './email-validator'
import validator from 'validator'

jest.mock('validator', () => ({
  isEmail (): boolean {
    return true
  }
}))

const makeSut = (): EmailValidatorAdapter => {
  return new EmailValidatorAdapter()
}

describe('EmailValidator Adapter', () => {
  test('Should return false if email validator return false', () => {
    const sut = makeSut()
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
    const isValid = sut.isValid('invalidEmail@Email.com')
    expect(isValid).toBe(false)
  })
  test('Should return true if email validator return true', () => {
    const sut = makeSut()
    const isValid = sut.isValid('validEmail@email.com')
    expect(isValid).toBe(true)
  })
  test('Should call validator if correct email', () => {
    const sut = makeSut()
    const isEmailSpy = jest.spyOn(validator, 'isEmail')
    sut.isValid('validEmail@email.com')
    expect(isEmailSpy).toHaveBeenCalledWith('validEmail@email.com')
  })
})
