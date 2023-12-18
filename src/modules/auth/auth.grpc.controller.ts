import { isEmpty } from 'lodash'
import { AuthServiceHandlers } from 'proto/authPackage/AuthService'
import authService from './auth.service'

const authGrpcController: AuthServiceHandlers = {
  Login: async (call, callback) => {
    console.log('>> grpc req: ', call.request)

    // TODO:-D validate, check null
    const { username, password } = call.request
    if (!username || !password) return callback(null, { success: false, error: 'error' })

    const user = await authService.login(username, password)
    if (isEmpty(user)) return callback(null, { success: false, error: 'error' })

    callback(null, { accesToken: user.accessToken, user: user.user })
  },
}

export default authGrpcController
