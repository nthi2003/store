import React, { useEffect } from 'react';
import Header from '../components/Header';
import { IoNewspaperOutline } from "react-icons/io5";
import { FiYoutube } from "react-icons/fi";
import { AiOutlineTags } from "react-icons/ai";
import { RiBankCardLine } from "react-icons/ri";
import { GrMoney } from "react-icons/gr";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import FooterComponent from '../components/FooterComponent';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {

      toast.success('Đăng nhập thành công'); 
    
    } else {
     
     toast.error('Chưa đăng nhập');
     
    }
  }, []);
  return (
    <div>
      <Header placeholder='Bạn cần tìm gì ?' />
      <Toaster />
      <div className='bg-white border-b border-gray-200'>
        <div className='max-w-7xl mx-auto px-3'>
          <ul className='flex'>
            <li className='w-auto p-2'>
              <a href="" className='flex items-center ml-6 mr-6'>
                <span className='p-1'><AiOutlineTags /></span>
                <span className='text-nowrap text-xs pt-1'>Săn Voucher GEARVN</span>
              </a>
            </li>
            <li className='w-auto p-2 border-l'>
              <a href="" className='flex items-center ml-3 mr-6'>
                <span className='p-1'><IoNewspaperOutline /></span>
                <span className='text-nowrap text-xs pt-1'>Tin công nghệ</span>
              </a>
            </li>
            <li className='w-auto p-2 border-l'>
              <a href="" className='flex items-center ml-3 mr-6'>
                <span className='p-1'><FiYoutube /></span>
                <span className='text-nowrap text-xs pt-1'>Video</span>
              </a>
            </li>
            <li className='w-auto p-2 border-l'>
              <a href="" className='flex items-center ml-3 mr-6'>
                <span className='p-1'><RiBankCardLine /></span>
                <span className='text-nowrap text-xs pt-1'>Hướng dẫn thanh toán</span>
              </a>
            </li>
            <li className='w-auto p-2 border-l'>
              <a href="" className='flex items-center ml-3 mr-6'>
                <span className='p-1'><GrMoney /></span>
                <span className='text-nowrap text-xs pt-1'>Hướng dẫn trả góp</span>
              </a>
            </li>
            <li className='w-auto p-2 border-l'>
              <a href="" className='flex items-center ml-3 mr-6'>
                <span className='p-1'><IoShieldCheckmarkOutline /></span>
                <span className='text-nowrap text-xs pt-1'>Tra cứu bảo hành</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <section className='bg-gray-300 h-[491px] flex'>
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

      </section>
      <div className='bg-gray-300 h-[680px] '>
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
            <div className='mt-2  ml-2'>
              <a href="">
                <img src="https://file.hstatic.net/200000722513/file/slider_6-6_920a2a63301a4e6694c8502ccfac4929.png" alt="" />
              </a>
            </div>
          </div>
      </div>
      <FooterComponent/>
    </div>
  );
}

export default HomePage;
