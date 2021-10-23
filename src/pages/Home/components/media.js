import React from 'react';
import PropTypes from 'prop-types';

const HomeMedia = ({ dataMedia }) => {
    return (
        <div className="row media-container">
            <div className="media-box">
                <p className="media-title">Media</p>

                <button className="btn-login">view all</button>
            </div>

            {
                dataMedia.map(e =>
                    <div className="col-12 col-sm-6 col-md-4 mb-4">
                        <div className="card media-card">
                            <div className="media-img">
                                <img src={e.img} />
                            </div>

                            <div className="card-body">
                                <div className="media-text">
                                    {e.text}
                                </div>

                                <div className="media-date">
                                    {e.date}
                                </div>

                                <div className="card-bottom">
                                    <div className="btn-readmore">
                                        {e.button}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
            }

        </div>
    );
};

HomeMedia.propTypes = {

};

export default HomeMedia;