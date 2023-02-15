import { EmailValidation } from '../email/email-validation'
import { MinLengthValidation } from '../min-length/min-length-validation'
import { RequiredFieldValidation } from '../required-field/required-field-validation'
import { CompareFieldsValidation } from '../compare-fields/compare-fields-validation'
import { ValidationBuilder as sut } from './validation-builder'
import faker from 'faker'

let fieldName: string

describe('ValidationBuilder', () => {
  beforeEach(() => {
    fieldName = faker.random.word()
  })

  test('Should return RequiredFieldValidation', () => {
    const validations = sut.field(fieldName).required().build()
    expect(validations).toEqual([new RequiredFieldValidation(fieldName)])
  })

  test('Should return EmailValidation', () => {
    const validations = sut.field(fieldName).email().build()
    expect(validations).toEqual([new EmailValidation(fieldName)])
  })

  test('Should return MinLengthValidation', () => {
    const length = faker.datatype.number()
    const validations = sut.field(fieldName).min(length).build()
    expect(validations).toEqual([new MinLengthValidation(fieldName, length)])
  })

  test('Should return CompareFieldValidation', () => {
    const field = faker.database.column()
    const fieldToCompare = faker.database.column()
    const validations = sut.field(field).sameAs(fieldToCompare).build()
    expect(validations).toEqual([new CompareFieldsValidation(field, fieldToCompare)])
  })

  test('Should return a list of validations', () => {
    const fieldName = faker.database.column()
    const length = faker.datatype.number()
    const validations = sut.field(fieldName).required().email().min(length).build()
    expect(validations).toEqual([
      new RequiredFieldValidation(fieldName),
      new EmailValidation(fieldName),
      new MinLengthValidation(fieldName, length)
    ])
  })
})
