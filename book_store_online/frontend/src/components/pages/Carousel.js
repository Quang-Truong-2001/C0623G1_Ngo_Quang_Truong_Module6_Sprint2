import React from 'react';

function Carousel(props) {
    return (
        <div className="carouse-manu d-flex justify-content-center pb-5 z-0">
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="5000">
                        <img
                            src="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/10/sach-hay-21.jpg"
                            className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img
                            src="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/10/sach-hay-11.jpg"
                            className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/10/sach-hay-12.jpg"
                             className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev z-0" type="button"
                        data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next z-0" type="button"
                        data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>    );
}

export default Carousel;