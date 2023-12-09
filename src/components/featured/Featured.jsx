import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://mytourcdn.com/upload_images/Image/Location/22_10_2015/9-Du-lich-thac-dambri-lam-dong-mytour-1.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Thác Dambri – Lâm Đồng</h1>
          <h2>123 hotels</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://cdn3.ivivu.com/2022/09/H%E1%BB%93-Lak-ivivu.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Hồ Lắk – Đắk Lắk</h1>
          <h2>533 hotel</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cdn3.ivivu.com/2022/09/T%E1%BB%95ng-quan-du-l%E1%BB%8Bch-V%C5%A9ng-T%C3%A0u-ivivu.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Vũng Tàu</h1>
          <h2>532 hotels</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
