import { Router } from 'express'
import authRoutes from 'modules/auth/auth.route'

const appRoutes = Router()

appRoutes.use('/auth', authRoutes)

export default appRoutes
