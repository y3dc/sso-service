import AppDataSource from 'database/dataSource'
import { User } from 'modules/user/user.entity'
import { UserAndToken } from 'types/common.type'
import { hashPassword, verifyPassword } from 'utils/password.util'

const userRepository = AppDataSource.getRepository(User)

const register = async (username: string, password: string): Promise<User | null> => {
  const existingUser = await userRepository.findOne({ where: { username } })
  if (existingUser) return null

  const hashedPassword = await hashPassword(password)

  const newUser = userRepository.create({
    username,
    password: hashedPassword,
  })

  await userRepository.save(newUser)
  return newUser
}

const login = async (username: string, password: string): Promise<UserAndToken | null> => {
  const user = await userRepository.findOne({ where: { username } })
  if (user && (await verifyPassword(password, user.password))) return { user, accessToken: '' } //TODO: gen token

  // TODO: gen accessToken

  return null
}

const verifyToken = () => {}

// TODO: cache
const findUserByToken = () => {}

const authService = {
  register,
  login,
  verifyToken,
  findUserByToken
}

export default authService
