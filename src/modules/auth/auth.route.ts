import { Router } from 'express'
import authController from './auth.controller'
import passport from 'passport'

const authRoutes = Router()

authRoutes.post('/register', authController.register)
authRoutes.post('/login', passport.authenticate('local'), authController.login)
authRoutes.post(
  '/refresh-token',
  passport.authenticate('jwt', { session: false }),
  authController.refreshToken,
)

export default authRoutes
