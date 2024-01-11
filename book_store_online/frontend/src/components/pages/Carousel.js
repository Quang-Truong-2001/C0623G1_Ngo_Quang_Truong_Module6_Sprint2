import React from 'react';

function Carousel(props) {
    return (
        <div className="carousel-manual d-flex justify-content-center pb-5 z-0">
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="5000">
                        <img
                            src="https://image.nhandan.vn/1200x630/Uploaded/2023/tpuoaob/2023_04_14/doc-sach-9398.png.webp"
                            className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img
                            src="https://curnonwatch.com/blog/wp-content/uploads/2022/07/Sach-hay-ve-cuoc-song-ban-chi-can-song-tot-troi-xanh-tu-an-bai.jpg"
                            className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://cungdocsach.vn/wp-content/uploads/2022/02/Sach-song-tich-cuc-hon.jpg"
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