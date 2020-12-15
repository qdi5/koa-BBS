import mongoose from '../config/DBHelper'

const Schema = mongoose.Schema
const userSchema = new Schema({
  'name': { type: String },
  'age': { type: Number },
  'email': { type: String }
})

export default mongoose.model('users', userSchema)