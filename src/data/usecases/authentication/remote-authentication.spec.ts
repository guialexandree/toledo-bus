import { InvalidCredentialsError, UnexpectedError } from '@/domain/errors'
import { mockAuthenticationModel, mockAuthenticationParams } from '@/domain/test/mocks'
import { HttpClientSpy } from '@/data/test/mocks'
import { HttpStatusCode } from '@/data/protocols'
import { RemoteAuthentication } from '@/data/usecases'
import faker from 'faker'

type SutTypes = {
  sut: RemoteAuthentication
  httpClientSpy: HttpClientSpy<RemoteAuthentication.Model>
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<RemoteAuthentication.Model>()
  const sut = new RemoteAuthentication(
    url,
    httpClientSpy
  )

  return {
    sut,
    httpClientSpy
  }
}

describe('RemoteAuthentication', () => {
  test('Should call httpCliente if correct values', async () => {
    const url = faker.internet.url()
    const { sut, httpClientSpy } = makeSut(url)
    const httpRequest = mockAuthenticationParams()

    await sut.auth(httpRequest)

    expect(httpClientSpy.url).toBe(url)
    expect(httpClientSpy.method).toBe('post')
    expect(httpClientSpy.body).toEqual(httpRequest)
  })

  test('Should throw InvalidCredentialErro if httpPostClient returns 401', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.unauthorized
    }
    const promise = sut.auth(mockAuthenticationParams())

    await expect(promise).rejects.toThrow(new InvalidCredentialsError())
  })

  test('Should throw UnexpectedError if httpPostClient returns 400', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.badRequest
    }
    const promise = sut.auth(mockAuthenticationParams())

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw UnexpectedError if httpPostClient returns 404', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.notFound
    }
    const promise = sut.auth(mockAuthenticationParams())

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw UnexpectedError if httpPostClient returns 500', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.serverError
    }
    const promise = sut.auth(mockAuthenticationParams())

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should an account on success', async () => {
    const { sut, httpClientSpy } = makeSut()
    const httpResult = mockAuthenticationModel()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult
    }
    const account = await sut.auth(mockAuthenticationParams())

    expect(account).toEqual(httpResult)
  })
})
