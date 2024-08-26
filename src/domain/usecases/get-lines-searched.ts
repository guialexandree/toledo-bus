import { LineBusSearchModel } from '@/domain/models'

export interface GetLinesSearched {
  getLatest: () => Promise<GetLinesSearched.Result>
}

export namespace GetLinesSearched {
  export type Result = LineBusSearchModel[]
  export const LINES_SEARCHED_KEY_CACHE = '@lines_searched_tb'
}
