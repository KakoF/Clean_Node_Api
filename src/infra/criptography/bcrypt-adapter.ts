import bcrypt from 'bcrypt'
import { Encrypter } from '../../data/protocols/encrypter'

export class BcryptAdapter implements Encrypter {
  /* private readonly _encrypter: Encrypter;
  constructor(encrypter: Encrypter) {
    this._encrypter = encrypter;
  } */
  private readonly _salt: number
  constructor (salt: number) {
    this._salt = salt
  }

  async encrypt (value: string): Promise<string> {
    await bcrypt.hash(value, this._salt)
    return null
  }
}
