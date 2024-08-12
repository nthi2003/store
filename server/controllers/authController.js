
const authService = require('../service/authService');

const createUser = async (req, res) => {
    try {
        const { name, email, password, confirmPassword, phone, role , active } = req.body;
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*$/;
        const isCheckEmail = reg.test(email);

        if (!name || !email || !password || !confirmPassword || !phone) {
            return res.status(400).json({
                status: 'error',
                message: 'Điền thêm thông tin còn thiếu'
            });
        } else if (!isCheckEmail) {
            return res.status(400).json({
                status: 'error',
                message: 'Nhập sai định dạng email'
            });
        } else if (password !== confirmPassword) {
            return res.status(400).json({
                status: 'error',
                message: 'Mật khẩu không khớp'
            });
        }

        const response = await authService.createUser({ name, email, password, phone, role , active });
        return res.status(200).json(response)
    } catch (e) {
        return res.status(500).json({
            status: 'error',
            message: e.message
        });
    }
};
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*$/;
        const isCheckEmail = reg.test(email);

        if (!email || !password) {
            return res.status(400).json({
                status: 'error',
                message: 'Điền thêm thông tin còn thiếu'
            });
        } else if (!isCheckEmail) {
            return res.status(400).json({
                status: 'error',
                message: 'Nhập sai định dạng email'
            });
        }

        const response = await authService.loginUser(email, password);


        if (!response) {
            return res.status(500).json({
                status: 'error',
                message: 'Phản hồi không hợp lệ từ authService'
            });
        }

        return res.status(response.status === 'error' ? 400 : 200).json(response);

    } catch (e) {
        return res.status(500).json({
            status: 'error',
            message: e.message
        });
    }
};

const getProfile = async (req, res) => {
    try {
        const userId = req.user.id
        const response = await authService.getProfile({ userId })
        return res.status(200).json(response)
    }
    catch (e) {
        return res.status(500).json({
            status: 'error',
            message: e.message
        });
    }
}

const updateUserProfile = async (req, res) => {
    try {
        const userId = req.user.id;
        const { name, email, password, phone, address } = req.body;
        const updateDataProfile = {
            name,
            email,
            password,
            phone,
            address
        };
        const response = await authService.updateUserProfile(userId, updateDataProfile);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(500).json({
            status: 'error',
            message: e.message
        });
    }
};
module.exports = {
    createUser,
    loginUser,
    getProfile,
    updateUserProfile
};
