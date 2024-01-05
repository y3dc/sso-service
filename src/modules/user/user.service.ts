import AppDataSource from 'database/dataSource'
import { User } from 'modules/user/user.entity'

const userRepository = AppDataSource.getRepository(User)

const findAll = async () => {
  return await userRepository.find()
}

const userService = {
  findAll,
}

export default userService
