import { MongoClient, Collection } from 'mongodb'

export const MongHelper = {

  client: null as MongoClient,

  async connect (uri: String): Promise<void> {
    this.client = await MongoClient.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  },
  async disconnect (): Promise<void> {
    await this.client.close()
  },

  getCollection (name: String): Collection {
    return this.client.db().collection(name)
  }
}
