import React from 'react';
import PropTypes from 'prop-types';
import imgHeader from "../assets/img/logo_header.png";
import imgCountry from "../assets/img/img_country.png";
import imgFooter from "../assets/img/logo_footer.png";
import imgTextFooter from "../assets/img/text_footer.png";
const index = ({
    children
}) => {
    return (
        <>
            <div className="container-fluid bg-header py-3">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <img src={imgHeader}></img>
                        </div>

                        <ul className="d-none d-lg-flex text-header">
                            <li>
                                Trang chủ
                            </li>

                            <li>
                                Về WTA
                            </li>

                            <li>
                                Dịch vụ
                            </li>

                            <li>
                                Tin tức
                            </li>

                            <li>
                                Hỗ trợ
                            </li>

                            <li>
                                Liên hệ
                            </li>
                        </ul>

                        <div className="d-flex box-left-header">
                            <button className="btn btn-header">
                                Đăng nhập
                            </button>

                            <div>
                                <img src={imgCountry}></img>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {children}
            <div className="container-fluid footer-container">
                <div className="container">
                    <div className="row footer-contact justify-content-between">
                        <div className="col-6 d-flex flex-column justify-content-center align-items-start">

                            <div>
                                <img src={imgFooter} />
                            </div>
                        </div>

                        <div className="col-6 d-flex justify-content-center justify-content-md-end  footer-box">
                            <ul>
                                <p className="footer-title">About Us</p>
                                <li>Contact</li>
                                <li>FAQs</li>
                                <li> Privacy Policy</li>
                                <li> Terms of use</li>
                                <li>Whitepaper</li>
                                <li>GitHub</li>
                            </ul>

                            <ul className="d-none d-md-block">
                                <p className="footer-title"> Social Media</p>
                                <li>Facebook</li>
                                <li>Youtube</li>
                                <li>Telegram Channel</li>
                                <li> Telegram Community</li>
                                <li>Zalo Community</li>
                                <li>Twitter</li>
                            </ul>

                            <ul className="d-none d-lg-block">
                                <p className="footer-title">Application</p>
                                <li>WTA Swap </li>
                                <li> WTA Wallet</li>
                                <li> WTA NFT Gallery</li>
                                <li> WTA Funding</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row footer-copyright">
                        <div className="col-6">
                        <p>Copyright © 2021 Womentech | All Rights Reserved</p>
                        </div>
                        <div className="col-6 d-flex justify-content-start footer-end">Terms of Service   I   Privacy Policy </div>
                       
                    </div>
                </div>
            </div>
        </>
    );
};

index.propTypes = {

};

export default index;