import User from './test'

// 模型数据
const user = {
  name: 'brain',
  age: 30,
  email: 'brain@toimc.com'
}

// 增
const insertMethods = async () => {
  const data = new User(user)
  const result = await data.save()
  console.log(result)
}


// 查
const findMethods = async () => {
  const result = await User.find()
  console.log(result)
}

// 改
const updateMethods = async () => {
  const result = await User.updateOne({ name: 'brain' }, {
    email: 'wuwan@qq.com'
  })
  console.log(result)
}

// 删
const deleteMethods = async () => {
  const result = await User.deleteOne({ name: 'brain' })
  console.log(result)
}

deleteMethods()