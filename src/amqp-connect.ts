import amqp from 'amqplib/callback_api'

import { AMQP_URL } from 'constants/envs'
const amqpConnect = () => {
  amqp.connect(AMQP_URL, function (error0, connection) {
    if (error0) {
      console.error('Failed connect to RMQ: ', error0.message)
      return
    }
    connection.createChannel(function (error1, channel) {
      if (error1) {
        console.error('Failed to create channel: ', error1.message)
        return
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
}

export default amqpConnect
