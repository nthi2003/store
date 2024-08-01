import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'
import { MdOutlineDelete, MdOutlineEdit } from 'react-icons/md'
import { Toaster } from 'react-hot-toast'
import { IoAddSharp } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../../../redux/actions/productAction'
import AddProduct from './StateComponent/AddProduct'

const Product = () => {
  const dispatch = useDispatch()
  const { products , totalPages, currentPage} = useSelector(state => state.product)
  const [show , setShow] = useState(false)
  useEffect(() => {
    dispatch(fetchProduct(currentPage , 5));
  }, [dispatch , currentPage])
   
    const handleShow = () => {
      setShow(true)
     
    }
    const handleCloseShow = () => {
      setShow(false)
    }
  return (
    <div>
            <Toaster />
            <button className='text-white bg-black w-[70px] p-2 mt-2 mb-2 l-4 ml-[1500px] flex' onClick={handleShow}>
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
                                <th className='min-w-[120px] py-4 px-4 font-medium text-black items-center '>Category</th>
                                <th className='min-w-[120px] py-4 px-4 font-medium text-black items-center '>Stock</th>
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
                                        <p className='text-black'>{product.name.slice(0, 20)}...</p>
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
                                              <p className='ml-2'>{product.CPUDETAIL.slice(0, 20)}...</p>
                                              </div>
                                            <div className='flex '>
                                              <span className='font-bold'>RAM</span>
                                              <p className='ml-2'>{product.RAMDETAIL.slice(0, 20) }...</p>
                                              </div>
                                            <div className='flex '>
                                              <span className='font-bold'>SSD</span>
                                              <p className='ml-2' >{product.SSD}</p>
                                              </div>
                                            <div className='flex '>
                                              <span className='font-bold'>Screen</span>
                                              <p className='ml-2'>{product.Screen.slice(0, 20)}...</p>
                                              </div>
                                            <div className='flex '>
                                              <span className='font-bold'>PORT</span>
                                              <p className='ml-2'>{product.Port.slice(0, 20)}...</p>
                                              </div>
                                              <div className='flex '>
                                              <span className='font-bold'>Keyboard</span>
                                              <p className='ml-2'>{product.Keyboard.slice(0, 20)}...</p>
                                              </div>
                                              <div className='flex '>
                                              <span className='font-bold'>Audio</span>
                                              <p className='ml-2'>{product.Audio}</p>
                                              </div>
                                              <div className='flex '>
                                              <span className='font-bold'>Lan</span>
                                              <p className='ml-2'>{product.Lan}</p>
                                              </div>
                                              <div className='flex '>
                                              <span className='font-bold'>Bluetooth</span>
                                              <p className='ml-2'>{product.Bluetooth}</p>
                                              </div>
                                              <div className='flex '>
                                              <span className='font-bold'>Webcam</span>
                                              <p className='ml-2' >{product.Webcam}</p>
                                              </div>
                                              <div className='flex '>
                                              <span className='font-bold'>Size</span>
                                              <p className='ml-2'>{product.Size}</p>
                                              </div>
                                             


                                          </div>
                                        </p>
                                    </td>
                                    <td className='border-b border-[#eee] py-5 px-4'>
                                        <p className='text-black'>
                                          <div>
                                          <div className='flex '>
                                              <span className='font-bold'>HZ</span>
                                              <p className='ml-2' >{product.HZ}</p>
                                              </div>
                                              <div className='flex '>
                                              <span className='font-bold'>VGA</span>
                                              <p className='ml-2' >{product.VGA}</p>
                                              </div>
                                              <div className='flex '>
                                              <span className='font-bold'>CPU</span>
                                              <p className='ml-2' >{product.CPU}</p>
                                              </div>
                                              <div className='flex '>
                                              <span className='font-bold'>SSD</span>
                                              <p className='ml-2'>{product.SSD}</p>
                                              </div>
                                              <div className='flex '>
                                              <span className='font-bold'>RAM</span>
                                              <p className='ml-2'>{product.RAM}</p>
                                              </div>
                                          </div>
                                        </p>
                                    </td>
                                    <td className='border-b border-[#eee] py-5 px-4'>
                                        <p className='text-black'>
                                          <div>
                                          <div className='flex '>
                                            
                                              <p className='ml-2'>{product.categoryName}</p>
                                              </div>
                                              
                                          </div>
                                        </p>
                                    </td>
                                    <td className='border-b border-[#eee] py-5 px-4'>
                                        <p className='text-black'>
                                          <div>
                                          <div className='flex '>
                                              
                                              <p className='ml-2'>{product.Stock }/ products</p>
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
                    <AddProduct show={show} onClose={handleCloseShow}/>
                    <Pagination    />
                </div>
            </div>
           
           
        </div>
  )
}

export default Product
