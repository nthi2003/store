
const User = require('../model/User');
const adminPage = async () => {
    try {
        return {
            status: 'success',
            message: 'Chào mừng bạn đến trang quản trị viên',
            
        }
    }
    catch (error) {
        return {
            status: 'error',
            error: error.message

        }
    }
}
const getAllUsers = async() => {
    try {
        const users = await User.find({ })
        if(!users) {
            return {
                status: 'error',
                error: 'Không tồn tại'
            }
        }
        return {
            status: 'success',
            message: 'loading user thành công',
            users
        }
    }
    catch (error) {
        return {
            status: 'error',
            error: error.message
        }
    }

} 
const updateUsers = async(id, isAdmin) => {
    try {
        
        const users = await User.findByIdAndUpdate(id, {isAdmin})
        if(!users) {
            return {
                status: 'error',
                message: 'Không tồn tại'
            }
        }
        return {
            status: 'success',
            error: 'Cập nhạt thành công',
            users
        }
    }
    catch (error) {
        return {
            status: 'error',
            error: error.message
        }
    }
}
const deleteUsers = async(id) => {
    try {
       const users = await User.findByIdAndDelete(id)
       if(!users) {
        return {
            status: 'error',
            message: 'Không tìm thấy users'

        }
        
       }
       return {
        status: 'success',
        message: 'Xóa user thành công'
       }
    }
    catch (error) {
        return {
            status: 'error',
            error: error.message
        }
    }
}
module.exports = {
    adminPage,
    getAllUsers,
    updateUsers,
    deleteUsers
}