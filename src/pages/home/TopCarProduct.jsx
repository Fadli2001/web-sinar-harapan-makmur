import React, { Component } from 'react'
import Car from '../../asset/img/clients/car.jpg'

export default class TopCarProduct extends Component {
    render() {
        const services = [
            {
                id: 1,
                title: '2018 Mercedes-Benz GLC 200 (CKD) 2.0',
                desc: '40.439 km | Automatic',
                status: 'Bekas',
                image: Car,
                price: 7000000
            },
            {
                id: 1,
                title: '2018 Mercedes-Benz GLC 200 (CKD) 2.0',
                desc: '40.439 km | Automatic',
                status: 'Bekas',
                image: Car,
                price: 7000000
            },
            {
                id: 1,
                title: '2018 Mercedes-Benz GLC 200 (CKD) 2.0',
                desc: '40.439 km | Automatic',
                status: 'Bekas',
                image: Car,
                price: 7000000
            },
            {
                id: 1,
                title: '2018 Mercedes-Benz GLC 200 (CKD) 2.0',
                desc: '40.439 km | Automatic',
                status: 'Bekas',
                image: Car,
                price: 7000000
            }
        ]
        return (
            <section id="services" className="services  ">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Barang Terlaris!!</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, aspernatur debitis aliquid consectetur id sit!</p>
                    </div>
                    <div className="row">
                        {
                            services.map((s) => (
                                <div className="col-xl-3 col-md-6 d-flex align-items-stretch">
                                    <div className="card border-0 card-car" style={{ width: ' 18rem' }}>
                                        <img src={s.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h6>{s.title}</h6>
                                            <span>{s.desc} | <strong className="badge text-bg-success">{s.status}</strong> </span>
                                            <p className="card-text text-danger">Rp {s.price}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        <div className="col-xl-12">
                            <div className="d-flex justify-content-center align-items-center mt-4">
                                <div className="mx-auto my-auto">
                                    <a href="#">
                                        <svg className="svg-right-arrow fs-3 text" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                        </svg><span>Selengkapnya...</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
