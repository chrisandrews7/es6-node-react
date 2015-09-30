import passport from 'passport';
import _ from 'lodash';
import { strategy as localStrategy } from 'passport-local';

import { response } from '../libs/helperUtils';
import config from '../config/config';
import user from '../models/user';

passport.serializeUser(function(user, callback) {
  callback(null, user);
});

passport.deserializeUser(function(user, callback) {
  callback(null, user);
});

passport.use(new localStrategy(function(username, password, callback) {
  process.nextTick(function() {

    user.findOne({ username: username }, (err, user) => {
      if (err) {
        return callback(err);
      }

      if (!user) {
        return callback(null, false);
      }

      user.verifyPassword(password, (err, isMatch) => {
        if (err) {
          return callback(err);
        }
        if (!isMatch) {
          return callback(null, false);
        }
        return callback(null, user);
      });
    });

  });
}));
