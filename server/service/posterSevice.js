const Poster = require('../model/Poster');
const cloudinary = require('../utils/cloudinary');

const uploadImages = async (files) => {
    try {
      const imageUrls = [];
      for (const file of files) {
        const result = await cloudinary.uploader.upload(file.path, {folder : 'poster'})
        
        if (result && result.public_id && result.secure_url){
            imageUrls.push({
                public_id : result.public_id,
                url : result.secure_url
            });
        } else {
            return {
                status : 'error',
                message : 'Không có file ảnh nào hợp lệ',
            }
        }
      }
      return imageUrls
    }
    catch (error) {
        return {
            status: 'error',
            message : error.message
        }
    }
}
const createPoster = async (posterData , files) => {
    try {
        const { 
            LinkPosterHeader, 
            LinkPorterSlick, 
            LinkPorterLeftSlick, 
            LinkPorterBottomSlick, 
            LinkPorterBottom 
        } = posterData;

        const processedHeader = await uploadImages(files.headerFiles);
        const processedSlick  = await uploadImages(files.slickFiles);
        const processedLeftSlick  = await uploadImages(files.leftSlickFiles);
        const processedBottomSlick  = await uploadImages(files.bottomSlickFiles);
        const processedBottom  = await uploadImages(files.bottomFiles);

        const newPoster = new Poster ( {
            porterHeader: processedHeader,
            LinkPosterHeader: LinkPosterHeader,
            porterSlick: processedSlick,
            LinkPorterSlick: LinkPorterSlick,
            porterLeftSlick: processedLeftSlick,
            LinkPorterLeftSlick: LinkPorterLeftSlick,
            porterBottomSlick: processedBottomSlick,
            LinkPorterBottomSlick: LinkPorterBottomSlick,
            porterBottom: processedBottom,
            LinkPorterBottom: LinkPorterBottom
      
        })
        await newPoster.save()
        return newPoster
    }
    catch (error) {
        return {
            status: 'error',
            message: error.message
        }
    }
}
module.exports = {
    createPoster
}