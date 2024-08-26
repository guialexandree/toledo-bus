import { LineBusModel } from '@/domain/models'

export interface GetLines {
  getAll: () => Promise<LineBusModel[]>
}
