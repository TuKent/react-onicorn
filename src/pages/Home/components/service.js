import React from 'react';
import PropTypes from 'prop-types';

const HomeService = ({ dataService }) => {
    return (
        <div className="row service-box">

            <div className="service-title">
                Dịch vụ WTA
            </div>

            {
                dataService.map(e =>
                    // console.log(e)
                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mb-4">
                        <div className="card service-card">
                            <div className="card-body">
                                <div className="img-service">
                                    <img src={e.img}></img>
                                </div>

                                <div className="card-top">
                                    <div className="card-title">
                                        {e.title}
                                    </div>

                                    <div className="card-desc">
                                        {e.infomation}
                                    </div>
                                </div>

                                <div className="card-bottom">
                                    <div className="btn-readmore">
                                        {e.button}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    );
};

HomeService.propTypes = {

};

export default HomeService;