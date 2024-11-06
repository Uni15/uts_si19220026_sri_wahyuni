import React from "react";
import Tombol from './atoms/tombol';

export default function Hero({ title, desc, src }) {
    return (
        <div className="row py-5 px-4 bg-light">
            <div className="col-6">
                <h2 className="mb-5">{title}</h2>
                <p>{desc}</p>
                <div className="mt-5 py-3">
                    <Tombol className="btn btn-primary me-2">Produk Kami</Tombol>
                    <Tombol className="btn btn-outline-primary">Pesan Sekarang</Tombol>
                </div>
            </div>
            <div className="col-6">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://tse2.mm.bing.net/th?id=OIP.ZsbhE8kCIVNDaxQDxLCJmQHaE9&pid=Api&P=0&h=180" className="img-thumbnail d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.pinimg.com/originals/98/6c/ab/986cabdde859a26cf1f42fe3454a3d40.jpg" className="img-thumbnail d-block w-100" alt=".../" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://c.inilah.com/reborn/2023/08/1/0302_124635_95fa_inilah_com_2d8e59156e.jpg" className="img-thumbnail d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
}