import { Router } from 'express'
import authRoutes from 'modules/auth/auth.route'
import userRoutes from 'modules/user/user.route'

const appRoutes = Router()

appRoutes.use('/auth', authRoutes)
appRoutes.use('/users', userRoutes)

export default appRoutes
