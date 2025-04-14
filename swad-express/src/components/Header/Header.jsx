import React from 'react';
import './Header.css';
import { assets } from '../../assets/assets';

const Header = () => {
  return (
    <div className="header" style={{ backgroundImage: `url(${assets.header_img})` }}>
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
        Craving something delicious? SwadExpress brings your favorite local dishes, comforting classics, and sizzling street food right next to your doorstep—hot, fresh, and full of flavor. Your next great meal is just a tap away.
        </p>
        <a href="#class-menu" >View Menu</a>
      </div>
    </div>
  );
};

export default Header;
