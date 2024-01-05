import { Router } from 'express'
import userController from './user.controller'

const userRoutes = Router()

userRoutes.get('', userController.findAll)

export default userRoutes
