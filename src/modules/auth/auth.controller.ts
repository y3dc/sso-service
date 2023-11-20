import { pick } from 'lodash'
import { asyncErrorHandler } from 'utils/async-error-handler'
import authService from './auth.service'
import { loginValidation } from './auth.validation'

const register = asyncErrorHandler(async (req, res, next) => {
  const body = req.body || {}
  await authService.register(body.username, body.password)

  return res.json({ message: 'Register success!' })
})

const login = asyncErrorHandler(async (req, res, next) => {
  const result = await loginValidation.validateAsync(req.body)
  console.log('>>>>>>>>> result', result)

  // TODO: format response { data: ..., message: ..., error: ..., status: ... }
  res.json(pick(req, ['user', 'authInfo']))
})

const refreshToken = asyncErrorHandler(async (req, res) => {
  res.json(pick(req, ['user', 'authInfo']))
})

const authController = {
  register,
  login,
  refreshToken,
}

export default authController
