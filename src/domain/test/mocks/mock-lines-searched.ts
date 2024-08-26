import { LineBusSearchModel, LineBusDirection } from '@/domain/models'
import faker from 'faker'

export const mockGetLinesSearched: LineBusSearchModel[] = [
  {
    id: 1030,
    line: 'Colonia',
    dir: faker.random.arrayElement([
      LineBusDirection.BAIRRO,
      LineBusDirection.TERMINAL
    ]),
    timestamp: 1724636308689
  },
  {
    id: 1032,
    line: 'Europa',
    dir: faker.random.arrayElement([
      LineBusDirection.BAIRRO,
      LineBusDirection.TERMINAL
    ]),
    timestamp: 1724489900000
  },
  {
    id: 1019,
    line: 'Jardim Coopagro',
    dir: faker.random.arrayElement([
      LineBusDirection.BAIRRO,
      LineBusDirection.TERMINAL
    ]),
    timestamp: faker.date.past().getTime()
  }
]
