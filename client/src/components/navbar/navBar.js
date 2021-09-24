import React from 'react';
import './navbar.css';
// import Logo from './../images/cropped-TOPNAVLOGO.png';

const Navbar=() => {
  return (
    <>
   

        <div id="navbar">
            <div className="row">
                <div className="col-12">
                    <div className="navbarImage">
                        <a href="/" className="navLogo">
                            <img src="/images/homeImages/yumawayLogoHome.png" />
                        </a>
                    </div>
                    <div className="navbarMainItems">
                        <a href="/" className="mainNavItem">Home</a>
                        <a href="/colorado-deals" className="mainNavItem">Deals</a>
                        <a href="/locations" className="mainNavItem">Shop</a>
                    </div>
                </div>
            </div>
        </div>
        
    </>
  )
};
export default Navbar;