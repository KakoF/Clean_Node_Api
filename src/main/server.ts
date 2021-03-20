
import { MongHelper } from '../infra/db/mongodb/helpers/mongo-helpers'
import env from './config/env'
MongHelper.connect(env.mongoUrl).then(async () => {
  const app = (await import('./config/app')).default
  app.listen(env.port, () => console.log(`Server Runing at http://localhost:${env.port}`))
}).catch(console.error)
