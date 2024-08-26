import { RemoteGetLinesSearched } from '@/data/usecases'
import { GetLinesSearched } from '@/domain/usecases'
import { makeLocalStorageAdapter } from '@/main/factories/cache'

export const makeGetLinesSearched = (): GetLinesSearched => {
  return new RemoteGetLinesSearched(makeLocalStorageAdapter())
}
