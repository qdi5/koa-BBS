import User from './login'

// 查
const findUser = async (username, password) => {
    const result = await User.findOne({
        username,
        password
    })
    return result
}
export {
    findUser
}