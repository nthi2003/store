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
import { useNavigate, useParams } from 'react-router-dom'
import { logoutUser } from '../redux/actions/authActions'
import toast, { Toaster } from 'react-hot-toast'
import { AiOutlineTags } from 'react-icons/ai'
import { RiBankCardLine } from 'react-icons/ri'
import { GrMoney } from 'react-icons/gr'
import { MdHome } from "react-icons/md";
import { getProductDetails } from '../redux/actions/productAction'
import { FaGift } from "react-icons/fa";
import { TbCircleNumber1Filled } from "react-icons/tb";
import { HiCheckCircle } from "react-icons/hi2";

const ProductDetails = () => {
    const { id } = useParams()
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
    const { product } = useSelector(state => state.product);
    console.log(product)
    useEffect(() => {
        if (id) {
            dispatch(getProductDetails(id));
        }
    }, [dispatch]);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
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
            <div className='bg-white h-[40px] '>
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
  
          
                <div key={product.product._id} className='bg-gray-200 mb-6'>
                    <div className='p-5'>
                        <div className='flex max-w-[1200px] mx-auto'>
                            <span>
                                <MdHome className='mt-1 text-blue-400' />
                            </span>
                            <span className='text-blue-400 mr-2'>
                                <a href="/">Trang chủ</a>
                            </span>
                            <div className='text-gray-400'>/</div>
                            <span className='text-blue-400 ml-2 mr-2'>
                                {product.product.categoryName}
                            </span>
                            <div className='text-gray-400'>/</div>
                            <span className='ml-2 text-gray-700'>
                                {product.product.name}
                            </span>
                        </div>
                    </div>
                    <div className='bg-gray-200 '>
                        <div className='flex max-w-[1200px] mx-auto bg-white'>
                            <div className='w-[30%] p-5'>
                                <img src={product.product.images[selectedImageIndex].url} alt={product.product.name} className='w-full h-auto object-cover' />
                                <div className='mt-5'>
                                    <ul className='flex'>
                                        {product.product.images.map((img, index) => (
                                            <li
                                                key={index}
                                                className={`w-[70px] h-[70px] m-2 cursor-pointer ${selectedImageIndex === index ? 'border-2 border-blue-500' : ''}`}
                                                onClick={() => setSelectedImageIndex(index)}
                                            >
                                                <img src={img.url} className='w-full h-full object-cover' alt={`Image ${index + 1}`} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className='w-[65%] p-5 border-gray-200 h-full border-l'>
                                <h1 className='text-[24px] font-[600]'>{product.product.name}</h1>
                                <h2 className='text-[34px] font-[600] text-red-500'>{product.product.price.toLocaleString()}₫</h2>
                                <div className='border w-full border-red-200 rounded-[5px]'>
                                    <div className='flex p-2 bg-red-200 rounded-t-[5px]'>
                                        <FaGift className='mt-1 text-red-500' />
                                        <p className='ml-2 text-red-500 font-[600] '>Quà tặng khuyến mãi</p>
                                    </div>
                                    <div className='p-2 flex'>
                                        <TbCircleNumber1Filled className='text-red-500 mt-1' />
                                        <span className='flex ml-2 text-[15px] '>
                                            <p>Tặng ngay</p>
                                            <p className='text-red-500 ml-1 font-bold' >1</p>
                                            <p className='ml-1'>x</p>
                                            <p className='text-red-500 font-bold ml-1'>Giá đỡ VGA</p>
                                            <p className='ml-1'>trị giá</p>
                                            <p className='text-red-500 font-bold ml-1'>1.999.999đ</p>

                                        </span>
                                    </div>

                                </div>
                                <div className='flex mt-3 '>
                                    <button className='text-white text-center px-[30px] py-[14px] w-[400px] bg-[#e30019] rounded-sm'>
                                        <h2>MUA NGAY</h2>
                                        <span className='text-[14px] mt-3'>Giao tận nơi hoặc nhận tại cửa hàng</span>
                                    </button>
                                </div>
                                <div className=' border-gray-400 border-t mt-3 '></div>
                                <div className=' mt-2'>
                                    <div className='bg-[#CFCFCF] rounded-t-[5px]'>
                                        <h4 className='ml-5 p-2 font-[600]'>Khuyến mãi</h4>
                                    </div>
                                    <div className='bg-white border-gray-300 border rounded-b-[5px]'>
                                        <div>
                                            <div className='flex gap-1'>
                                                <HiCheckCircle className='mt-1 text-green-600' />
                                                <span>Mua Microsoft Office kèm PC GVN giảm 300K</span>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   <div className='bg-gray-200 '>
                   <div className=' max-w-[1200px] mx-auto grid grid-cols-3 grid-rows-2'>
                        <div className=' bg-white mt-3w-[800px] min-h-[700px]  col-start-1 col-end-3 row-start-1 row-end-3'>
                            <div className='p-2'>
                                <span className=''>Thông tin sản phẩm</span>
                            </div>
                            <div className=''>
                                <span className='p-2 font-[800] text-[20px]'>Thông số kỹ thuật:</span>
                                <div className='p-2'>
                                    <table className='border-[#eeeeee] w-full h-[20px] '>
                                        <tr>
                                            <td className='bg-gray-200 border-[#eeeeee] border'>
                                                <div className='p-2 font-[600]'>
                                                    RAM
                                                </div>
                                            </td>
                                            <td className='bg-white  border-[#eeeeee] border p-2'>{product.product.RAMDETAIL}</td>
                                            <td className='bg-white border-[#eeeeee] border p-2' >36 Tháng</td>
                                        </tr>
                                        <tr>
                                            <td className='bg-gray-200 border-[#eeeeee] border'>
                                                <div className='p-2 font-[600]'>
                                                    CPU
                                                </div>
                                            </td>
                                            <td className='bg-white  border-[#eeeeee] border p-2'>{product.product.CPUDETAIL}</td>
                                            <td className='bg-white border-[#eeeeee] border p-2' >36 Tháng</td>
                                        </tr>
                                        <tr>
                                            <td className='bg-gray-200 border-[#eeeeee] border'>
                                                <div className='p-2 font-[600]'>
                                                KEYBOARD
                                                </div>
                                            </td>
                                            <td className='bg-white  border-[#eeeeee] border p-2'>{product.product.Keyboard}</td>
                                            <td className='bg-white border-[#eeeeee] border p-2' >36 Tháng</td>
                                        </tr>
                                        <tr>
                                            <td className='bg-gray-200 border-[#eeeeee] border'>
                                                <div className='p-2 font-[600]'>
                                                Webcam
                                                </div>
                                            </td>
                                            <td className='bg-white  border-[#eeeeee] border p-2'>{product.product.Webcam}</td>
                                            <td className='bg-white border-[#eeeeee] border p-2' >36 Tháng</td>
                                        </tr>
                                        <tr>
                                            <td className='bg-gray-200 border-[#eeeeee] border'>
                                                <div className='p-2 font-[600]'>
                                                Màn hình
                                                </div>
                                            </td>
                                            <td className='bg-white  border-[#eeeeee] border p-2'>{product.product.Screen}</td>
                                            <td className='bg-white border-[#eeeeee] border p-2' >36 Tháng</td>
                                        </tr>
                                        <tr>
                                            <td className='bg-gray-200 border-[#eeeeee] border'>
                                                <div className='p-2 font-[600]'>
                                                AUDIO
                                                </div>
                                            </td>
                                            <td className='bg-white  border-[#eeeeee] border p-2'>{product.product.Audio}</td>
                                            <td className='bg-white border-[#eeeeee] border p-2' >36 Tháng</td>
                                        </tr>
                                        <tr>
                                            <td className='bg-gray-200 border-[#eeeeee] border'>
                                                <div className='p-2 font-[600]'>
                                                Kích thước
                                                </div>
                                            </td>
                                            <td className='bg-white  border-[#eeeeee] border p-2'>{product.product.Size}</td>
                                            <td className='bg-white border-[#eeeeee] border p-2' >36 Tháng</td>
                                        </tr>
                                        <tr>
                                            <td className='bg-gray-200 border-[#eeeeee] border'>
                                                <div className='p-2 font-[600]'>
                                                Cân Nặng
                                                </div>
                                            </td>
                                            <td className='bg-white  border-[#eeeeee] border p-2'>{product.product.Weight}</td>
                                            <td className='bg-white border-[#eeeeee] border p-2' >36 Tháng</td>
                                        </tr>

                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className=' bg-white mt-3 ml-2 w-[390px] p-2'>
                            <span className='font-[600] text-[20px] p-2'>
                                Sản phẩm tương tự
                            </span>
                            <div className='mt-2 flex '>
                                <img src="https://res.cloudinary.com/dpvtdgmhv/image/upload/v1723306717/products/rpogfcohfhfhtccbdvsh.jpg" alt="" className='w-20 h-20' />
                                <span>
                                    <p className='text-[12px]'>PC GVN Intel i5-14600KF/ VGA RTX 4060 Ti</p>
                                    <del className='text-gray-500'>41.120.000₫</del>
                                    <p className='text-red-500'>39.990.000₫</p>
                                </span>
                            </div>
                        </div>
                        <div className='bg-white mt-3 ml-2 w-[390px] p-2'>
                            <span className='font-[600] text-[20px] p-2'>Tin tức về công nghệ</span>
                            <div className='mt-2 flex '>
                                <img src="https://file.hstatic.net/200000722513/article/suno-ai-la-gi-thumbnail_7f4185cb7da2490893f36910a968d8d6_grande.jpg" alt="" className='w-20 h-20' />
                                <span className='p-2'>
                                    <p className='text-[12px] font-[500]'>Suno AI là gì? Cách tạo nhạc từ văn bản bằng Suno AI trong vài bước</p>

                                </span>
                            </div>

                        </div>
                    </div>
                   </div>
                </div>


        </div>
    )
}

export default ProductDetails
