import React from 'react'
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import DangNhap from '../../components/dangnhap/Dangnhap';
const dangnhap = () => {
    return (
        <div>
            <Navbar />
            <DangNhap />

            <MailList />
        </div>
    );
}
export default dangnhap
