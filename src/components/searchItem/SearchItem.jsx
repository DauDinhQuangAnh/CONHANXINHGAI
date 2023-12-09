import "./searchItem.css";
import { useNavigate } from 'react-router-dom';
const SearchItem = () => {

  const navigate = useNavigate();

  const handledetail = () => {
    console.log("sang chi tiết");
    navigate("/hotels/:id");
  };
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Mercure Vung Tau</h1>
        <span className="location">03-06 Hạ Long Street Phường 2, Vũng Tàu 790000 Việt Nam</span>
        <span className="conphong">Còn Phòng</span>
        <span className="siSubtitle">
          Gồm 2 Phòng Ngủ, 2 nhà tắm 1 nhà bếp và 1 phòng khách
        </span>

        <span className="siCancelOpSubtitle">
          Bạn có thể hủy sau, vì vậy hãy chốt mức giá tuyệt vời này ngay hôm nay!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Xuất Sắc</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">2.000.000VND</span>
          <span className="siTaxOp">Đã bao gồm thuế</span>
          <button className="siCheckButton" onClick={handledetail}>Xem Thêm Thông Tin</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
