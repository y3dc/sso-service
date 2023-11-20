import { Express } from 'express'
import passport from 'passport'
import './passport-local'
import './passport-jwt'

passport.serializeUser((user: any, done) => {
  done(null, user)
})

passport.deserializeUser((user: any, done) => {
  done(null, user)
})

const passportConfig = (app: Express) => {
  app.use(passport.initialize())
  app.use(passport.session())
}

export default passportConfig
