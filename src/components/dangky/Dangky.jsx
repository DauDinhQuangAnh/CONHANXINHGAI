import React from 'react';
import './index.css'; // Thay đổi tên file CSS nếu cần

const Dangky = () => {
    return (
        <div className="dangky-container">
            <form className="dangky-form">
                <h2>Đăng Ký</h2>
                {/* Thêm các trường đăng ký cần thiết ở đây */}
                <label htmlFor="username">Tên người dùng:</label>
                <input type="text" id="username" name="username" />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="password">Mật khẩu:</label>
                <input type="password" id="password" name="password" />

                {/* Thêm các trường khác nếu cần thiết */}

                <button type="submit" className="dangky-button">Đăng Ký</button>
            </form>
        </div>
    );
}

export default Dangky;
