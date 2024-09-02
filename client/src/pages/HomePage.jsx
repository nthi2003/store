import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { IoHandLeftOutline, IoNewspaperOutline } from "react-icons/io5";
import { FiMapPin, FiUser, FiYoutube } from "react-icons/fi";
import { AiOutlineTags } from "react-icons/ai";
import { RiBankCardLine } from "react-icons/ri";
import { GrMoney } from "react-icons/gr";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import FooterComponent from '../components/FooterComponent';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import Categorry from '../components/Categorry';
import { CiMenuBurger } from 'react-icons/ci';
import { FaRegClipboard, FaSearch } from 'react-icons/fa';
import { BsHeadphones } from 'react-icons/bs';
import { GiShoppingCart } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../redux/actions/authActions';
import { TbClipboardPlus } from 'react-icons/tb';
import { MdAdminPanelSettings } from 'react-icons/md';
import { IoIosLogOut } from 'react-icons/io';

const HomePage = () => {
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
    <div>

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

      <Toaster />
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

      <div className='min-h-screen'>
        {/* <div className='fixed hidden lg:block'>
          <div className='left-4 w-[150px] ml-[180px] mt-4'>
            <a href="">
              <img src="https://file.hstatic.net/200000722513/file/pc_side_web.png" alt="" />
            </a>
          </div>
        </div>
        <div className='fixed hidden lg:block'>
          <div className='right-4 w-[150px] ml-[1565px] mt-4'>
            <a href="">
              <img src="https://file.hstatic.net/200000722513/file/side_web_laptop_gaming.png" alt="" />
            </a>
          </div>
        </div> */}
        
        <div className='bg-gray-200  flex '>
          <div className='lg:w-20% ml-[360px] mt-4'>
            <div className=' bg-white h-72 w-[220px]'>


              <div className='bg-white '>
                <nav>
                  <ul>
                    <li className='py-2 px-4 hover:bg-gray-100 text-black'>
                      <div>
                        <span></span>
                        <span className='text-sm'>LapTop</span>
                      </div>
                    </li>
                    <li className='py-2 px-4 hover:bg-gray-100'>
                      <div>
                        <span></span>
                        <span className='text-sm'>LapTop Gamming</span>
                      </div>
                    </li>
                    <li className='py-2 px-4 hover:bg-gray-100'>
                      <div>
                        <span></span>
                        <span className='text-sm'>PC</span>
                      </div>
                    </li>
                    <li className='py-2 px-4 hover:bg-gray-100'>
                      <div>
                        <span></span>
                        <span className='text-sm'>Main , CPU</span>
                      </div>

                    </li>
                    <li className='py-2 px-4 hover:bg-gray-100'>
                      <div>
                        <span></span>
                        <span className='text-sm'>Case, Nguồn, Tản</span>
                      </div>

                    </li>
                    <li className='py-2 px-4 hover:bg-gray-100'>
                      <div>
                        <span></span>
                        <span className='text-sm'>Màn hình</span>
                      </div>

                    </li>
                    <li className='py-2 px-4 hover:bg-gray-100'>
                      <div>
                        <span></span>
                        <span className='text-sm'>Bàn phím</span>
                      </div>

                    </li>
                    <li className='py-2 px-4 hover:bg-gray-100'>
                      <div>
                        <span></span>
                        <span className='text-sm'>Main , CPU</span>
                      </div>

                    </li>
                    <li className='py-2 px-4 hover:bg-gray-100'>
                      <div>
                        <span></span>
                        <span className='text-sm'>Case, Nguồn, Tản</span>
                      </div>

                    </li>
                    <li className='py-2 px-4 hover:bg-gray-100'>
                      <div>
                        <span></span>
                        <span className='text-sm'>Màn hình</span>
                      </div>

                    </li>
                    <li className='py-2 px-4 hover:bg-gray-100'>
                      <div>
                        <span></span>
                        <span className='text-sm'>Bàn phím</span>
                      </div>

                    </li>
                    <li className='py-2 px-4 hover:bg-gray-100'>
                      <div>
                        <span></span>
                        <span className='text-sm'>Main , CPU</span>
                      </div>

                    </li>


                  </ul>
                </nav>
              </div>

            </div>
          </div>
          <div className='w-[70%] mt-4 mr-[360px] ml-2'>
            <div className='grid grid-rows-3 grid-cols-3 '>
              <div className='col-start-1 col-end-3 row-start-1 row-end-3 rounded-[30px]'>
                <img src="https://file.hstatic.net/200000722513/file/gearvn-sam-may-moi-he-vui-phoi-phoi-banner_5e36e05190c841f4b9e66710eee5ad85.jpg" alt="" />
              </div>
              <div>
                <a href="">
                  <div>
                    <img src="https://file.hstatic.net/200000722513/file/right_1_117ab1d46da04c35af8ae2ae170887c1.png" alt="" className='h-full' />
                  </div>
                </a>
              </div>
              <div>
                <a href="">
                  <div>
                    <img src="https://file.hstatic.net/200000722513/file/right_1_117ab1d46da04c35af8ae2ae170887c1.png" alt="" />
                  </div>
                </a>
              </div>
              <div>
                <a href="">
                  <div>
                    <img src="https://file.hstatic.net/200000722513/file/right_1_117ab1d46da04c35af8ae2ae170887c1.png" alt="" />
                  </div>
                </a>
              </div>
              <div>
                <a href="">
                  <div>
                    <img src="https://file.hstatic.net/200000722513/file/right_1_117ab1d46da04c35af8ae2ae170887c1.png" alt="" />
                  </div>
                </a>
              </div>
              <div>
                <a href="">
                  <div>
                    <img src="https://file.hstatic.net/200000722513/file/right_1_117ab1d46da04c35af8ae2ae170887c1.png" alt="" />
                  </div>
                </a>
              </div>

            </div>

          </div>

        </div>
   
          
        <div className='bg-gray-200  '>
         <div className=' fixed w-[40px] h-[40px] mt-[100px]  ml-[1580px]'>
          <span className='animate-ping rounded-full bg-sky-400 opacity-75 absolute  w-full h-full'></span>
          <a href="https://zalo.me/0766524605" className='relative inline-flex rounded-full  bg-sky-500 w-full h-full'>
            <img src="https://file.hstatic.net/200000722513/file/icon_zalo__1__f5d6f273786c4db4a3157f494019ab1e.png" className='' alt="" />
          </a>

         </div>

          <div className='grid grid-rows-1 grid-cols-4 mx-[360px]'>
            <div className='mt-2  '>
              <a href="">
                <img src="https://file.hstatic.net/200000722513/file/slider_6-6_920a2a63301a4e6694c8502ccfac4929.png" alt="" />
              </a>
            </div>
            <div className='mt-2  ml-2'>
              <a href="">
                <img src="https://file.hstatic.net/200000722513/file/slider_6-6_920a2a63301a4e6694c8502ccfac4929.png" alt="" />
              </a>
            </div>
            <div className='mt-2  ml-2'>
              <a href="">
                <img src="https://file.hstatic.net/200000722513/file/slider_6-6_920a2a63301a4e6694c8502ccfac4929.png" alt="" />
              </a>
            </div>
            <div className='mt-2 ml-2'>
              <a href="">
                <img src="https://file.hstatic.net/200000722513/file/slider_6-6_920a2a63301a4e6694c8502ccfac4929.png" alt="" />
              </a>
            </div>
          </div>
          <div className='flex px-[360px] mt-2'>
            <div className='mr-3 rounded-[20px]'>
              <img src="https://file.hstatic.net/200000722513/file/pc_-_may_bo_gvn_b53d8e3709b142828f7231b80dc03aa9.png" alt="" className='rounded-[5px]' />
            </div>
            <div className=''>
              <img src="https://file.hstatic.net/200000722513/file/banner_promotion_2_20720b3c3bef4fdea0b762238a9fd183.png" alt="" className='rounded-[5px]' />
            </div>
          </div>
          <Product hTitle='PC bán chạy' shTitle='Trả góp 0%' />
          <Product hTitle='Laptop gaming bán chạy' shTitle='Miễn phí giao hàng' />
          <Product hTitle='Bàn phím văn phòng bán chạy' shTitle='Miễn phí giao hàng' />

          <Categorry />
        </div>
        
      </div>
      

      <FooterComponent />
    </div>
  );
}

export default HomePage;
