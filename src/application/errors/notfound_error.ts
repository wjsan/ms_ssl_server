import { BaseError } from '../../shared/base_error'

export class NotFoundError extends Error implements BaseError {
  name = 'NotFoundError'
  constructor (public readonly message: string = 'NotFoundError') {
    super(message)
  }
}
