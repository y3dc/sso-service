import { isEmpty } from 'lodash'
import { AuthServiceHandlers } from 'proto/sso/AuthService'
import authService from './auth.service'
import { ServerUnaryCall, sendUnaryData } from '@grpc/grpc-js'

const authGrpcController = {
  // Login: async (call, callback) => {
  Login: async (call: ServerUnaryCall<any, any>, callback: sendUnaryData<any>) => {
    console.log('>> grpc req: ', call.request)

    // TODO:-D validate, check null
    const { username, password } = call.request
    if (!username || !password) return callback(null, { success: false, error: 'error' })

    const user = await authService.login(username, password)
    if (isEmpty(user)) return callback(null, { success: false, error: 'error' })

    callback(null, { accessToken: user.accessToken, user: user.user })
  },
}

export default authGrpcController
