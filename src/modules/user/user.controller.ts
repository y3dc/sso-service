import { asyncErrorHandler } from 'utils/async-error-handler'
import userService from './user.service'

// TODO:-D only for test
const findAll = asyncErrorHandler(async (req, res, next) => {
  return res.json({ data: await userService.findAll() })
})

const userController = {
  findAll,
}

export default userController
