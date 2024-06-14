const mongoose = require('mongoose')
const Validator = require('validator')
const bcrypt = require('bcrypt')


const userSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Email is required'],
    lowercase: true,
    validate: [Validator.isEmail, 'Please enter a valid Email']
  },
  password: {
    type: String,
    required: [true, 'Password is Required'],
    select: false
  }
})


userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()

  this.password = await bcrypt.hash(this.password, 12)
  next()
})

userSchema.methods.comparePasswordInDb = async (pswd, pswdDB) => {
  return bcrypt.compare(pswd, pswdDB)
}



const User = mongoose.model('User', userSchema)
module.exports = User