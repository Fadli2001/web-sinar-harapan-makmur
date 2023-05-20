import React, { useState } from 'react'
import StepCredits from '../../../asset/img/step-credits.svg'

const CreditInform = () => {
    const stepCreditInfo = {
        show: false,
        faqs: [
            {
                id: 1,
                title: 'Non consectetur a erat nam at lectus urna duis?',
                description: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.'
            },
            {
                id: 2,
                title: 'Feugiat scelerisque varius morbi enim nunc?',
                description: 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.',
            },
            {
                id: 3,
                title: 'Dolor sit amet consectetur adipiscing elit?',
                description: 'Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar\n' +
                    'elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus\n' +
                    'pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at\n' +
                    'elementum eu facilisis sed odio morbi quis'
            }
        ]
    }

    return (
        <section id="why-us" className="why-us section-bg">
            <div className="container-fluid" data-aos="fade-up">
                <div className="row">
                    <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
                        <div className="content">
                            <h3>Alur <strong>Pengajuan Credit</strong> Mobil Baru atau Bekas  </h3>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum sed quo id consequuntur cumque facilis sit velit, rerum, eligendi beatae veritatis culpa error minus! Fugit sint molestias unde facere accusamus?
                            </p>
                        </div>
                        <div className="accordion-list">
                            <ul>
                                {
                                    stepCreditInfo.faqs.map((credit, k) => {
                                        k += 1
                                        return (
                                            <li key={credit.id}>
                                                <a data-bs-toggle="collapse" className="collapse" data-bs-target={`#${credit.id}`}><span>{k.toString().padStart(2, '0')}</span>{credit.title}<i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                                <div id={`${credit.id}`} className="collapse" data-bs-parent=".accordion-list">
                                                    <p>
                                                        {credit.description}
                                                    </p>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img" style={{ backgroundImage: `url(${StepCredits})` }}></div>
                </div>
            </div>
        </section>
    );
}

export default CreditInform

