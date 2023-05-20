import React, { Component, useState } from 'react'

const defPapyloadApplicant = {
    fullName: '',
    email: '',
    phoneNumber: '',
    message: ''
}

const ContactForm = (props) => {
    const [applicantInfo, setApplicantInfo] = useState(defPapyloadApplicant)

   const handleChange = e => {
        setApplicantInfo({
            [e.target.id]: e.target.value
        })
    }

   const handleSubmit = e => {
        e.preventDefault();
        props.onFormSubmit(applicantInfo);
        setApplicantInfo({
            fullName: '',
            email: '',
            phoneNumber: '',
            message: ''
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="fullName" placeholder="Nama lengkap" onChange={handleChange} value={applicantInfo.fullName} />
                    <label htmlFor="fullName">Nama Lengkap</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" onChange={handleChange} value={applicantInfo.email} />
                    <label htmlFor="email">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="phoneNumber" placeholder="08219xxxx" onChange={handleChange} value={applicantInfo.phoneNumber} />
                    <label htmlFor="phoneNumber">No Handphone</label>
                </div>
                <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="message" style={{ height: '100px' }} onChange={handleChange} value={applicantInfo.message}></textarea>
                    <label htmlFor="message">Pesan</label>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Kirim Pesan</button>
            </form>
        </>
    )
}


export default ContactForm