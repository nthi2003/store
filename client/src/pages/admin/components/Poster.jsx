import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePoster, getAllPoster, deleteImagesPoster } from "../../../redux/actions/posterAction";
import { IoMdClose } from "react-icons/io";
import { HiPlusSm } from "react-icons/hi";
import { Toaster } from 'react-hot-toast';
const Poster = () => {
    const dispatch = useDispatch();
    const poster = useSelector(state => state.poster.posters.posters[0]);

    const [selectedImages, setSelectedImages] = useState({});
    const [imagePreviews, setImagePreviews] = useState({});
    const [formData, setFormData] = useState({
        LinkPosterHeader: [""],
        LinkPosterSlick: [""],
        LinkPosterLeftSlick: [""],
        LinkPosterBottomSlick: [""],
        LinkPosterBottom: [""],
        LinkPosterLeftRight: [""],
    });

    useEffect(() => {
        dispatch(getAllPoster());
    }, [dispatch]);

    useEffect(() => {
        if (poster) {
            setFormData({
                LinkPosterHeader: poster.LinkPosterHeader || [""],
                LinkPosterSlick: poster.LinkPosterSlick || [""],
                LinkPosterLeftSlick: poster.LinkPosterLeftSlick || [""],
                LinkPosterBottomSlick: poster.LinkPosterBottomSlick || [""],
                LinkPosterBottom: poster.LinkPosterBottom || [""],
                LinkPosterLeftRight: poster.LinkPosterLeftRight || [""],
            });

            setImagePreviews({
                headerFiles: poster.headerFiles ? poster.headerFiles.map(file => file.url) : [],
                slickFiles: poster.slickFiles ? poster.slickFiles.map(file => file.url) : [],
                leftSlickFiles: poster.leftSlickFiles ? poster.leftSlickFiles.map(file => file.url) : [],
                bottomSlickFiles: poster.bottomSlickFiles ? poster.bottomSlickFiles.map(file => file.url) : [],
                bottomFiles: poster.bottomFiles ? poster.bottomFiles.map(file => file.url) : [],
                leftRightFiles: poster.leftRightFiles ? poster.leftRightFiles.map(file => file.url) : [],
            });
        }
    }, [poster]);

    const handleImageChange = (e) => {
        const { name, files } = e.target;
        const selectFiles = Array.from(files);

        setSelectedImages(prev => ({
            ...prev,
            [name]: selectFiles,
        }));

        const previews = selectFiles.map(file => URL.createObjectURL(file));
        setImagePreviews(prev => ({
            ...prev,
            [name]: previews,
        }));
    };

    const handleInputChange = (e, index, field) => {
        const { value } = e.target;

        setFormData(prev => {
            const updatedArray = [...prev[field]];
            updatedArray[index] = value;
            return {
                ...prev,
                [field]: updatedArray,
            };
        });
    };

    const addNewInput = (field) => {
        setFormData(prev => ({
            ...prev,
            [field]: [...prev[field], ""],
        }));
    };

    const handleImageRemove = (field, index , id , imageId , imageType) => {
        setImagePreviews(prev => {
            const updatedPreviews = Array.isArray(prev[field]) ? [...prev[field]] : []
            updatedPreviews.splice(index, 1);
            return {
                ...prev,
                [field]: updatedPreviews,
            };
        });

        setSelectedImages(prev => {
            const updatedImages = Array.isArray(prev[field]) ? [...prev[field]] : [];
            updatedImages.splice(index, 1);
            return {
                ...prev,
                [field]: updatedImages,
            };
        });
        dispatch(deleteImagesPoster(id , imageType , imageId ))
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData2 = new FormData();
        Object.keys(formData).forEach((key) => {
            const value = formData[key];
            if (Array.isArray(value)) {
                value.forEach((value , index) => {
                    formData2.append(`${key}[${index}]`, value)
                })   
            }
            
        });

        Object.keys(selectedImages).forEach((key) => {
            const files = selectedImages[key];
            files.forEach((file) => {
                if (file instanceof File) {
                    formData2.append(key, file);
                }
            });
        });

       

        if (poster?._id) {
            dispatch(updatePoster(poster._id, formData2));
        }
    };


    return (
        
        <div className="bg-white p-5 w-full h-[830px] overflow-hidden mb-2">
                 <Toaster />
            <form className="overflow-y-auto max-h-full" onSubmit={handleSubmit}>
                <h1 className="text-center text-4xl font-semibold">Upload Poster</h1>

                <div className="ml-52">
                    <span>HeaderFile</span>
                    <label
                        className="flex flex-col items-center justify-center w-[1200px] h-[500px] border-2 border-red-300 border-dashed cursor-pointer"
                        htmlFor="headerFiles"
                    >
                        <div>
                            <p className="mb-2 text-sm text-red-500">
                                <span className="font-semibold">Click to upload</span> or drag
                                and drop
                            </p>
                            <p className="text-xs text-red-500">
                                SVG, PNG, JPG or GIF (MAX. 1200x500px)
                            </p>
                        </div>
                        <input
                            type="file"
                            id="headerFiles"
                            name="headerFiles"
                            multiple
                            className="hidden"
                            onChange={handleImageChange}
                        />
                    </label>

                    <div className="flex flex-wrap mt-4">
                        {imagePreviews.headerFiles &&
                            imagePreviews.headerFiles.map((preview, index) => (
                                <div key={index} className="relative mr-4 mb-4">
                                    <img src={preview} className="w-[120px] h-[120px] object-cover ml-2" />
                                    <button
                                        type="button"
                                        className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full"
                                        onClick={() => handleImageRemove( 'headerFiles', index , poster._id , 'headerFiles', poster.headerFiles[index]._id , )}
                                    >
                                        <IoMdClose />
                                    </button>
                                </div>
                            ))}
                    </div>
                </div>

                <div className="ml-52">
                    <label htmlFor="LinkPosterHeader">Link Poster Header</label>
                    {Array.isArray(formData.LinkPosterHeader) && formData.LinkPosterHeader.map((header, index) => (
                        <div className="mb-4" key={index}>
                            <input
                                type="text"
                                id={`LinkPosterHeader-${index}`}
                                name="LinkPosterHeader"
                                className="mt-4 p-2 w-[1200px] border border-gray-300 rounded"
                                value={header}
                                onChange={e => handleInputChange(e, index, 'LinkPosterHeader')}
                            />
                        </div>
                    ))}

                    <button
                        type="button"
                        onClick={() => addNewInput('LinkPosterHeader')}
                        className="bg-green-500 text-white rounded w-5 h-5 flex items-center justify-center"
                    >
                        <HiPlusSm className="ml-1" />
                    </button>
                </div>

              

               <div className="ml-[200px]">
                    <span>SlickFile</span>
                    <label
                        className="flex flex-col items-center justify-center w-[1200px] h-[500px] border-2 border-red-300 border-dashed"
                        htmlFor="slickFiles"
                    >
                        <div>
                            <p className="mb-2 text-sm text-red-500">
                                <span className="font-semibold">Click to upload</span> or drag
                                and drop
                            </p>
                            <p className="text-xs text-red-500">
                                SVG, PNG, JPG or GIF (MAX. 1200x500px)
                            </p>
                        </div>
                        <input
                            type="file"
                            id="slickFiles"
                            name="slickFiles"
                            multiple
                            className="hidden"
                            onChange={handleImageChange}
                        />
                    </label>

                    <div className="flex flex-wrap mt-4">
                        {imagePreviews.slickFiles &&
                            imagePreviews.slickFiles.map((preview, index) => (
                                <div key={index} className="relative mr-4 mb-4">
                                    <img src={preview} className="w-[120px] h-[120px] object-cover ml-2" />
                                    <button
                                        type="button"
                                        className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full"
                                        onClick={() => handleImageRemove('slickFiles' , index, poster._id , 'slickFiles' ,  poster.slickFiles[index]._id )}
                                    >
                                        <IoMdClose />
                                    </button>
                                </div>
                            ))}
                    </div>
                </div>
                <div className="ml-[200px]">
                    <label htmlFor="LinkPosterSlick">Link Poster Slick</label>
                    {Array.isArray(formData.LinkPosterSlick) && formData.LinkPosterSlick.map((slick, index) => (
                        <div className="mb-4" key={index}>
                            <input
                                type="text"
                                id={`LinkPosterSlick-${index}`}
                                name="LinkPosterSlick"
                                className="mt-4 p-2 w-[1200px] border border-gray-300 rounded"
                                value={slick}
                                onChange={e => handleInputChange(e, index , 'LinkPosterSlick')}
                            />
                        </div>
                    ))}

                    <button
                        type="button"
                        onClick={() => addNewInput('LinkPosterSlick')}
                        className=" bg-green-500 text-white rounded w-[20px] h-[20px]"
                    >
                        <HiPlusSm className="ml-[2px]" />
                    </button>
                </div>

                <div className="ml-[200px]">
                    <span>leftSlickFiles</span>
                    <label
                        className="flex flex-col items-center justify-center w-[1200px] h-[500px] border-2 border-red-300 border-dashed"
                        htmlFor="leftSlickFiles"
                    >
                        <div>
                            <p className="mb-2 text-sm text-red-500">
                                <span className="font-semibold">Click to upload</span> or drag
                                and drop
                            </p>
                            <p className="text-xs text-red-500">
                                SVG, PNG, JPG or GIF (MAX. 1200x500px)
                            </p>
                        </div>
                        <input
                            type="file"
                            id="leftSlickFiles"
                            name="leftSlickFiles"
                            multiple
                            className="hidden"
                            onChange={handleImageChange}
                        />
                    </label>

                    <div className="flex flex-wrap mt-4">
                        {imagePreviews.leftSlickFiles &&
                            imagePreviews.leftSlickFiles.map((preview, index) => (
                                <div key={index} className="relative mr-4 mb-4">
                                    <img src={preview} className="w-[120px] h-[120px] object-cover ml-2" />
                                    <button
                                        type="button"
                                        className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full"
                                        onClick={() => handleImageRemove('leftSlickFiles', index , poster._id , 'leftSlickFiles' , poster.leftSlickFiles[index]._id)}
                                    >
                                        <IoMdClose />
                                    </button>
                                </div>
                            ))}
                    </div>
                </div>
                <div className="ml-[200px]">
                    <label htmlFor="LinkPosterLeftSlick">LinkPosterLeftSlick</label>
                    {Array.isArray(formData.LinkPosterLeftSlick) && formData.LinkPosterLeftSlick.map((header, index) => (
                        <div className="mb-4" key={index}>
                            <input
                                type="text"
                                id={`LinkPosterLeftSlick-${index}`}
                                name="LinkPosterLeftSlick"
                                className="mt-4 p-2 w-[1200px] border border-gray-300 rounded"
                                value={header}
                                onChange={e => handleInputChange(e, index , 'LinkPosterLeftSlick')}
                            />
                        </div>
                    ))}

                    <button
                        type="button"
                        onClick={() => addNewInput('LinkPosterLeftSlick')}
                        className=" bg-green-500 text-white rounded w-[20px] h-[20px]"
                    >
                        <HiPlusSm className="ml-[2px]" />
                    </button>
                </div>
                <div className="ml-[200px]">
                    <span>bottomSlickFiles</span>
                    <label
                        className="flex flex-col items-center justify-center w-[1200px] h-[500px] border-2 border-red-300 border-dashed"
                        htmlFor="bottomSlickFiles"
                    >
                        <div>
                            <p className="mb-2 text-sm text-red-500">
                                <span className="font-semibold">Click to upload</span> or drag
                                and drop
                            </p>
                            <p className="text-xs text-red-500">
                                SVG, PNG, JPG or GIF (MAX. 1200x500px)
                            </p>
                        </div>
                        <input
                            type="file"
                            id="bottomSlickFiles"
                            name="bottomSlickFiles"
                            multiple
                            className="hidden"
                            onChange={handleImageChange}
                        />
                    </label>

                    <div className="flex flex-wrap mt-4">
                        {imagePreviews.bottomSlickFiles &&
                            imagePreviews.bottomSlickFiles.map((preview , index) => (
                                <div key={index} className="relative mr-4 mb-4">
                                
                                    <img src={preview} className="w-[120px] h-[120px] object-cover ml-2" />
                                    <button
                                        type="button"
                                        className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full"
                                        onClick={() => handleImageRemove('bottomSlickFiles' , index , poster._id , 'bottomSlickFiles' , poster.bottomSlickFiles[index]._id)}
                                    >
                                        <IoMdClose />
                                    </button>
                                </div>
                            ))}
                    </div>
                    <div className="">
                    <label htmlFor="LinkPosterBottomSlick">LinkPosterBottomSlick</label>
                    {Array.isArray(formData.LinkPosterBottomSlick) && formData.LinkPosterBottomSlick.map((header, index) => (
                        <div className="mb-4" key={index}>
                            <input
                                type="text"
                                id={`LinkPosterBottomSlick-${index}`}
                                name="LinkPosterBottomSlick"
                                className="mt-4 p-2 w-[1200px] border border-gray-300 rounded"
                                value={header}
                                onChange={e => handleInputChange(e, index , 'LinkPosterBottomSlick')}
                            />
                        </div>
                    ))}

                    <button
                        type="button"
                        onClick={() => addNewInput('LinkPosterBottomSlick')}
                        className=" bg-green-500 text-white rounded w-[20px] h-[20px]"
                    >
                        <HiPlusSm className="ml-[2px]" />
                    </button>
                </div>
                </div>

                <div className="ml-[200px]">
                    <span>bottomFiles</span>
                    <label
                        className="flex flex-col items-center justify-center w-[1200px] h-[500px] border-2 border-red-300 border-dashed"
                        htmlFor="bottomFiles"
                    >
                        <div>
                            <p className="mb-2 text-sm text-red-500">
                                <span className="font-semibold">Click to upload</span> or drag
                                and drop
                            </p>
                            <p className="text-xs text-red-500">
                                SVG, PNG, JPG or GIF (MAX. 1200x500px)
                            </p>
                        </div>
                        <input
                            type="file"
                            id="bottomFiles"
                            name="bottomFiles"
                            multiple
                            className="hidden"
                            onChange={handleImageChange}
                        />
                    </label>

                    <div className="flex flex-wrap mt-4">
                        {imagePreviews.bottomFiles &&
                            imagePreviews.bottomFiles.map((preview, index) => (
                                <div key={index} className="relative mr-4 mb-4">
                                    <img src={preview} className="w-[120px] h-[120px] object-cover ml-2" />
                                    <button
                                        type="button"
                                        className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full"
                                        onClick={() => handleImageRemove('bottomFiles' , index , poster._id , 'bottomFiles' , poster.bottomFiles[index]._id)}
                                    >
                                        <IoMdClose />
                                    </button>
                                </div>
                            ))}
                    </div>
                    <div className="">
                    <label htmlFor="LinkPosterBottom">LinkPosterBottom</label>
                    {Array.isArray(formData.LinkPosterBottom) && formData.LinkPosterBottom.map((header, index) => (
                        <div className="mb-4" key={index}>
                            <input
                                type="text"
                                id={`LinkPosterBottom-${index}`}
                                name="LinkPosterBottom"
                                className="mt-4 p-2 w-[1200px] border border-gray-300 rounded"
                                value={header}
                                onChange={e => handleInputChange(e, index, 'LinkPosterBottom')}
                            />
                        </div>
                    ))}

                    <button
                        type="button"
                        onClick={() => addNewInput('LinkPosterBottom')}
                        className=" bg-green-500 text-white rounded w-[20px] h-[20px]"
                    >
                        <HiPlusSm className="ml-[2px]" />
                    </button>
                </div>
                </div>


                <div className="ml-[200px]">
                    <span>leftRightFiles</span>
                    <label
                        className="flex flex-col items-center justify-center w-[1200px] h-[500px] border-2 border-red-300 border-dashed"
                        htmlFor="leftRightFiles"
                    >
                        <div>
                            <p className="mb-2 text-sm text-red-500">
                                <span className="font-semibold">Click to upload</span> or drag
                                and drop
                            </p>
                            <p className="text-xs text-red-500">
                                SVG, PNG, JPG or GIF (MAX. 1200x500px)
                            </p>
                        </div>
                        <input
                            type="file"
                            id="leftRightFiles"
                            name="leftRightFiles"
                            multiple
                            className="hidden"
                            onChange={handleImageChange}
                        />
                    </label>

                    <div className="flex flex-wrap mt-4">
                        {imagePreviews.leftRightFiles &&
                            imagePreviews.leftRightFiles.map((preview, index) => (
                                <div key={index} className="relative mr-4 mb-4">
                                    <img src={preview} className="w-[120px] h-[120px] object-cover ml-2" />
                                    <button
                                        type="button"
                                        className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full"
                                        onClick={() => handleImageRemove('leftRightFiles' , index , poster._id , 'leftRightFiles' , poster.leftRightFiles[index]._id)}
                                    >
                                        <IoMdClose />
                                    </button>
                                </div>
                            ))}
                    </div>
                    <div className="">
                    <label htmlFor="LinkPosterLeftRight">LinkPosterLeftRight</label>
                    {Array.isArray(formData.LinkPosterLeftRight) && formData.LinkPosterLeftRight.map((header, index) => (
                        <div className="mb-4" key={index}>
                            <input
                                type="text"
                                id={`LinkPosterLeftRight-${index}`}
                                name="LinkPosterLeftRight"
                                className="mt-4 p-2 w-[1200px] border border-gray-300 rounded"
                                value={header}
                                onChange={e => handleInputChange(e, index, 'LinkPosterLeftRight')}
                            />
                        </div>
                    ))}

                    <button
                        type="button"
                        onClick={() => addNewInput('LinkPosterLeftRight')}
                        className=" bg-green-500 text-white rounded w-[20px] h-[20px]"
                    >
                        <HiPlusSm className="ml-[2px]" />
                    </button>
                </div>
                </div>

               
                


                <button
                    type="submit"
                    className="ml-52 mt-4 p-2 bg-blue-500 text-white rounded"
                >
                    Update Poster
                </button>
            </form>
        </div>
    );
};

export default Poster;
