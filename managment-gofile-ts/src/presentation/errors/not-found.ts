export class NotFoundError extends Error {
  constructor () {
    super('Item not found')
    this.name = 'NotFoundError'
  }
}
