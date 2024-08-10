    import React, { useEffect } from 'react';
    import { FaTruck, FaArrowRight, FaArrowLeft } from "react-icons/fa";
    import Slider from "react-slick";
    import "slick-carousel/slick/slick.css";
    import "slick-carousel/slick/slick-theme.css";
    import { BsGpuCard } from "react-icons/bs";
    import { BsCpu } from "react-icons/bs";
    import { LiaMicrochipSolid } from "react-icons/lia";
    import { CiStar } from "react-icons/ci";
    import { useDispatch, useSelector } from 'react-redux';
    import { fetchProduct } from '../redux/actions/productAction';
    import { MdScreenshotMonitor } from "react-icons/md";
    const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", right: "20px",   zIndex: "100", background: '#000' }}
                onClick={onClick}
            > 

            </div>
            
        );
    };

    const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", left: "20px" ,  zIndex: "100" ,  background: '#000'  }}
                onClick={onClick}
            />
        );
    };

    const Product = ({hTitle , shTitle}) => {
        
        const {products} = useSelector(state => state.product);
        const dispatch = useDispatch()
        useEffect(() => {
            dispatch(fetchProduct());
          }, [dispatch])
          const filteredProducts = products.filter((product) => {
            if (hTitle === 'PC bán chạy') return product.categoryName === 'PC';
            if (hTitle === 'Laptop gaming bán chạy') return product.categoryName === 'Laptop';
            if (hTitle === 'Bàn phím văn phòng bán chạy') return product.categoryName === 'Bàn phím';
            return true;
          });
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            initialSlide: 0,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            autoplay: true,
            autoplaySpeed: 1000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        };


        return (
            <div className="max-w-[1220px] mt-[20px] mx-auto px-3 rounded-[5px] ">
                <div className="bg-white rounded-sm flex p-2 h-[50px]">
                    <div className="mr-2 p-2">
                        <div>
                            <h2 className="">
                                <a href="#">{hTitle}</a>
                            </h2>
                        </div>
                    </div>
                    <div className="border-l p-2 border-slate-700">
                        <h3 className="flex">
                            <FaTruck className=" mr-2 mt-1 text-[#E30019]" />
                            <span className="">{shTitle}</span>
                        </h3>
                    </div>
                </div>
                <div className='bg-white'>
                    <div className="slider-container p-2 ">
                        <Slider {...settings}>
                        {filteredProducts.map((product, index) => (
                            <div className='bg-white border border-solid border-1 border-slate-200 rounded-[1px]' key={product._id}>
                                <div className='p-2'>
                                    <img src={product.images[0].url} alt="" />
                                </div>
                                <div>
                                    <div className='p-3'>
                                        <span className='font-bold text-[12px]'>{product.name}</span>
                                    </div>
                                    <div className='p-2'>
                                        <div className='bg-[#ECECEC] p-3'>
                                            {product.CPU && (
                                                <div className='flex'>
                                                    <BsCpu className='mt-[2px]' />
                                                    <span className='text-[10px] p-1'>{product.CPU}</span>
                                                </div>
                                            )}
                                            {product.VGA && (
                                                <div className='flex'>
                                                    <BsGpuCard className='mt-[2px]' />
                                                    <span className='text-[10px] p-1'>{product.VGA}</span>
                                                </div>
                                            )}
                                            {product.RAM && (
                                                <div className='flex'>
                                                    <LiaMicrochipSolid className='mt-[2px]' />
                                                    <span className='text-[10px] p-1'>{product.RAM}</span>
                                                </div>
                                            )}
                                            {product.Screen && (
                                                <div className='flex'>
                                                    <MdScreenshotMonitor className='mt-[2px]' />
                                                    <span className='text-[10px] p-1'>{product.Screen}</span>
                                                </div>
                                            )}

                                         
                                        </div>
                                    </div>
                                    <div className='m-2 flex'>
                                        <span className='text-[12px] line-through '>72.520.000₫</span>
                                    </div>
                                    <div className='m-2 flex'>
                                        <span className='text-[15px] text-red-500'>{product.price}</span>
                                        <div className='ml-2'>
                                            <span className='px-4 bg-[#FFEDED] text-red-500 border border-solid border-[#E30019]'>-3%</span>
                                        </div>
                                    </div>
                                    <div className='flex m-2'>
                                        <span className='text-yellow-600 text-sm'>4.7</span>
                                        <CiStar className='mt-[3px] text-yellow-600' />
                                        <span className='text-[12px] mt-[2px]'>(5 đánh giá)</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                           
                            
                          

                           
                            

                            

                        </Slider>
                    </div>
                </div>
            </div>
        );
    };

    export default Product;
