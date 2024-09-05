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
                throw new Error('Không có file ảnh nào hợp lệ');
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
            LinkPorterSlick,
            LinkPorterLeftSlick,
            LinkPorterBottomSlick,
            LinkPorterBottom
        } = posterData;

        const processedHeader = files.headerFiles ? await uploadImages(files.headerFiles) : [];
        const processedSlick = files.slickFiles ? await uploadImages(files.slickFiles) : [];
        const processedLeftSlick = files.leftSlickFiles ? await uploadImages(files.leftSlickFiles) : [];
        const processedBottomSlick = files.bottomSlickFiles ? await uploadImages(files.bottomSlickFiles) : [];
        const processedBottom = files.bottomFiles ? await uploadImages(files.bottomFiles) : [];

        const newPoster = new Poster({
            porterHeader: processedHeader,
            LinkPosterHeader: LinkPosterHeader || [],
            porterSlick: processedSlick,
            LinkPorterSlick: LinkPorterSlick || [],
            porterLeftSlick: processedLeftSlick,
            LinkPorterLeftSlick: LinkPorterLeftSlick || [],
            porterBottomSlick: processedBottomSlick,
            LinkPorterBottomSlick: LinkPorterBottomSlick || [],
            porterBottom: processedBottom,
            LinkPorterBottom: LinkPorterBottom || []
        });

        await newPoster.save();
        return newPoster;
    } catch (error) {
        throw new Error(error.message);
    }
};
const getAll = async () => {
    try {
       const poster = await Poster.find();
       return {
        stasus : 'success',
        message : 'Thành công',
        poster
       }
    }
    catch (error) {
        return {
            status: 'error',
            message: error.message
        }
    }
}

module.exports = {
    createPoster,
    getAll,
    getAllPosterPage
};
