import { LineBusDirection } from '@/domain/models'

export type LineBusSearchModel = {
  id: number
  line: string
  dir: LineBusDirection
  timestamp: number
}
