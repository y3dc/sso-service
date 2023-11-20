import { JWT_SECRET } from 'constants/envs'
import passport from 'passport'
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt'

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: JWT_SECRET,
    },
    (jwt_payload, done) => {
      // User.findOne({id: jwt_payload.sub}, function(err, user) {
      //     if (err) {
      //         return done(err, false);
      //     }
      //     if (user) {
      //         return done(null, user);
      //     } else {
      //         return done(null, false);
      //         // or you could create a new account
      //     }
      // });
      return done(null, jwt_payload)
    },
  ),
)
