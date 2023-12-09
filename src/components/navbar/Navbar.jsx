import React from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const navigate = useNavigate();


  const handlelogo = () => {
    // Xử lý khi nút Đăng Ký được click
    console.log("logo được click");
    navigate("/");
  };

  const handleRegister = () => {
    // Xử lý khi nút Đăng Ký được click
    console.log("Đăng Ký được click");
    navigate("/dangky");
  };

  const handleLogin = () => {
    // Xử lý khi nút Đăng Nhập được click
    console.log("Đăng Nhập được click");
    navigate("/dangnhap");
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        {/* Sử dụng Link để chuyển hướng đến trang chủ */}
        <span className="logo" onClick={handlelogo}>Traveloca.com</span>
        <div className="navItems">
          {/* Sử dụng Link để chuyển hướng đến trang đăng ký */}
          <button className="navButton" onClick={handleRegister}>Đăng Ký</button>
          {/* Sử dụng Link để chuyển hướng đến trang đăng nhập */}
          <button className="navButton" onClick={handleLogin}>Đăng Nhập</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
