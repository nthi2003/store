import React, { useEffect } from 'react'
import Pagination from './Pagination'
import { MdOutlineDelete, MdOutlineEdit } from 'react-icons/md'
import { Toaster } from 'react-hot-toast'
import { IoAddSharp } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../../../redux/actions/productAction'

const Product = () => {
  const dispatch = useDispatch()
  const { products , totalPages, currentPage} = useSelector(state => state.product)
  useEffect(() => {
    dispatch(fetchProduct(currentPage , 5));
  }, [dispatch , currentPage])
  return (
    <div>
            <Toaster />
            <button className='text-white bg-black w-[70px] p-2 mt-2 mb-2 l-4 ml-[1500px] flex'>
                <IoAddSharp className='mt-1' />
                <span>Add</span>
            </button>
            <div className='round-sm border border-gray-300 bg-white px-5 pt-6 pb-2.5'>
                <div className='max-w-full overflow-x-auto'>
                    <table className='w-full table-auto'>
                        <thead>
                            <tr className='bg-gray-100 text-left'>
                                <th className='min-w-[20px] py-4 px-4 font-medium text-black items-center '>STT</th>
                                <th className='min-w-[30px] py-4 px-4 font-medium text-black items-center '>Name</th>
                                <th className='min-w-[120px] py-4 px-4 font-medium text-black items-center '>Image</th>
                                <th className='min-w-[30px] py-4 px-4 font-medium text-black items-center '>Price</th>
                                <th className='min-w-[30px] py-4 px-4 font-medium text-black items-center '>Specifications</th>
                                <th className='min-w-[30px] py-4 px-4 font-medium text-black items-center '>Configuration</th>
                                <th className='min-w-[120px] py-4 px-4 font-medium text-black items-center '>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                                 {products.map((product , index) => (
                                <tr key={product._id} >
                                    <td className='border-b border-[#eee] py-5 px-4'>
                                        <p className='text-black'>{(currentPage - 1 ) * 5 + index + 1}</p>
                                    </td>
                                    <td className='border-b border-[#eee] py-5 px-4'>
                                        <p className='text-black'>{product.name}</p>
                                    </td>
                                    <td className='border-b border-[#eee] py-5 px-4'>
                                        <img src={product.image.url} alt="" className='w-20 h-20' />
                                    </td>
                                    <td className='border-b border-[#eee] py-5 px-4'>
                                        <p className='text-black'>{product.price}đ</p>
                                    </td>
                                    <td className='border-b border-[#eee] py-5 px-4'>
                                        <p className='text-black'>
                                          <div>
                                            <div className='flex '>
                                              <span className='font-bold'>CPU</span>
                                              <p>{product.CPUDETAIL}</p>
                                              </div>
                                            <div className='flex '>
                                              <span className='font-bold'>RAM</span>
                                              <p>{product.RAMDETAIL }</p>
                                              </div>
                                            <div className='flex '>
                                              <span className='font-bold'>SSD</span>
                                              <p>{product.SD}</p>
                                              </div>
                                            <div className='flex '>
                                              <span className='font-bold'>Screen</span>
                                              <p>{product.Screen}</p>
                                              </div>
                                            <div className='flex '>
                                              <span className='font-bold'>PORT</span>
                                              <p>{product.Port}</p>
                                              </div>
                                              <div className='flex '>
                                              <span className='font-bold'>Keyboard</span>
                                              <p>{product.Keyboard}</p>
                                              </div>
                                              <div className='flex '>
                                              <span className='font-bold'>Audio</span>
                                              <p>{product.Audio}</p>
                                              </div>
                                              <div className='flex '>
                                              <span className='font-bold'>Lan</span>
                                              <p>{product.Lan}</p>
                                              </div>
                                              <div className='flex '>
                                              <span className='font-bold'>Bluetooth</span>
                                              <p>{product.Bluetooth}</p>
                                              </div>
                                              <div className='flex '>
                                              <span className='font-bold'>Webcam</span>
                                              <p>{product.Webcam}</p>
                                              </div>
                                              <div className='flex '>
                                              <span className='font-bold'>Size</span>
                                              <p>{product.Size}</p>
                                              </div>
                                             


                                          </div>
                                        </p>
                                    </td>
                                    <td className='border-b border-[#eee] py-5 px-4'>
                                        <p className='text-black'>
                                          <div>
                                          <div className='flex '>
                                              <span className='font-bold'>HZ</span>
                                              <p>{product.HZ}</p>
                                              </div>
                                              <div className='flex '>
                                              <span className='font-bold'>VGA</span>
                                              <p>{product.VGA}</p>
                                              </div>
                                              <div className='flex '>
                                              <span className='font-bold'>CPU</span>
                                              <p>{product.CPU}</p>
                                              </div>
                                              <div className='flex '>
                                              <span className='font-bold'>SSD</span>
                                              <p>{product.SSD}</p>
                                              </div>
                                              <div className='flex '>
                                              <span className='font-bold'>RAM</span>
                                              <p>{product.RAM}</p>
                                              </div>
                                          </div>
                                        </p>
                                    </td>
                                    <td className='border-b border-[#eee] py-5 px-4'>
                                        <div className='text-black flex'>
                                            <div className='bg-red-200 border rounded-[20px] p-2 mr-2'>
                                                <MdOutlineDelete className='text-red-500'  />
                                            </div>
                                            <div className='bg-blue-200 border rounded-[20px] p-2 mr-2'>
                                                <MdOutlineEdit className='text-blue-500' />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                      ))}
                        </tbody>
                        
                    </table>
                    <Pagination    />
                </div>
            </div>
           
           
        </div>
  )
}

export default Product
