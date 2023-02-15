import 'jest-localstorage-mock'
import { LocalStorageAdapter } from './local-storage-adapter'
import faker from 'faker'

const makeSut = (): LocalStorageAdapter => new LocalStorageAdapter()

describe('LocalStorage Adapter', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  test('Should call localSotrage.setItem with correct values', async () => {
    const sut = makeSut()
    const key = faker.database.column()
    const value = faker.random.objectElement<{}>()
    sut.set(key, value)
    expect(localStorage.setItem).toHaveBeenCalledWith(key, JSON.stringify(value))
  })

  test('Should call localSotrage.remoteItem if value is null', async () => {
    const sut = makeSut()
    const key = faker.database.column()
    sut.set(key, undefined)
    expect(localStorage.removeItem).toHaveBeenCalledWith(key)
  })

  test('Should return an account on localSotrage.getItem with correct value', async () => {
    const sut = makeSut()
    const key = faker.database.column()
    const value = faker.random.objectElement<{}>()
    jest.spyOn(localStorage, 'getItem').mockReturnValueOnce(JSON.stringify(value))
    const obj = sut.get(key)
    expect(obj).toEqual(value)
    expect(localStorage.getItem).toHaveBeenCalledWith(key)
  })
})
