import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    username: {type: String, required: true, lowercase: true, unique: true},
    password: {type: String, required: true}
});

userSchema.pre('save', function(callback) {
  var user = this;

  if (!user.isModified('password')) {
  	return callback();
  }

  bcrypt.genSalt(5, (err, salt) => {
    if (err) {
    	return callback(err);
    }

    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) {
      	return callback(err);
      }
      user.password = hash;
      callback();
    });
  });
});

userSchema.methods.verifyPassword = function(password, callback) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) {
    	return callback(err);
    }
    callback(null, isMatch);
  });
};

export default mongoose.model('User', userSchema);
