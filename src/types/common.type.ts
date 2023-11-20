import { User } from 'modules/user/user.entity'

export type UserAndToken = {
  user: User
  accessToken: string
}
