import React from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";


const HomePartner = ({ dataPartner }) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
    };

    return (
        <div className="container">
            <div className="row ">
                <div className="partner-box">
                    <p className="partner-title">
                        Đối tác
                    </p>
                </div>
            </div>

            <Slider {...settings}>
                {
                    dataPartner.map(e =>
                        <div className="partner-img">
                                <img src={e.img}></img>
                            </div>
                    )
                }
            </Slider>
        </div >
    );
};

HomePartner.propTypes = {

};

export default HomePartner;