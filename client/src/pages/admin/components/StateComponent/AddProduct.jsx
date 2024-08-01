import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const AddProduct = ({ show, onClose }) => {
    if (!show) return null;
    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
            <button className="absolute top-2 right-2" onClick={onClose}>
                <AiOutlineCloseCircle className='text-white w-10 h-10' />
            </button>
            <div className='bg-white p-5 w-[50%] h-[95%] overflow-hidden'>
                <div className='overflow-y-auto max-h-full'>
                    <div className='text-[50px] text-center '>
                        <span className='text-[50px] '>Add Product</span>
                    </div>
                    <form onSubmit="">
                        <div className='flex'>
                            <div className='w-[50%]'>
                                <span className='font-bold' >Name</span>
                                <input type="text" className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' />
                            </div>
                            <div className='w-[50%] ml-2'>
                                <span className='font-bold'>Price</span>
                                <input type="text" className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' />
                            </div>
                        </div>
                        <div className='items-center justify-center w-full mt-9'>
                            <span className='font-bold'>Image</span>
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
                                    className='hidden'
                                    // onChange={handleFileChange}  
                                    name="image"
                                    required
                                />
                            </label>
                        </div>


                        <div>
                            <div className='mb-2 mt-2'>
                                <span  className='font-bold'>Specifications</span>
                            </div>
                            <div>
                                <span>CPU</span>
                                <input type="text" className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 '  />
                            </div>
                            <div>
                                <span>RAM</span>
                                <input type="text" className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 '  />
                            </div>
                            <div>
                                <span>Screen</span>
                                <input type="text" className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 '  />
                            </div>
                            <div>
                                <span>PORT</span>
                                <input type="text" className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 '  />
                            </div>
                            <div>
                              <span>Keyboard</span>
                                <input type="text" className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 '  />
                            </div>
                           <div className='flex'>
                           <div className=''>
                                <span>SSD</span>
                                <input type="text" className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 '  />
                            </div>
                            <div  className='ml-2'>
                                <span>Audio</span>
                                <input type="text" className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 '  />
                            </div>
                            <div  className='ml-2'>
                                <span>Lan</span>
                                <input type="text" className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 '  />
                            </div>
                            <div  className='ml-2'>
                              <span>Bluetooth</span>
                                <input type="text" className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 '  />
                            </div>
                            <div  className='ml-2' >
                                <span>Webcam</span>
                                <input type="text" className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 '  />
                            </div>
                            <div  className='ml-2'>
                                <span>Size</span>
                                <input type="text" className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 '  />
                            </div>

                            
                           </div>

                        </div>
                        <span className=' font-bold'>Configuration</span>
                        <div className='flex'>

                            <div className=''>
                                <span>HZ</span>
                                <input type="text" className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' />
                            </div>
                            <div className='ml-2'>
                                <span>VGA</span>
                                <input type="text" className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' />
                            </div>
                            <div className='ml-2'>
                                <span>CPU</span>
                                <input type="text" className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' />
                            </div>
                            <div className='ml-2'>
                                <span>SSD</span>
                                <input type="text" className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' />
                            </div>
                            <div className='ml-2'>
                                <span>RAM</span>
                                <input type="text" className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' />
                            </div>


                        </div>
                        <div className=''>
                            <span className=' font-bold  '>Category</span>
                            <select className='appearance-none block w-[892px] bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 '>
                                {/* <option value={product.categoryid}></option> */}

                            </select>

                        </div>
                        <div className=''>
                            <span className='font-bold'>Stock</span>
                            <input type="text" className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' />
                        </div>

                        <button 
                        type="submit" 
                        className='bg-black text-white p-2 mt-10 w-full' 
                     
                    >
                       Add
                    </button>



                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddProduct;
