import { Validation } from '@/presentation/protocols'
import { FieldValidation } from '@/validation/protocols'

export class ValidationComposite implements Validation {
  constructor (private readonly validators: FieldValidation[]) {}

  validate (fieldName: string, input: object): string {
    const validators = this.validators.filter(v => v.field === fieldName)
    for (const validation of validators) {
      const error = validation.validate(input)
      if (error) {
        return error.message
      }
    }

    return null
  }
}
