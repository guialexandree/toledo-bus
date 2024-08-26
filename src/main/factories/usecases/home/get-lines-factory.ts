import { RemoteGetLines } from '@/data/usecases'
import { GetLines } from '@/domain/usecases'

export const makeGetLines = (): GetLines => {
  return new RemoteGetLines()
}
