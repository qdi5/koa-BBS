const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/testdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// 连接collections, model + schema
const User = mongoose.model('users', {
  name: String,
  age: Number,
  email: String
})

const wz = new User({
  name: 'test',
  age: 28,
  email: 'wuzhefe@qq.com'
})

wz.save().then(() => {
  console.log('save OK!')
}).catch(error => {
  console.log('error:')
  console.log(error)
})
