import { Server, loadPackageDefinition } from '@grpc/grpc-js'
import { loadSync } from '@grpc/proto-loader'
import authGrpcController from 'modules/auth/auth.grpc.controller'
import path from 'path'
// import { ProtoGrpcType } from 'proto/auth'

const grpcServer = new Server()
const packageDef = loadSync(path.resolve(__dirname, '../node_modules/y3dc-libs/dist/proto/sso.proto'))
export const grpcObj = loadPackageDefinition(packageDef) as any

// const packageDef = loadSync(path.resolve(__dirname, './proto/auth.proto'))
// export const grpcObj = loadPackageDefinition(packageDef) as unknown as ProtoGrpcType

grpcServer.addService(grpcObj.sso.AuthGrpcService.service, authGrpcController)

export default grpcServer
