export class AlteradyExistParam extends Error {
  constructor (paramName: string) {
    super(`${paramName} already exists`)
    this.name = 'AlteradyExistParam'
  }
}
