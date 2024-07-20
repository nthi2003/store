// authService.js

const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const createUser = async ({ name, email, password, phone , role, active  }) => {
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
            role,
            active,
        });
        const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "1d"
        })
        return {
            status: 'success',
            message: 'Đăng kí  thành công',
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

    
  
            const accessToken = jwt.sign({ id: user._id, email: user.email, role: user.role , active: user.active}, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: "1d"
            })
            return {
                status: 'success',
                message: ' Đăng nhập thành công',
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
const getProfile = async (userId) => {
         try {
          const user = await User.findById(userId)
          if (!user)  {
             return {
                status: 'error',
                message: 'Không tìm thấy người dùng'
             }
          }
          return {
            status: 'success',
            message: 'Thành công',
            user
          }
         }
         catch (error) {
            return {
                status: 'error',
                error: error.message
            }
         }
}
const updateUserProfile = async (userId , updateDataProfile) => {
    try {
        const  user = await User.findById(userId)
        if (!user) {
            return {
                status: 'error',
                message: 'Người dùng không tồn tại'
            }
        }
        if (updateDataProfile.name)  user.name = updateDataProfile.name
        if (updateDataProfile.email)  user.email = updateDataProfile.email
        if (updateDataProfile.phone)  user.phone = updateDataProfile.phone
        if (updateDataProfile.password) {
            const hashedPassword = await bcrypt.hashSync(updateDataProfile.password , 10)
            user.password = hashedPassword
        }
        if(updateDataProfile.address){
            user.address = {
                street: updateDataProfile.address.street || user.address.street,
                city: updateDataProfile.address.city || user.address.city,
                district: updateDataProfile.address.district || user.address.district,
               
            }
        }
        await user.save();
        return {
            status: 'success',
            message: 'Cập nhật thông tin thành công',
            user
        }
    }
    catch (error) {
        return {
            status: "error",
            error: error.message
        }
    }
}

module.exports = {
    createUser,
    loginUser,
    getProfile,
    updateUserProfile
};
