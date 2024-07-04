const adminService =  require('../service/adminService')
const adminPage = async( req , res) => {
   try {
    const response = await adminService.adminPage()
    return res.status(200).json(response)
   }
   catch (e) {
    return res.status(500).json({
        status: 'error',
        message: e.message
    });
   }
}
const getAllUsers = async( req , res ) => {
    try{
        const response = await adminService.getAllUsers()
        return res.status(200).json(response)

    }
    catch (e) {
        return res.status(500).json({
            status: 'error',
            message: e.message
        })
    }
}
const updateUsers = async (req, res) => {
    const { id } = req.params;
    const { isAdmin } = req.body;

    try {
        const response = await adminService.updateUsers(id, isAdmin);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(500).json({
            status: 'error',
            message: e.message
        });
    }
};
const deleteUsers = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await adminService.deleteUsers(id);
        return res.status(200).json(response);

    }
    catch (e) {
        return res.status(500).json({
            status: 'error',
            message: e.message
        });
    }
}
module.exports = {
    adminPage,
    getAllUsers,
    updateUsers,
    deleteUsers
}