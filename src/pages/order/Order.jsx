import React from 'react'
import "./order.css"
import Navbar from '../../components/navbar/Navbar'
import MailList from '../../components/mailList/MailList'
import H_order from '../../components/h_order/h-order'
const Order = () => {
    const bookingHistory = [
        {
            id: 1,
            roomName: 'Deluxe Double Room',
            checkInDate: '2023-07-15',
            checkOutDate: '2023-07-20',
            numAdults: 2,
            numChildren: 1,
            cost: '10tr',

        },
        {
            id: 2,
            roomName: 'Deluxe Double Room',
            checkInDate: '2023-07-15',
            checkOutDate: '2023-07-20',
            numAdults: 2,
            numChildren: 1,
            cost: '10tr',

        },
        // Add more booking history items as needed
    ];
    return (
        <div>
            <Navbar />
            <H_order />


            <div className="booking-history-container">
                <h1>Booking History</h1>
                {bookingHistory.map((booking) => (
                    <div key={booking.id} className="booking-item">
                        <div>
                            <h2>{booking.roomName}</h2>
                            <p>
                                Check-in: {booking.checkInDate} - Check-out: {booking.checkOutDate}
                            </p>
                            <p>Người Lớn: {booking.numAdults}</p>
                            <p>Trẻ Em: {booking.numChildren}</p>
                            <p>Giá: {booking.cost}</p>
                            <button className='xem'>Xem Chi Tiết</button>
                            <button className='Huy'>Hủy Đăng Kí</button>
                        </div>
                        <div><img src="https://cdn3.ivivu.com/2022/08/Capella-Hanoi-ivivu.jpg" alt="" className='imgne' />
                        </div>
                    </div>
                ))}
            </div>


            <MailList />
        </div>
    )
}

export default Order
