import {
  AddAccount,
  AccountModel,
  AddAccountModel,
  Encrypter,
  AddAccountRepository
} from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  private readonly _encrypter: Encrypter
  private readonly _addAccountRepository: AddAccountRepository
  constructor (
    encrypter: Encrypter,
    addAccountRepository: AddAccountRepository
  ) {
    this._encrypter = encrypter
    this._addAccountRepository = addAccountRepository
  }

  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const hashedPassord = await this._encrypter.encrypt(accountData.password)
    const account = await this._addAccountRepository.add(
      Object.assign(accountData, { password: hashedPassord })
    )
    return account
  }
}
