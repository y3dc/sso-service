import { ServerCredentials } from '@grpc/grpc-js'
import app from 'app'
import { AMQP_URL, GRPC_PORT, HTTP_PORT } from 'constants/envs'
import AppDataSource from 'database/dataSource'
import grpcServer from 'grpc-server'
import amqp from 'amqplib/callback_api'

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

  amqp.connect(AMQP_URL, function (error0, connection) {
    if (error0) {
      throw error0
    }
    connection.createChannel(function (error1, channel) {
      if (error1) {
        throw error1
      }
      var queue = 'hello'
      var msg = 'Hello world'

      channel.assertQueue(queue, {
        durable: false,
      })

      channel.sendToQueue(queue, Buffer.from(msg))
      console.log(' [x] Sent %s', msg)

      channel.consume(
        queue,
        function (msg) {
          console.log(' [x] Received %s', msg?.content?.toString())
        },
        {
          noAck: true,
        },
      )
    })

    setTimeout(function () {
      connection.close()
      process.exit(0)
    }, 3000)
  })
})

grpcServer.bindAsync(`0.0.0.0:${GRPC_PORT}`, ServerCredentials.createInsecure(), () => {
  console.log(`GRPC server listening to port ${GRPC_PORT}`)
  grpcServer.start()
})
