import { MongHelper } from '../helpers/mongo-helpers'
import { AccountMongoRepository } from './account'

describe('Account Mongo Repository', () => {
  beforeAll(async () => {
    await MongHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongHelper.disconnect()
  })

  beforeEach(async () => {
    const accountCollection = MongHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  const makeSut = (): AccountMongoRepository => {
    return new AccountMongoRepository()
  }

  test('Should return an account on success', async () => {
    const sut = makeSut()
    const account = await sut.add({
      name: 'any_name',
      email: 'any_email',
      password: 'any_password'
    })
    expect(account).toBeTruthy()
    expect(account.id).toBeTruthy()
    expect(account.name).toBe('any_name')
    expect(account.email).toBe('any_email')
    expect(account.password).toBe('any_password')
  })
})
