import React from 'react';

function Detail(props) {
    return (
        <div className="row m-0 p-0">
            <div className="detail col-lg-4 col-xl-4 col-sm-12 col-md-12">
                <div className="image-big card rounded-3 mb-3">
                    <img className="my-5"
                         src="https://salt.tikicdn.com/cache/750x750/ts/product/94/32/30/9e9b8e97c8849dc355060fc422a356aa.jpg.webp"
                         alt=""/>
                </div>
            </div>
            <div className="detail col-lg-5 col-xl-5 col-sm-12 col-md-12">
                <div className="card rounded-3 mb-2 position-sticky">
                    <div className="ms-2">
                        <div className="d-flex align-items-center">
                            <img className="img-detail"
                                srcSet="https://salt.tikicdn.com/ts/upload/d7/56/04/b93b8c666e13f49971483596ef14800f.png"
                                width="89" height="20" alt="is_authentic"/>
                                <p>Tác giả: José Mauro de Vasconcelos</p>
                        </div>
                        <div className="d-flex align-items-center mt-2">
                            <h6 className="ms-1">Cây cam ngọt của tôi</h6>
                        </div>
                        <div className="d-flex align-items-center mt-1">
                            <h5 className="ms-1">99.000 đ</h5>
                        </div>
                    </div>
                </div>
                <div className="card rounded-3">
                    <div className="ms-2 description">
                        <div className="d-flex align-items-center mt-2">
                            <h6 className="ms-1">Mô tả sản phẩm</h6>
                        </div>
                        <div className="d-flex align-items-center mt-1">
                            <p className="ms-1">“Vị chua chát của cái nghèo hòa trộn với vị ngọt ngào khi khám phá ra
                                những điều khiến cuộc đời này đáng số một tác phẩm kinh điển của Brazil.”</p>
                        </div>
                        <div className="d-flex align-items-center mt-2">
                            <h6 className="ms-1">Tác giả</h6>
                        </div>
                        <div className="d-flex align-items-center mt-1">
                            <p className="ms-1">JOSÉ MAURO DE VASCONCELOS (1920-1984) là nhà văn người Brazil. Sinh ra
                                trong một gia đình nghèo ở ngoại ô Rio de Janeiro, lớn lên ông phải làm đủ nghề để kiếm
                                sống. Nhưng với tài kể chuyện thiên bẩm, trí nhớ phi thường, trí tưởng tượng tuyệt vời
                                cùng vốn sống phong phú, José cảm thấy trong mình thôi thúc phải trở thành nhà văn nên
                                đã bắt đầu sáng tác năm 22 tuổi. Tác phẩm nổi tiếng nhất của ông là tiểu thuyết mang màu
                                sắc tự truyện Cây cam ngọt của tôi. Cuốn sách được đưa vào chương trình tiểu học của
                                Brazil, được bán bản quyền cho hai mươi quốc gia và chuyển thể thành phim điện ảnh.
                                Ngoài ra, José còn rất thành công trong vai trò diễn viên điện ảnh và biên kịch.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="detail col-lg-3 col-xl-3 col-sm-12 col-md-12">
                <div className="buy card rounded-3 mb-3 mt-sm-3 mt-xl-0 mt-lg-0">
                    <h6 className="mt-3 mx-4">Số lượng: </h6>
                    <div className="d-flex mt-3 mx-4">
                        <button className="btn btn-outline-dark">-</button>
                        <button className="btn btn-outline-dark mx-2">1</button>
                        <button className="btn btn-outline-dark">+</button>
                    </div>
                    <button className="mt-3 mx-4 btn btn-buy">Mua ngay</button>
                    <button className="mt-3 mx-4 btn btn-outline-primary">Thêm vào giỏ hàng</button>
                    <h6 className="mt-3 mx-4">Tạm tính: </h6>
                    <h5 className="mt-1 mx-4">99.000 đ </h5>
                </div>
            </div>
        </div>
    );
}

export default Detail;