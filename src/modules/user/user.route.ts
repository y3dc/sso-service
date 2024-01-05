import { Router } from 'express'
import userController from './user.controller'

const userRoutes = Router()

userRoutes.post('', userController.findAll)

export default userRoutes
