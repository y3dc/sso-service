import { NextFunction, Request, Response } from 'express'

type ExpressHandlerFunc = (req: Request, res: Response, next: NextFunction) => Promise<any>
export const asyncErrorHandler: (cb: ExpressHandlerFunc) => ExpressHandlerFunc = (
  cb: ExpressHandlerFunc,
) => {
  return (req, res, next) => cb(req, res, next).catch(next)
}
