import React from 'react'
import "./detail.css"
import Navbar from '../navbar/Navbar';
import Header from '../header/Header';
import MailList from '../mailList/MailList';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleArrowLeft,
    faCircleArrowRight,
    faCircleXmark,
    faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';




const Detail = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const photos = [
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
        },
    ];
    const navigate = useNavigate();
    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true);
    };
    const handleorder = () => {
        navigate("/order");
    }


    const handleMove = (direction) => {
        let newSlideNumber;

        if (direction === "l") {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
        } else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
        }

        setSlideNumber(newSlideNumber)
    };

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="hotelContainer">
                {open && (
                    <div className="slider">
                        <FontAwesomeIcon
                            icon={faCircleXmark}
                            className="close"
                            onClick={() => setOpen(false)}
                        />
                        <FontAwesomeIcon
                            icon={faCircleArrowLeft}
                            className="arrow"
                            onClick={() => handleMove("l")}
                        />
                        <div className="sliderWrapper">
                            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
                        </div>
                        <FontAwesomeIcon
                            icon={faCircleArrowRight}
                            className="arrow"
                            onClick={() => handleMove("r")}
                        />
                    </div>
                )}
                <div className="hotelWrapper">
                    <button className="bookNow" onClick={handleorder}>Đặt Ngay</button>
                    <h1 className="hotelTitle">Mercure Vung Tau</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>03-06 Hạ Long Street Phường 2, Vũng Tàu 790000 Việt Nam</span>
                    </div>
                    <span className="hotelDistance">
                        Excellent location – 500m from center
                    </span>
                    <span className="hotelPriceHighlight">
                        Đang có Phòng
                    </span>
                    <div className="hotelImages">
                        {photos.map((photo, i) => (
                            <div className="hotelImgWrapper" key={i}>
                                <img
                                    onClick={() => handleOpen(i)}
                                    src={photo.src}
                                    alt=""
                                    className="hotelImg"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">Vị Trí Nằm Ngay Trung Tâm Thành Phố Vũng Tàu</h1>
                            <p className="hotelDesc">
                                Mercure Vũng Tàu là một trong những khách sạn hàng đầu tại Vũng Tàu, nổi bật với vị trí đắc địa ven biển và thiết kế hiện đại sang trọng. Khách sạn này thường được lựa chọn bởi cả du khách công tác và du lịch.
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Địa điểm tuyệt vời cho 9 ngày</h1>
                            <span>
                                Nằm cách biển 2km, chỗ nghỉ này có điểm vị trí tuyệt vời - 9,8!
                            </span>
                            <h2>
                                <b>12.000.000</b> (9 đêm)
                            </h2>
                            <button onClick={handleorder}>Đặt Ngay</button>
                        </div>
                    </div>
                </div>
                <MailList />

            </div>
        </div>
    );
};

export default Detail
