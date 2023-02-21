import { AccountModel } from '@/domain/models'
import faker from 'faker'

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.datatype.uuid(),
  name: faker.name.findName(),
  image: faker.image.avatar(),
  providerId: faker.datatype.uuid(),
  email: faker.internet.email()
})
