import { Server } from '@grpc/grpc-js'
import { grpcObj } from 'grpc-server'
import { isEmpty } from 'lodash'
import { AuthServiceHandlers } from 'proto/authPackage/AuthService'
import authService from './auth.service'

export default function authGrpcController(server: Server) {
  server.addService(grpcObj.authPackage.Auth.service, {
    Login: async (req, res) => {
      console.log('>> grpc req: ', req.request)

      // TODO:-D validate, check null
      const { username, password } = req.request
      if (!username || !password) return res(null, { success: false, error: 'error' })

      const user = await authService.login(username, password)
      if (isEmpty(user)) return res(null, { success: false, error: 'error' })

      res(null, { accesToken: user.accessToken, user: user.user })
    },
  } as AuthServiceHandlers)
}
