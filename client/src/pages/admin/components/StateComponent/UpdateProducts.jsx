import React, { useEffect, useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';

const UpdateProducts = ({ Editshow, onClose, productId }) => {
    const dispatch = useDispatch();
    const product = useSelector(state => state.product.products.find(product => product._id === productId))
    const { categorys } = useSelector(state => state.category);
    const [selectedImages, setSelectedImages] = useState([]);
    const [imagePreviews, setImagePreviews] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        images: [],
        categoryid: '',
        categoryName: '',
        Stock: '',
        CPU: '',
        CPUDETAIL: '',
        RAMDETAIL: '',
        RAM: '',
        Screen: '',
        Keyboard: '',
        Audio: '',
        Lan: '',
        Bluetooth: '',
        Webcam: '',
        Weight: '',
        Size: '',
        HZ: '',
        VGA: '',
        SSD: ''
    })
    useEffect(() => {
        if (product) {
            setFormData({
                name: product.name,
                price: product.price,
               
                categoryid: product.categoryid,
                categoryName: product.categoryName,
                Stock: product.Stock,
                CPU: product.CPU,
                CPUDETAIL: product.CPUDETAIL,
                RAMDETAIL: product.RAMDETAIL,
                RAM: product.RAM,
                Screen: product.Screen,
                Keyboard: product.Keyboard,
                Audio: product.Audio,
                Lan: product.Lan,
                Bluetooth: product.Bluetooth,
                Webcam: product.Webcam,
                Weight: product.Weight,
                Size: product.Size,
                HZ: product.HZ,
                VGA: product.VGA,
                SSD: product.SSD
            });
            setSelectedImages(product.images.map(img => img.url))
           
        }
    }, [product])
    const handleChange = (e) => {
        const {name , value }  = e.target;
       setFormData(prev => ({
          ...prev,
          [name] : value
       }))

    }

  
    const handleFileChange = (e) => {
      const files = Array.from(e.target.files)
      setSelectedImages(files)
      setFormData(prev => (
        {
            ...prev,
            images : files
        }
      ))

    }
    const handleRemoveImage = (index) => {

        const newImages = selectedImages.filter((_, i) => i !== index);
        const newPreviews = imagePreviews.filter((_, i) => i !== index);
        setSelectedImages(newImages);
        setImagePreviews(newPreviews);
        setFormData(prev => ({
            ...prev,
            images: newImages
        }));
    }
    const handleCategoryChange = (e) => {
        

    }
    const handleUpdate = () => {

    }
    if (!Editshow) return
    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
            <button className="absolute top-2 right-2" onClick={onClose}>
                <AiOutlineCloseCircle className='text-white w-10 h-10' />
            </button>
            <div className='bg-white p-5 w-[50%] h-[95%] overflow-hidden'>
                <div className='overflow-y-auto max-h-full'>
                    <div className='text-[50px] text-center '>
                        <span className='text-[50px] '>Update Product</span>
                    </div>
                    <form onSubmit={handleUpdate}>
                        <div className='flex'>
                            <div className='w-[50%]'>
                                <span className='font-bold'>Name</span>
                                <input
                                    type="text"
                                    className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                                    placeholder='Name products'
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='w-[50%] ml-2'>
                                <span className='font-bold'>Price</span>
                                <input
                                    type="text"
                                    className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                                    placeholder='VND'
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className='items-center justify-center w-full mt-9'>
                            <span className='font-bold'>Images</span>
                            <label htmlFor="dropzone-file" className='flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed'>
                                <div>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                        <span className="font-semibold">Click to upload</span> or drag and drop
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input
                                    id="dropzone-file"
                                    type="file"
                                    multiple
                                    className='hidden'
                                    onChange={handleFileChange}
                                    name="images"
                                />
                            </label>

                            {selectedImages.length > 0 && (
                                <div className='mt-4 grid grid-cols-3 gap-4'>
                                    {selectedImages.map((preview, index) => (
                                        <div key={index} className='relative'>
                                            <img
                                                src={preview}
                                                alt="Selected preview"
                                                className='border rounded w-full h-full object-cover'
                                            />
                                            <button
                                                onClick={() => handleRemoveImage(index)}
                                                className='ml-4 bg-red-200 rounded-[20px] mt-1 text-white py-2 px-2 absolute top-1 right-1'
                                            >
                                                <IoMdClose className='text-red-600' />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div>
                            <div className='mb-2 mt-2'>
                                <span className='font-bold'>Specifications</span>
                            </div>
                            {['CPUDETAIL', 'RAMDETAIL', 'Screen',  'Keyboard', 'Audio', 'Lan', 'Bluetooth', 'Webcam', 'Weight', 'Size'].map(spec => (
                                <div key={spec}>
                                    <span>{spec}</span>
                                    <input
                                        type="text"
                                        className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                                        name={spec}
                                        value={formData[spec]}
                                        onChange={handleChange}
                                    />
                                </div>
                            ))}
                        </div>
                        <span className='font-bold'>Configuration</span>
                        <div className='flex'>
                            {['HZ', 'VGA', 'CPU', 'SSD', 'RAM'].map(config => (
                                <div key={config} className='ml-2'>
                                    <span>{config}</span>
                                    <input
                                        type="text"
                                        className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                                        name={config}
                                        value={formData[config]}
                                        onChange={handleChange}
                                    />
                                </div>
                            ))}
                        </div>
                        <div>
                            <span className='font-bold'>Category</span>
                            <select
                                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                                name="categoryid"
                                value={formData.categoryid || ''}
                                onChange={handleCategoryChange}
                            >
                                <option value="">Select a category</option>
                                {
                                    categorys && categorys.length > 0 && categorys.map(category => (
                                        <option key={category._id} value={category._id}>{category.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div>
                            <span className='font-bold'>Stock</span>
                            <input
                                type="text"
                                className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                                name="Stock"
                                value={formData.Stock}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className="mt-5 text-white bg-black p-3 text-center font-bold rounded-md">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateProducts
