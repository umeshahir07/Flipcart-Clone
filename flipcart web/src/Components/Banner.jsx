import React from 'react';
import './Style/Banner.css';

function Banner() {
  return (
    <div className="banner-container">
      <div className="main mt-4 gap-3">
        <div className="left">
          <img src="https://rukminim1.flixcart.com/fk-p-flap/530/810/image/131c8c7ecafd87e5.jpg?q=20" alt="Left Banner" />
        </div>
        <div className="right">
          <img src="https://rukminim2.flixcart.com/www/2660/780/promos/26/09/2023/ed27f892-1bc6-462f-805b-953f5add4f6a.jpg?q=60" alt="Right Banner" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
