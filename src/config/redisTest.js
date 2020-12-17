import { getValue, setValue, getHValue } from './RedisConfig'

setValue('imooc', 'imooc message from redis client')

getValue('imooc').then(res => {
  console.log('getValue:' + res)
})

setValue('imoocobj', {name: 'brain', age: 45, email: 'wz@qq.com'})

getHValue('imoocobj').then(res => {
  console.log(res)
})
