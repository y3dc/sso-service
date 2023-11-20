import 'reflect-metadata'
import cors from 'cors'
import express from 'express'
import session from 'express-session'
import helmet from 'helmet'
import errorHandler from 'middlewares/error-handler.middleware'
import passportConfig from 'modules/auth/strategies/passport-config'
import morgan from 'morgan'
import appRoutes from 'routes'

const app = express()

// middleware
app.use(helmet())
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: 'bla bla bla',
  }),
)
passportConfig(app)
app.use(appRoutes)
app.use(errorHandler)

// not found page
app.get('*', (_req, res) => {
  return res.status(404).json({
    message: 'Not found!',
  })
})

export default app
