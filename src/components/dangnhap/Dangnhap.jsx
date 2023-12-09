import React from 'react';
import './index.css'; // Thay đổi tên file CSS nếu cần

const DangNhap = () => {
    return (
        <div className="dangky-container">
            <form className="dangky-form">
                <h2>Đăng Nhập</h2>
                {/* Thêm các trường đăng ký cần thiết ở đây */}

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="password">Mật khẩu:</label>
                <input type="password" id="password" name="password" />

                {/* Thêm các trường khác nếu cần thiết */}

                <button type="submit" className="dangky-button">Đăng Nhập</button>
            </form>
        </div>
    );
}

export default DangNhap;
