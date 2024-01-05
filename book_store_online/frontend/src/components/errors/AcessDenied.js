import React from 'react';

function AcessDenied(props) {
    return (
        <>
            <div className="container d-flex justify-content-center" style={{minHeight: "58vh"}}>
                <div className="row">
                    <div className="container my-5">
                        <div className="access-denied-container mt-5">
                            <h2>Bạn chưa đăng nhập</h2>
                            <p>Bạn cần đăng nhập trước khi xem giỏ hàng</p>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default AcessDenied;