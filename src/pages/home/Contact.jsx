import React, { Component, useState } from 'react'
import ContactForm from './ConcactForm';
import Modal from '../../components/modal';

const Contact = () => {
    const [contactContent, setContactContent] = useState({
        btnText: 'Hubungi Sekarang',
        success: false,
        message: null
    })

        const handleFormSubmit = formData => {
            setContactContent(
            {
                ...contactContent,
                message: formData,
                success: !this.state.success
            }
        )
    }

    return (
        <>
            <section id="cta" className="cta">
                <div className="container" data-aos="zoom-in">
                    <div className="row">
                        <div className="col-lg-9 text-center text-lg-start">
                            <h3>Tidak menemukan mobil yang Anda cari ?</h3>
                            <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="col-lg-3 cta-btn-container text-center">
                            <button className="cta-btn align-middle" data-bs-toggle="modal" data-bs-target="#exampleModal">{contactContent.btnText}</button>
                        </div>
                    </div>
                </div>
            </section>
            <Modal title='Form Pengajuan'>
                {contactContent.success === true ? `Terima kasih ${contactContent.message.fullName} atas pengaduannya!` : <ContactForm onFormSubmit={handleFormSubmit} />}
            </Modal>
        </>
    )
}


export default Contact