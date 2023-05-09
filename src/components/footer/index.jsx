import React, { Component } from 'react'
import {
    YoutubeLogo,
    IgLogo,
    WaLogo,
    TwitterLogo
} from '../../asset/img'

export default class Footer extends Component {
    render() {
        const socialMedia = [
            {
                image: YoutubeLogo,
                link: '',
                alt: ''
            },
            {
                image: IgLogo,
                link: '',
                alt: ''
            },
            {
                image: WaLogo,
                link: '',
                alt: ''
            },
            {
                image: TwitterLogo,
                link: '',
                alt: ''
            }

        ]
        return (
            <footer id="footer">

                <div class="footer-top">
                    <div class="container">
                        <div class="row">

                            <div class="col-lg-3 col-md-6 footer-contact">
                                <h3>Pt S H Makmur</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa corrupti itaque similique, quae laborum nam beatae dolores vitae maiores?
                                </p>
                            </div>

                            <div class="col-lg-3 col-md-6 footer-links">
                                <h4>Lokasi</h4>
                                <p>
                                    Jl. H. Dahlan No.75, RT.8 / RW.4, Ragunan, Ps. Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12550
                                </p>
                            </div>

                            <div class="col-lg-3 col-md-6 footer-links">
                                <h4>Layanan Kami</h4>
                                <ul>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Beli Mobil</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Jual Mobil</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Service Mobile</a></li>
                                </ul>
                            </div>

                            <div class="col-lg-3 col-md-6 footer-links ">
                                <h4>Social Media</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas?</p>
                                <ul class="list-unstyled d-flex justify-content-between">
                                    {
                                        socialMedia.map(sm => (
                                            <li class="flex-fill">
                                                <img src={sm.image} alt={sm.alt} srcset={sm.link}/>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="justify-content-center text-light">
                    <div class="d-flex align-items-center">
                        <div class="mx-auto my-4">
                            &copy; Copyright <strong><span>Enigmacamp</span></strong>. All Rights Reserved
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
