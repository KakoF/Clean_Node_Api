import request from 'supertest'
import app from '../config/app'
import { MongHelper } from '../../infra/db/mongodb/helpers/mongo-helpers'

describe('Signup Routes', () => {
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
  test('Should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Kako',
        email: 'kakoferrare87@gmail',
        password: '123456',
        passwordConfirmation: '123456'
      })
      .expect(200)
  })
})
