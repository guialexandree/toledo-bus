import { makeLoginValidation } from './login-validation-factory'
import { ValidationComposite } from '@/validation/validators'
import { ValidationBuilder as Builder } from '@/validation/validators/builder/validation-builder'

describe('LoginValidationFactory', () => {
  test('Should  make  ValidationComposite with correct validations', () => {
    const composite = makeLoginValidation()
    expect(composite).toEqual(
      new ValidationComposite([
        ...Builder.field('email').required().email().build(),
        ...Builder.field('password').required().min(5).build()
      ])
    )
  })
})
