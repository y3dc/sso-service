import { ServerCredentials } from '@grpc/grpc-js'
import app from 'app'
import { GRPC_PORT, HTTP_PORT } from 'constants/envs'
import AppDataSource from 'database/dataSource'
import grpcServer from 'grpc-server'

// AppDataSource.initialize()
//   .then(() => {
//     console.log('Data Source has been initialized!')

//     app.listen(PORT, () => {
//       console.log(`API server listening to port ${PORT}`)
//     })

//     grpcServer.bindAsync(`0.0.0.0:${GRPC_PORT}`, ServerCredentials.createInsecure(), () => {
//       console.log(`GRPC server listening to port ${GRPC_PORT}`)
//       grpcServer.start()
//     })
//   })
//   .catch((err) => {
//     console.error('Error during Data Source initialization', err)
//   })

app.listen(HTTP_PORT, () => {
  console.log(`API server listening to port ${HTTP_PORT}`)
})

grpcServer.bindAsync(`0.0.0.0:${GRPC_PORT}`, ServerCredentials.createInsecure(), () => {
  console.log(`GRPC server listening to port ${GRPC_PORT}`)
  grpcServer.start()
})
