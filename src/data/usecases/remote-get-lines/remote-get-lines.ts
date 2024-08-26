import { LineBusModel } from '@/domain/models'
import { GetLines } from '@/domain/usecases'
import { mockGetLines } from '@/domain/test/mocks'

export class RemoteGetLines implements GetLines {
  async getAll (): Promise<LineBusModel[]> {
    console.time()
    const lines = mockGetLines
    return await Promise.resolve(lines)
  }
}
