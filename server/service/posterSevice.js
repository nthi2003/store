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
                console.log('Không có file ảnh nào hợp lệ');
            }
        }
        return imageUrls;
    } catch (error) {
        throw new Error(error.message);
    }
};

const createPoster = async (posterData, files) => {
    try {
        const {
            LinkPosterHeader,
            LinkPosterSlick,
            LinkPosterLeftSlick,
            LinkPosterBottomSlick,
            LinkPosterBottom,
            LinkPosterLeftRight
        } = posterData;

        const processedHeader = files.headerFiles ? await uploadImages(files.headerFiles) : [];
        const processedSlick = files.slickFiles ? await uploadImages(files.slickFiles) : [];
        const processedLeftSlick = files.leftSlickFiles ? await uploadImages(files.leftSlickFiles) : [];
        const processedBottomSlick = files.bottomSlickFiles ? await uploadImages(files.bottomSlickFiles) : [];
        const processedBottom = files.bottomFiles ? await uploadImages(files.bottomFiles) : [];
        const processedLeftRight = files.leftRightFiles ? await uploadImages(files.leftRightFiles) : []; 

        const newPoster = new Poster({
            posterHeader: processedHeader,
            LinkPosterHeader: LinkPosterHeader || [],
            posterSlick: processedSlick,
            LinkPosterSlick: LinkPosterSlick || [],
            posterLeftSlick: processedLeftSlick,
            LinkPosterLeftSlick: LinkPosterLeftSlick || [],
            posterBottomSlick: processedBottomSlick,
            LinkPosterBottomSlick: LinkPosterBottomSlick || [],
            posterBottom: processedBottom,
            LinkPosterBottom: LinkPosterBottom || [],
            posterLeftRight: processedLeftRight,
            LinkPosterLeftRight: LinkPosterLeftRight || []
        });

        await newPoster.save();
        return newPoster;
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
const updatePoster = async (id, posterData, files) => {
    try {
        const {
            LinkPosterHeader,
            LinkPosterSlick,
            LinkPosterLeftSlick,
            LinkPosterBottomSlick,
            LinkPosterBottom,
            LinkPosterLeftRight
        } = posterData;
        const processedHeader = files.headerFiles ? await uploadImages(files.headerFiles) : [];
        const processedSlick = files.slickFiles ? await uploadImages(files.slickFiles) : [];
        const processedLeftSlick = files.leftSlickFiles ? await uploadImages(files.leftSlickFiles) : [];
        const processedBottomSlick = files.bottomSlickFiles ? await uploadImages(files.bottomSlickFiles) : [];
        const processedBottom = files.bottomFiles ? await uploadImages(files.bottomFiles) : [];
        const processedLeftRight = files.LeftRightFiles ? await uploadImages(files.LeftRightFiles) : [];
        const poster = await Poster.findById(id);
        if (!poster) {
            return {
                status: 'error',
                message : 'Không có ảnh'
            }
        }
        if (processedHeader) {
            poster.posterHeader = processedHeader;
        }
        if (processedSlick) {
            poster.posterSlick = processedSlick
        }
        if (processedLeftSlick) {
            poster.postesLeftSlick = processedLeftSlick
        }
        if (processedBottomSlick) {
            poster.posterBottomSlick = processedBottomSlick
        }
        if (processedBottom) {
            poster.posterBottom = processedBottom
        }
        if (processedLeftRight) {
            poster.posterBottom = processedLeftRight
        }





        if (LinkPosterHeader) {
            poster.LinkPosterHeader = LinkPosterHeader;
        }
        if (LinkPosterSlick) {
            poster.LinkPosterSlick = LinkPosterSlick;
        }
        if (LinkPosterLeftSlick) {
            poster.LinkPosterLeftSlick = LinkPosterLeftSlick;
        }
        if (LinkPosterBottomSlick) {
            poster.LinkPosterBottomSlick = LinkPosterBottomSlick;
        }
        if (LinkPosterBottom) {
            poster.LinkPosterBottom = LinkPosterBottom;
        }
        if (LinkPosterLeftRight) {
            poster.LinkPosterLeftRight = LinkPosterLeftRight;
        }
        const updatedPoster = await poster.save();
        return updatedPoster;
    }
    catch (error) {
        return { status: 'error', message: error.message }
    }
}
const deleteImagesPoster = async (id, imageId, imageType) => {
    try {
        const poster = await Poster.findById(id);
        if (!poster) {
            return {
                status: 'error',
                message: 'Không có ảnh'
            };
        }

        const imageTypeMap = {
            posterHeader: poster.posterHeader,
            posterSlick: poster.posterSlick,
            posterLeftSlick: poster.postesLeftSlick,
            posterBottomSlick: poster.posterBottomSlick,
            posterBottom: poster.posterBottom
        };

        const images = imageTypeMap[imageType];
        if (!images) {
            return {
                status: 'error',
                message: 'Không có ảnh '
            };
        }

        const imagesIndex = images.findIndex(image => image._id.toString() === imageId);
        if (imagesIndex === -1) {
            return {
                status: 'error',
                message: 'Không tìm thấy ảnh'
            };
        }

        await cloudinary.uploader.destroy(images[imagesIndex].public_id);

        images.splice(imagesIndex, 1);
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
