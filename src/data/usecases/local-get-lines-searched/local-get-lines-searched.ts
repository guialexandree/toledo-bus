import { LineBusSearchModel } from '@/domain/models'
import { GetLinesSearched } from '@/domain/usecases'
import { mockGetLinesSearched } from '@/domain/test/mocks'
import { GetStorage } from '@/data/protocols'

export class RemoteGetLinesSearched implements GetLinesSearched {
  constructor (private readonly localStorageAdapter: GetStorage) {}

  async getLatest (): Promise<LineBusSearchModel[]> {
    console.time()
    let lines = this
      .localStorageAdapter
      .get(GetLinesSearched.LINES_SEARCHED_KEY_CACHE) as LineBusSearchModel[] || []

    lines = mockGetLinesSearched // TODO: temporário remover
    return await Promise.resolve(lines)
  }
}
