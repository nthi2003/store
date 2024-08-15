import React, { useEffect, useState } from 'react'
import { BsHeadphones } from 'react-icons/bs'
import { CiMenuBurger } from 'react-icons/ci'
import { FaRegClipboard, FaSearch } from 'react-icons/fa'
import { FiMapPin, FiUser, FiYoutube } from 'react-icons/fi'
import { GiShoppingCart } from 'react-icons/gi'
import { IoIosLogOut } from 'react-icons/io'
import { IoHandLeftOutline, IoNewspaperOutline, IoShieldCheckmarkOutline } from 'react-icons/io5'
import { MdAdminPanelSettings } from 'react-icons/md'
import { TbClipboardPlus } from 'react-icons/tb'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logoutUser } from '../redux/actions/authActions'
import toast, { Toaster } from 'react-hot-toast'
import { AiOutlineTags } from 'react-icons/ai'
import { RiBankCardLine } from 'react-icons/ri'
import { GrMoney } from 'react-icons/gr'
import { MdHome } from "react-icons/md";

const ProductDetails = () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const user = useSelector(state => state.auth.user);

    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const dispatch = useDispatch();
    const handleSearch = () => {

    }
    const handleLogout = () => {
        dispatch(logoutUser());
        navigate('/');
    };
    const [toastShow, setToastShow] = useState(true);
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (toastShow) {
            if (token) {

                <Toaster />

            } else {

                toast.error('Chưa đăng nhập');

            }
            setToastShow(false)
        }
    }, [toastShow]);
    return (
        <div className=''>
            <div className=' h-auto bg-[#03370f]'>
                <div className='max-w-7xl ml-auto mr-auto px-3'>
                    <img src="https://file.hstatic.net/200000722513/file/pc_-_topbar_ae727c35df2d4cff9f0c611a7d19cc15.png" alt="" />
                </div>
            </div>
            <div className='sticky top-0 z-10 bg-[#E30019] '>
                <div className='max-w-7xl ml-auto mr-auto px-2 flex'>
                    <div className='lg:py-4 flex'>
                        <div className='ml-[50px] mr-[20px]'>
                            <a href="/">
                                <img src="https://file.hstatic.net/200000636033/file/logo_fd11946b31524fbe98765f34f3de0628.svg" className='w-[120px] h-[40px]' alt="Logo" />
                            </a>
                        </div>
                        <div className='flex m-1 bg-[#BE1529]'>
                            <CiMenuBurger className='text-white size-4 p-[1px] mt-2 ml-2' />
                            <div className='p-2'>
                                <a href="#">
                                    <p className='text-white font-sans text-xs font-bold'>Doanh mục</p>
                                </a>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='rounded-md'>
                                <input className='pt-2 pb-2 pr-[50px] pl-[15px] outline-none' type="text" placeholder='Bạn cần tìm gì ...' />
                            </div>
                            <div className='pt-3 pb-1 px-4 bg-white h-10'>
                                <FaSearch className='' onClick={handleSearch} />
                            </div>
                        </div>
                    </div>
                    <div className='pt-3 pb-3 pr-[50px] pl-[15px] flex'>
                        <div className='flex ml-4'>
                            <BsHeadphones className='text-white size-7 p-[1px] mt-2' />
                            <div className='p-2'>
                                <a href="#">
                                    <p className='text-white font-sans text-xs font-bold'>Hotline</p>
                                    <p className='text-white font-sans text-xs font-bold'>1900.5301</p>
                                </a>
                            </div>
                        </div>
                        <div className='flex ml-4'>
                            <FiMapPin className='text-white size-7 p-[1px] mt-2' />
                            <div className='p-2'>
                                <a href="#">
                                    <p className='text-white font-sans text-xs font-bold'>Hệ thống</p>
                                    <p className='text-white font-sans text-xs font-bold'>Showroom</p>
                                </a>
                            </div>
                        </div>
                        <div className='flex ml-4'>
                            <FaRegClipboard className='text-white size-7 p-[1px] mt-2' />
                            <div className='p-2'>
                                <a href="#">
                                    <p className='text-white font-sans text-xs font-bold'>Tra cứu</p>
                                    <p className='text-white font-sans text-xs font-bold'>đơn hàng</p>
                                </a>
                            </div>
                        </div>
                        <div className='flex ml-4'>
                            <GiShoppingCart className='text-white size-7 p-[1px] mt-2' />
                            <div className='p-2'>
                                <a href="#">
                                    <p className='text-white font-sans text-xs font-bold'>Giỏ</p>
                                    <p className='text-white font-sans text-xs font-bold'>hàng</p>
                                </a>
                            </div>
                        </div>
                        <div className='flex  bg-[#BE1529]'>
                            {isAuthenticated ? (
                                <div className='relative inline-block text-left '>
                                    <div className='flex'>
                                        <FiUser className='text-white w-8 h-8 mt-2 ml-2 ' />
                                        <button className='  items-center justify-between mt-1 w-full  text-sm shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 group' onClick={toggleDropdown}>
                                            <span className='text-white'>
                                                <p className='text-xs'>Xin chào</p>
                                            </span>
                                            <p className='text-white font-sans text-xs font-bold'>{user?.name}</p>
                                        </button>
                                    </div>
                                    <div className={`absolute left-0 mt-2 w-48 bg-white border border-gray-300 ${isOpen ? 'block' : 'hidden'}`}>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                            <span className='flex'>
                                                <IoHandLeftOutline className='mt-[3px] mr-[3px] font-bold' />
                                                <span className='flex'>
                                                    <a href="/profile">
                                                        <p className='font-bold'>Xin chào,{user?.name}</p>

                                                    </a>
                                                </span>
                                            </span>
                                        </a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">
                                            <div className='flex'>
                                                <TbClipboardPlus className='mt-[3px] mr-[3px] font-bold' />
                                                <span>Đơn hàng của tôi</span>
                                            </div>
                                        </a>
                                        {user?.role === 'admin' && (
                                            <a href="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">
                                                <div className='flex'>
                                                    <MdAdminPanelSettings className='mt-[3px] mr-[3px] font-bold' />
                                                    <span>Doashboard</span>
                                                </div>
                                            </a>
                                        )}

                                        <button className='block px-4 py-2  text-sm text-gray-700 hover:bg-gray-100 w-[190px]' onClick={handleLogout}>
                                            <div className='flex'>
                                                <IoIosLogOut className='mt-[3px] mr-[3px] font-bold' />
                                                <span>Đăng xuất</span>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className='w-[80px]'>
                                    <a href="/login" className='flex'>
                                        <FiUser className='text-white w-[30%] mt-4 ml-2 h-[19px] ' />
                                        <div className=' ml-2  mt-2 '>

                                            <p className='text-white font-sans text-xs font-bold'>Đăng</p>
                                            <p className='text-white font-sans text-xs font-bold'>nhập</p>
                                        </div>
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white h-[40px]'>
                <div className='max-w-7xl mx-auto px-3'>
                    <ul className='flex'>
                        <li className='w-auto p-2 ml-10'>
                            <a href="" className='flex items-center ml-6 mr-6'>
                                <span className='p-1'><AiOutlineTags /></span>
                                <span className='text-nowrap text-xs pt-1 font-bold'>Săn Voucher GEARVN</span>
                            </a>
                        </li>
                        <li className='w-auto p-2 mx-2 border-l'>
                            <a href="" className='flex items-center ml-3 mr-6'>
                                <span className='p-1'><IoNewspaperOutline /></span>
                                <span className='text-nowrap text-xs pt-1 font-bold'>Tin công nghệ</span>
                            </a>
                        </li>
                        <li className='w-auto p-2 mx-2 border-l'>
                            <a href="" className='flex items-center ml-3 mr-6'>
                                <span className='p-1'><FiYoutube /></span>
                                <span className='text-nowrap text-xs pt-1 font-bold'>Video</span>
                            </a>
                        </li>
                        <li className='w-auto p-2 mx-2 border-l'>
                            <a href="" className='flex items-center ml-3 mr-6'>
                                <span className='p-1'><RiBankCardLine /></span>
                                <span className='text-nowrap text-xs pt-1 font-bold'>Hướng dẫn thanh toán</span>
                            </a>
                        </li>
                        <li className='w-auto p-2 mx-2 border-l'>
                            <a href="" className='flex items-center ml-3 mr-6'>
                                <span className='p-1'><GrMoney /></span>
                                <span className='text-nowrap text-xs pt-1 font-bold'>Hướng dẫn trả góp</span>
                            </a>
                        </li>
                        <li className='w-auto p-2 mx-2 border-l'>
                            <a href="" className='flex items-center ml-3 mr-6'>
                                <span className='p-1'><IoShieldCheckmarkOutline /></span>
                                <span className='text-nowrap text-xs pt-1 font-bold'>Tra cứu bảo hành</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='bg-gray-200'>
                <div>
                    <div className='flex max-w-[1200px] ml-auto mr-auto'> 
                        <span>
                            <MdHome className='mt-1 text-blue-400'/>
                        </span>
                        <span className='text-blue-400 mr-2'>
                          <a href="/">
                             Trang chủ
                          </a>
                        </span>
                        <div className='text-gray-400'>/</div>
                        <span className='text-blue-400 ml-2 mr-2'>
                            PC GVN
                        </span>
                        <div className='text-gray-400'>/</div>
                        <span className=' ml-2 text-gray-700'>
                        PC GVN x ASUS Back to Future (Intel i7-14700K/ VGA RTX 4070 Ti Super)
                        </span>
                    </div>

                </div>
                <div className='bg-gray-200 '>
                     <div className='flex max-w-[1200px] ml-auto mr-auto bg-white'>
                       <div >
                       <div className='w-[30%]'>
                             <img src="https://product.hstatic.net/200000722513/product/pc_asus_tuf_btf_-_3_2d54bb55a893411d8ba905a11eb5a05c_grande.png" alt="" className='w-[400px]' />
                        </div>
                        <div className='w-[70%]'>

                        </div>
                       </div>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
