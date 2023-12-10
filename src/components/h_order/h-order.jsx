
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./h_order.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file


const H_order = ({ type }) => {

    return (
        <div className="header">
            <div
                className={
                    type === "list" ? "headerContainer listMode" : "headerContainer"
                }
            >
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon />
                        <span>Hà Nội</span>
                    </div>
                    <div className="headerListItem" >
                        <FontAwesomeIcon />
                        <span>TP.HCM</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon />
                        <span>Nha Trang</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon />
                        <span>Phú Quốc</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon />
                        <span>Vũng Tàu</span>
                    </div>
                </div>
                {type !== "list" && (
                    <>
                        <h1 className="headerTitle">
                            Từ Đông Nam Á Đến Thế Giới, Trong Tầm Tay Bạn
                        </h1>
                        <p className="headerDesc">
                            Nhận phần thưởng cho những chuyến đi của bạn - mở khóa giảm giá ngay lập tức 10% trở lên với một tài khoản Traveloca miễn phí.
                        </p>

                    </>
                )}
            </div>
        </div>


    );
};

export default H_order;
