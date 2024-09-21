const Poster = require('../model/Poster');
const cloudinary = require('../utils/cloudinary');

const uploadImages = async (files) => {
    try {
        const imageUrls = [];
        for (const file of files) {
            const result = await cloudinary.uploader.upload(file.path, { folder: 'poster' });
            if (result && result.public_id && result.secure_url) {
                imageUrls.push({
                    public_id: result.public_id,
                    url: result.secure_url
                });
            } else {
                return {
                    statusbar: 'error',
                    message: 'Không có file ảnh nào hợp lệ'
                }
            }
        }
        return imageUrls;
    } catch (error) {
        return {
            status: 'error',
            message: error.message
        }
    }
};

const createPoster = async (data, files) => {
    try {
        const headerFiles = await uploadImages(files.headerFiles || []);
        const slickFiles = await uploadImages(files.slickFiles || []);
        const leftSlickFiles = await uploadImages(files.leftSlickFiles || []);
        const bottomSlickFiles = await uploadImages(files.bottomSlickFiles || []);
        const bottomFiles = await uploadImages(files.bottomFiles || []);
        const leftRightFiles = await uploadImages(files.leftRightFiles || []);

       const poster  = await Poster.create({
        headerFiles,
        LinkPosterHeader: data.LinkPosterHeader || [],
        slickFiles,
        LinkPosterSlick: data.LinkPosterSlick || [],
        leftSlickFiles,
        LinkPosterLeftSlick: data.LinkPosterLeftSlick || [],
        bottomSlickFiles,
        LinkPosterBottomSlick: data.LinkPosterBottomSlick || [],
        bottomFiles,
        LinkPosterBottom: data.LinkPosterBottom || [],
        leftRightFiles,
        LinkPosterLeftRight: data.LinkPosterLeftRight || []
       })

      return {
        status : 'success' , message : 'Poster đã đựơc tạo', poster
      }
    } catch (error) {
        return {
            status: 'error',
            message: error.message
        };
    }
};

const getAll = async () => {
    try {
        const posters = await Poster.find();
        return {
            stasus: 'success',
            message: 'Thành công',
            posters: posters
        }
    }
    catch (error) {
        return {
            status: 'error',
            message: error.message
        }
    }
}
const updatePoster = async (posterId, data, files) => {
    try {
        const poster = await Poster.findById(posterId);
        if (!poster) {
            return {
                status: 'error',
                message: 'Poster không tồn tại'
            };
        }

        const updateData = {};


        const fileKeys = ['headerFiles', 'slickFiles', 'leftSlickFiles', 'bottomSlickFiles', 'bottomFiles', 'leftRightFiles'];
        for (const key of fileKeys) {
            if (files[key] && files[key].length) {
                updateData[key] = await uploadImages(files[key]);
            }
        }


        Object.keys(data).forEach(key => {
            if (data[key]) {
                updateData[key] = data[key];
            }
        });

        const updatedPoster = await Poster.findByIdAndUpdate(posterId, updateData, { new: true });

        return {
            status: 'success',
            message : 'Cập nhật poster thành công',
            updatedPoster
        };
    } catch (error) {
        return {
            status: 'error',
            message: error.message
        };
    }
};




const deleteImagesPoster = async (id, imageId, imageType) => {
    try {
        const poster = await Poster.findById(id);
        if (!poster) {
            return {
                status: 'error',
                message: 'Không tìm thấy poster'
            };
        }

        const imageTypeMap = {
            headerFiles: poster.headerFiles,
            slickFiles: poster.slickFiles,
            leftSlickFiles: poster.leftSlickFiles,
            bottomFiles: poster.bottomFiles,
            bottomSlickFiles : poster.bottomSlickFiles,
            leftRightFiles: poster.leftRightFiles
        };

        const images = imageTypeMap[imageType];
        if (!images) {
            return {
                status: 'error',
                message: 'Không tìm thấy loại ảnh'
            };
        }

        const imageIndex = images.findIndex(image => image._id.toString() === imageId);
        if (imageIndex === -1) {
            return {
                status: 'error',
                message: 'Không tìm thấy ảnh'
            };
        }

        const result = await cloudinary.uploader.destroy(images[imageIndex].public_id);
        if (result.result !== 'ok') {
            return {
                status: 'error',
                message: 'Không thể xóa ảnh trên Cloudinary'
            };
        }


        images.splice(imageIndex, 1);


        await poster.save();

        return {
            status: 'success',
            message: 'Xóa hình ảnh thành công'
        };
    } catch (error) {
        return {
            status: 'error',
            message: error.message
        };
    }
};

module.exports  = {
    createPoster,
    getAll,
    updatePoster,
    deleteImagesPoster

};
