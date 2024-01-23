import React from 'react';

function AccessDenied(props) {
    return (
        <>
            <div style={{height:"80vh"}} className="container d-flex justify-content-center">
                <div className="row">
                    <div className="container my-5">
                        <div className="access-denied-container mt-5">
                            <h2>Bạn chưa đăng nhập</h2>
                            <p>Bạn cần đăng nhập</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AccessDenied;