import React from 'react'
import faker from 'faker'
import { render, RenderResult, fireEvent } from '@testing-library/react'
import { InputBase } from '@/presentation/components'

const makeSut = (fieldName: string): RenderResult => {
  return render(
    <InputBase placeholder=' ' name={fieldName} state={{}} setState={null} />
  )
}

describe('InputBase Component', () => {
  test('Should begin with readOnly', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const input = sut.getByTestId(field) as HTMLInputElement
  })

  test('Should remove readOnly on focus', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const input = sut.getByTestId(field) as HTMLInputElement
    fireEvent.focus(input)
  })

  test('Should focus input on label click', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const input = sut.getByTestId(field)
    const label = sut.getByTestId(`${field}-label`)
    fireEvent.click(label)
    expect(document.activeElement).toBe(input)
  })
})
