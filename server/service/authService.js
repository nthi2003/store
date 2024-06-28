// authService.js

const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const createUser = async ({ name, email, password, phone }) => {
    try {
        const checkUser = await User.findOne({ email });
        if (checkUser) {
            return {
                status: 'error',
                message: 'Người dùng đã tồn tại'
            };
        }

        const hashedPassword = bcrypt.hashSync(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            phone,
            isAdmin: false
        });
        const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "1d"
        })
        return {
            status: 'success',
            message: 'Thành công',
            user,
            accessToken,

        };
    } catch (error) {
        return {
            status: 'error',
            message: error.message
        };
    }
};
const loginUser = async (email, password) => {
    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return {
                status: 'error',
                message: 'Chưa có tài khoản'
            };
        }
        const comparePassword = bcrypt.compareSync(password, user.password)

        if (!comparePassword) {
            return {
                status: 'error',
                mes: 'Tên đăng nhập hoặc mẫu khẩu không đúng'
            }
        }
  
            const accessToken = jwt.sign({ id: user._id, email: user.email, isAdmin: user.isAdmin }, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: "1d"
            })
            return {
                status: 'success',
                message: 'Thành công',
                user,
                accessToken
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
    createUser,
    loginUser
};
