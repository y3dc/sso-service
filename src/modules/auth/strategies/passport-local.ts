import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import authService from '../auth.service'

passport.use(
  new LocalStrategy(async (username, password, done) => {
    const userInfo = await authService.login(username, password)
    return done(null, { user: userInfo?.user, authInfo: { accessToken: userInfo?.accessToken } })
  }),
)
