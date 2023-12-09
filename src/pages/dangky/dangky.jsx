import React from 'react'
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import DangKy from "../../components/dangky/Dangky"; //lỗi ghi hoa nhưng k ảnh hưởng


const dangky = () => {
    return (
        <div>
            <Navbar />
            <DangKy />
            <MailList />
        </div>
    );
}

export default dangky
