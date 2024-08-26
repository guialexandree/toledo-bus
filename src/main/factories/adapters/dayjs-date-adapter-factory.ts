import { DateAdapter } from '@/data/protocols'
import { DayJsDateAdapter } from '@/infra/adapters'

export const makeDayJsDateAdapter = (): DateAdapter => new DayJsDateAdapter()
