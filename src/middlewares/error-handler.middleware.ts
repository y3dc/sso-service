import { NODE_ENV } from 'constants/envs'
import { CommonError } from 'errors/common-error'
import { NextFunction, Request, Response } from 'express'
import { ValidationError } from 'joi'

export default function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  if (NODE_ENV === 'development') {
    console.error(err.message)
  } else {
    // TODO: handle log file
  }

  if (err instanceof ValidationError) {
    return res.status(422).json({
      errors: err.details,
    })
  }

  if (err instanceof CommonError) {
    return res.status(err.statusCode).json({ errors: err.serializeErrors() })
  }

  return res.status(500).json({
    message: 'Internal Server Error',
    error: err.message,
  })
}
