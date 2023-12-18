import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import path from 'path'
import { ProtoGrpcType } from 'proto/auth'

const packageDef = protoLoader.loadSync(path.resolve(__dirname, './proto/auth.proto'))
const grpcObj = grpc.loadPackageDefinition(packageDef) as unknown as ProtoGrpcType

// Initialize the gRPC client
export const grpcCatalogClient = new grpcObj.authPackage.Auth(
  'localhost:50051',
  grpc.credentials.createInsecure(),
)

// Invoke the Service operation/function
// grpcCatalogClient.Login({ username: '123123', password: '1312312' }, (err, response) => {
//   if (err) return console.error(err)

//   console.log('The difference is:', response)
// })
