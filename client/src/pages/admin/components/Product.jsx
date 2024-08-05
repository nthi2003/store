import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'
import { MdOutlineDelete, MdOutlineEdit } from 'react-icons/md'
import { Toaster } from 'react-hot-toast'
import { IoAddSharp } from 'react-icons/io5'
import { AiFillPicture } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../../../redux/actions/productAction'
import AddProduct from './StateComponent/AddProduct'

const Product = () => {
  const dispatch = useDispatch()
  const { products, totalPages, currentPage } = useSelector(state => state.product)
  const [show, setShow] = useState(false)
  useEffect(() => {
    dispatch(fetchProduct(currentPage, 5));
  }, [dispatch, currentPage])

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
              {products.map((product, index) => (
                <tr key={product._id}>
                  <td className='border-b border-[#eee] py-5 px-4'>
                    <p className='text-black'>{(currentPage - 1) * 5 + index + 1}</p>
                  </td>
                  <td className='border-b border-[#eee] py-5 px-4'>
                    <p className='text-black'>{product.name ? product.name.slice(0, 20) : ''}...</p>
                  </td>
                  <td className='border-b border-[#eee] py-5 px-4'>
                    {product.image && product.image.url ? (
                      <img src={product.image.url} className='w-20 h-20' alt={product.name} />
                    ) : (
                      <AiFillPicture className='w-20 h-20' />
                    )}
                  </td>
                  <td className='border-b border-[#eee] py-5 px-4'>
                    <p className='text-black'>{product.price}đ</p>
                  </td>
                  <td className='border-b border-[#eee] py-5 px-4'>
                    <div className='text-black'>
                      {product.CPUDETAIL && (
                        <div className='flex '>
                          <span className='font-bold'>CPU</span>
                          <p className='ml-2'>{product.CPUDETAIL.slice(0, 20)}...</p>
                        </div>
                      )}
                      {product.RAMDETAIL && (
                        <div className='flex '>
                          <span className='font-bold'>RAM</span>
                          <p className='ml-2'>{product.RAMDETAIL.slice(0, 20)}...</p>
                        </div>
                      )}
                      {product.SSD && (
                        <div className='flex '>
                          <span className='font-bold'>SSD</span>
                          <p className='ml-2' >{product.SSD}</p>
                        </div>
                      )}
                      {product.Screen && (
                        <div className='flex '>
                          <span className='font-bold'>Screen</span>
                          <p className='ml-2'>{product.Screen.slice(0, 20)}...</p>
                        </div>
                      )}
                      {product.Port && (
                        <div className='flex '>
                          <span className='font-bold'>PORT</span>
                          <p className='ml-2'>{product.Port.slice(0, 20)}...</p>
                        </div>
                      )}
                      {product.Keyboard && (
                        <div className='flex '>
                          <span className='font-bold'>Keyboard</span>
                          <p className='ml-2'>{product.Keyboard.slice(0, 20)}...</p>
                        </div>
                      )}
                      {product.Audio && (
                        <div className='flex '>
                          <span className='font-bold'>Audio</span>
                          <p className='ml-2'>{product.Audio}</p>
                        </div>
                      )}
                      {product.Lan && (
                        <div className='flex '>
                          <span className='font-bold'>Lan</span>
                          <p className='ml-2'>{product.Lan}</p>
                        </div>
                      )}
                      {product.Bluetooth && (
                        <div className='flex '>
                          <span className='font-bold'>Bluetooth</span>
                          <p className='ml-2'>{product.Bluetooth}</p>
                        </div>
                      )}
                      {product.Webcam && (
                        <div className='flex '>
                          <span className='font-bold'>Webcam</span>
                          <p className='ml-2' >{product.Webcam}</p>
                        </div>
                      )}
                      {product.Size && (
                        <div className='flex '>
                          <span className='font-bold'>Size</span>
                          <p className='ml-2'>{product.Size}</p>
                        </div>
                      )}
                    </div>
                  </td>
                  <td className='border-b border-[#eee] py-5 px-4'>
                    <div className='text-black'>
                      {product.HZ && (
                        <div className='flex '>
                          <span className='font-bold'>HZ</span>
                          <p className='ml-2' >{product.HZ}</p>
                        </div>
                      )}
                      {product.VGA && (
                        <div className='flex '>
                          <span className='font-bold'>VGA</span>
                          <p className='ml-2' >{product.VGA}</p>
                        </div>
                      )}
                      {product.CPU && (
                        <div className='flex '>
                          <span className='font-bold'>CPU</span>
                          <p className='ml-2' >{product.CPU}</p>
                        </div>
                      )}
                      {product.SSD && (
                        <div className='flex '>
                          <span className='font-bold'>SSD</span>
                          <p className='ml-2'>{product.SSD}</p>
                        </div>
                      )}
                      {product.RAM && (
                        <div className='flex '>
                          <span className='font-bold'>RAM</span>
                          <p className='ml-2'>{product.RAM}</p>
                        </div>
                      )}
                    </div>
                  </td>
                  <td className='border-b border-[#eee] py-5 px-4'>
                    <div className='text-black'>
                      {product.categoryName && (
                        <div className='flex '>
                          <p className='ml-2'>{product.categoryName}</p>
                        </div>
                      )}
                    </div>
                  </td>
                  <td className='border-b border-[#eee] py-5 px-4'>
                    <div className='text-black'>
                      {product.Stock && (
                        <div className='flex '>
                          <p className='ml-2'>{product.Stock}/ products</p>
                        </div>
                      )}
                    </div>
                  </td>
                  <td className='border-b border-[#eee] py-5 px-4'>
                    <div className='text-black flex'>
                      <div className='bg-red-200 border rounded-[20px] p-2 mr-2'>
                        <MdOutlineDelete className='text-red-700 text-[20px]' />
                      </div>
                      <div className='bg-green-200 border rounded-[20px] p-2'>
                        <MdOutlineEdit className='text-green-700 text-[20px]' />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
          <AddProduct show={show} onClose={handleCloseShow} />
          <Pagination />
        </div>
      </div>


    </div>
  )
}

export default Product
