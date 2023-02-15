import { HttpRequest } from '@/data/protocols'
import { GetStorageSpy, HttpClientSpy, mockHttpRequest } from '@/data/test/mocks'
import { mockAccountModel } from '@/domain/test/mocks'
import { AuthorizeHttpClientDecorator } from '@/main/decorators'
import faker from 'faker'

type SutTypes = {
  sut: AuthorizeHttpClientDecorator
  getStorageSpy: GetStorageSpy
  httpClientSpy: HttpClientSpy
}

const makeSut = (): SutTypes => {
  const getStorageSpy = new GetStorageSpy()
  const httpClientSpy = new HttpClientSpy()
  const sut = new AuthorizeHttpClientDecorator(getStorageSpy, httpClientSpy)

  return {
    sut,
    getStorageSpy,
    httpClientSpy
  }
}

describe('AuthorizeHttpClientDecorator', () => {
  test('Should call GetStorage with correc value', async () => {
    const { sut, getStorageSpy } = makeSut()

    await sut.request(mockHttpRequest())

    expect(getStorageSpy.key).toBe('account')
  })

  test('Should not add header if getStorage is invalid', async () => {
    const { sut, httpClientSpy } = makeSut()
    const httpRequest: HttpRequest = {
      method: faker.random.arrayElement(['get', 'post', 'put', 'delete']),
      url: faker.internet.url(),
      headers: {
        field: faker.random.words()
      }
    }
    await sut.request(httpRequest)

    expect(httpClientSpy.url).toBe(httpClientSpy.url)
    expect(httpClientSpy.method).toEqual(httpRequest.method)
    expect(httpClientSpy.headers).toEqual(httpRequest.headers)
  })

  test('Should add header to HttpClient', async () => {
    const { sut, getStorageSpy, httpClientSpy } = makeSut()
    getStorageSpy.value = mockAccountModel()
    const httpRequest: HttpRequest = {
      method: faker.random.arrayElement(['get', 'post', 'put', 'delete']),
      url: faker.internet.url()
    }
    await sut.request(httpRequest)

    expect(httpClientSpy.url).toBe(httpClientSpy.url)
    expect(httpClientSpy.method).toEqual(httpRequest.method)
    expect(httpClientSpy.headers).toEqual({
      'x-access-token': getStorageSpy.value.accessToken
    })
  })

  test('Should merge headers to HttpClient', async () => {
    const { sut, getStorageSpy, httpClientSpy } = makeSut()
    getStorageSpy.value = mockAccountModel()
    const field = faker.random.words()
    const httpRequest: HttpRequest = {
      method: faker.random.arrayElement(['get', 'post', 'put', 'delete']),
      url: faker.internet.url(),
      headers: {
        field
      }
    }
    await sut.request(httpRequest)

    expect(httpClientSpy.url).toBe(httpClientSpy.url)
    expect(httpClientSpy.method).toEqual(httpRequest.method)
    expect(httpClientSpy.headers).toEqual({
      field,
      'x-access-token': getStorageSpy.value.accessToken
    })
  })

  test('Should return the same result as HttpClient', async () => {
    const { sut, httpClientSpy } = makeSut()

    const httpResponse = await sut.request(mockHttpRequest())

    expect(httpResponse).toEqual(httpClientSpy.response)
  })
})
