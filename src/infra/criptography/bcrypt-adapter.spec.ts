import bcrypt from 'bcrypt'
import { resolve } from 'path'
import { BcryptAdapter } from './bcrypt-adapter'

jest.mock('bcrypt', () => ({
  async hash (): Promise<string> {
    return await new Promise((resolve) => resolve('hash'))
  }
}))

describe('Bcrypt Adapter', () => {
  test('Should call bcrypt with correct value', async () => {
    const sut = new BcryptAdapter(12)
    const hashSpy = jest.spyOn(bcrypt, 'hash')
    await sut.encrypt('any_value')
    expect(hashSpy).toHaveBeenCalledWith('any_value', 12)
  })
  test('Should return hash on success', async () => {
    const sut = new BcryptAdapter(12)
    const hash = await sut.encrypt('any_value')
    expect(hash).toBe('hash')
  })
})
