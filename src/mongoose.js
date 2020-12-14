const mongoose = require('mongoose')

mongoose.connect('mongodb://root:wz128520@127.0.0.1:27017/testdb', {
  useNewUrlParser: true
})
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
