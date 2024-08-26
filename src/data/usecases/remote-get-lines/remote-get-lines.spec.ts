import { mockGetLines } from '@/domain/test/mocks'
import { RemoteGetLines } from './remote-get-lines'

type SutTypes = {
  sut: RemoteGetLines
}

const makeSut = (): SutTypes => {
  const sut = new RemoteGetLines()

  return { sut }
}

describe('Buscar todas as linhas de ônibus', () => {
  test('Deve retornar uma lista de linhas com sucesso', async () => {
    const { sut } = makeSut()

    const lines = await sut.getAll()

    expect(lines).toEqual(mockGetLines)
  })
})
