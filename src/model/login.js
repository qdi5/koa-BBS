import mongoose from '../config/DBHelper'

const Schema = mongoose.Schema
const userSchema = new Schema({
  'username': { type: String },
  'password': { type: String }
})

export default mongoose.model('users', userSchema)