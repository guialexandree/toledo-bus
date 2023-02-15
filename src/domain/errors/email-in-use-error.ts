export class EmailInUseError extends Error {
  constructor () {
    super('O e-mail informado já está em uso')
    this.name = 'EmailInUseError'
  }
}
