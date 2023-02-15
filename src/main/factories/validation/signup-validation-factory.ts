import { CompareFieldsValidation, EmailValidation, MinLengthValidation, RequiredFieldValidation, ValidationComposite } from '@/validation/validators'

export const makeSignUpValidation = (): ValidationComposite => new ValidationComposite([
  new RequiredFieldValidation('name'),
  new MinLengthValidation('name', 5),
  new RequiredFieldValidation('email'),
  new EmailValidation('email'),
  new RequiredFieldValidation('password'),
  new MinLengthValidation('password', 5),
  new RequiredFieldValidation('passwordConfirmation'),
  new CompareFieldsValidation('passwordConfirmation', 'password')
])
