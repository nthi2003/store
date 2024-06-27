import React, { useState } from 'react';
import Header from '../components/Header';
import { Link, useNavigate } from 'react-router-dom';
import FooterComponent from '../components/FooterComponent';
import { useDispatch, useSelector } from 'react-redux';
import { LoginUser } from '../redux/actions/authActions';
import { setError } from '../redux/reducers/authSlice';
import { toast, Toaster } from 'react-hot-toast';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(LoginUser(formData));
      if (response && !response.error) {
        navigate('/');
      } else {
       
     
        dispatch(setError(response.error));
        toast.error('Đăng nhập không thành công: ' + response.error);
      }
    } catch (error) {
      console.error('Lỗi:', error);
      console.log('Đăng nhập không thành công: ' + error.message);
    }
  };

  return (
    <div className="text-center">
      <Header placeholder="Bạn cần tìm gì ?" />
      <Toaster />
      <form className="w-full h-[600px] bg-gray-300 " onSubmit={handleSubmit}>
        <div className="p-5">
          <h2 className="mt-[100px]">ĐĂNG NHẬP HOẶC TẠO TÀI KHOẢN</h2>
        </div>
        <div className="mb-6">
          <input
            className="outline-none border border-solid pt-2 pb-2 pr-[50px] pl-[15px] w-[300px]"
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
          <input
            className="outline-none border border-solid pt-2 pb-2 pr-[50px] pl-[15px]  w-[300px] "
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Mật khẩu"
          />
        </div>
        <div className="mb-6">
          <a href="" className="ml-[170px]">
            Quên mật khẩu ?
          </a>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" className="bg-[#E30019] text-white w-[300px] pt-2 pb-2">
          {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
        </button>
        <p className="text-sm text-center mt-4">
          Bạn chưa có tài khoản? {' '}
          <Link to="/register" className="font-medium text-primary underline">
            Đăng kí ngay
          </Link>
        </p>
      </form>
      <FooterComponent />
    </div>
  );
};

export default LoginPage;
