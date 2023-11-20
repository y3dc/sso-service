import { CommonError } from './common-error'

export class NotFoundError extends CommonError {
  statusCode = 404

  constructor(public message: string = 'Not found!') {
    super(message)

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, NotFoundError.prototype)
  }

  serializeErrors() {
    return [{ message: this.message }]
  }
}
