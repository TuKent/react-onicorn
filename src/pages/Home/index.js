import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Layout from "../../layouts/index";
import imgWho from "../../assets/img/home_who.png";

import imgService1 from "../../assets/img/service_1.svg"
import imgService2 from "../../assets/img/service_2.svg"
import imgService3 from "../../assets/img/service_3.svg"
import imgService4 from "../../assets/img/service_4.svg"
import imgService5 from "../../assets/img/service_5.svg"

import imgMedia from "../../assets/img/media.png";

import imgPartner1 from "../../assets/img/partner_1.svg";
import imgPartner2 from "../../assets/img/partner_2.svg";
import imgPartner3 from "../../assets/img/partner_3.svg";
import imgPartner4 from "../../assets/img/partner_4.png";

import HomeService from './components/service';
import HomeMedia from './components/media';
import HomePartner from './components/partner';
const HomePage = props => {
    const [service, setService] = useState(
        [
            {
                img: imgService1,
                title: "Kết nối",
                infomation: "Kết nối, kiến tạo cộng đồng, tạo môi trường phát triển",
                button: "Readmore"
            },
            {
                img: imgService2,
                title: "Đầu tư",
                infomation: "Đầu tư, gọi vốn, gia tăng năng lực tài chính",
                button: "Readmore"
            },
            {
                img: imgService3,
                title: "Xây dựng",
                infomation: "Tạo lập nền tảng và giá trị cốt lõi ",
                button: "Readmore"
            },
            {
                img: imgService4,
                title: "Phát triển",
                infomation: "Đồng hành tạo đà tăng trưởng bền vững",
                button: "Readmore"
            },
            {
                img: imgService5,
                title: "Hệ sinh thái bền vững",
                infomation: "Liên kết và tạo mạng lưới hợp tác vững mạnh",
                button: "Readmore"
            },
        ]
    )

    const [media, setMedia] = useState(
        [
            {
                img: imgMedia,
                text: "We provide what you need to start or grow your business.",
                date: "4 Aug, 2020",
                button: "Readmore"
            },
            {
                img: imgMedia,
                text: "We provide what you need to start or grow your business.",
                date: "4 Aug, 2020",
                button: "Readmore"
            },
            {
                img: imgMedia,
                text: "We provide what you need to start or grow your business.",
                date: "4 Aug, 2020",
                button: "Readmore"
            },
        ]
    )

    const [partner, setPartner] = useState([
        {
            img: imgPartner1
        },
        {
            img: imgPartner2
        },
        {
            img: imgPartner3
        },
        {
            img: imgPartner4
        },
        {
            img: imgPartner1
        },
        {
            img: imgPartner2
        },
        {
            img: imgPartner3
        },
        {
            img: imgPartner4
        },
    ])

    return (
        <Layout>
            <section className="home-container-1">
                <div className="container px-0">
                    <div className="home-box-1">
                        <p className="welcome-text">Chào mừng các bạn đến với </p>
                        <p className="womentech-text">WomenTech</p>
                        <p className="info-text">WTA là đồng tiền bản vị
                            <br />
                            của hệ sinh thái WomanTech
                        </p>

                        <button className="btn-login">Đăng nhập</button>
                    </div>
                </div>
            </section>

            <section className="home-container-2">
                <div className="container">
                    <div className="about-box">
                        <p className="about-title">
                            Về chúng tôi
                        </p>
                        <p className="about-text">
                            Khám phá tin tức mới nhất về WTA trên blog của chúng tôi
                        </p>
                    </div>

                    <div className="row text-white who-box">
                        <div className="col-lg-6 col-12">
                            <p className="who-title">
                                Chúng tôi là WTA
                            </p>

                            <div className="who-flex">
                                <p className="who-text">
                                    WTA Token là tài sản số chính thức của Quỹ khởi nghiệp sáng tạo dành cho phụ nữ toàn cầu, được phát triển bởi đội ngũ chuyên gia và cố vấn tại nhiều nơi trên thế giới.
                                </p>

                                <p className="who-text">
                                    WTA Token dựa trên nền tảng công nghệ Blockchain dành cho các cá nhân, doanh chủ và doanh nghiệp cho việc phát triển, quản lý chuỗi cung ứng qua các hợp đồng thông minh.
                                </p>

                                <p className="who-text">
                                    WTA với tầm nhìn trong vòng 5 năm tới, sẽ hỗ trợ hàng triệu người trên thế giới và hàng ngàn doanh nghiệp khởi nghiệp sáng tạo, xây dựng nền tảng và hệ sinh thái doanh nghiệp bền vững.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="who-img">
                                <img src={imgWho} />
                            </div>
                        </div>
                    </div>

                    <HomeService dataService={service}></HomeService>

                    <HomeMedia dataMedia={media}></HomeMedia>
                </div>
            </section>

            <section className="home-container-3">
                <HomePartner dataPartner={partner} ></HomePartner>
            </section>


        </Layout>
    );
};

HomePage.propTypes = {

};

export default HomePage;