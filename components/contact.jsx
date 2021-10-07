

import React, { useEffect, useReducer } from 'react'
import contactHeadphone from "../assets/icons/contact-headphone.png"
import Image from 'next/image'
import emailjs from "emailjs-com";
import axios from 'axios';

export default function ContactPage() {
    
     const [formInfo, setFormInfo] = useReducer(
        (oldState, updates) => ({ ...oldState, ...updates }),
        { fname: "", lname: "", email: "", msg: "" }
    );

    function sendEmail(e) {
        e.preventDefault();
        axios.post('/api/messages/', formInfo)
        .then(async res => {
            let data = await res.data;
            alert("Message sent successfully!");
            setFormInfo({ fname: "", lname: "", email: "", msg: "" })
        }).catch((error) => console.log(error))
        console.log(e.target)
        emailjs
        .sendForm(
            "service_edw4aco", "template_hzw5sia", e.target, "user_4O4FqptXDA9YUYikZ59T4"
        )
        .then(
            (result) => console.log(result.text),
            (error) => console.log(error.text)
        );
    }

    return (
        <>
            <div className="contact-us">
                <div className="">

                    <div className="row contact-card">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-lg-2 col-md-2 col-5 m-auto">
                                    <Image src={contactHeadphone} alt="contact-headphone"/>
                                </div>
                                <h3 className="col-lg-9 col-md-10">
                                    We are you all the time.
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <span>Alauno2021@gmail.com</span>
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <span>+20 112 0988 399</span>
                            <i className="fas fa-phone"></i>
                        </div>
                    </div>
                    <div className=" direct-contact">
                        <h4 className="text-secondary fw-bold">Get touch</h4>
                        <hr />
                        <form className=" contact-form row" onSubmit={sendEmail}>
                            <div className="col-lg-6 col-sm-12 form-group">
                                <label className="label fw-bold text-secondary">
                                    First Name
                                </label>
                                <input
                                    value={formInfo.fname}
                                    onChange={(e) => setFormInfo({fname: e.target.value})}
                                    type="text"
                                    id="fname"
                                    name="firstname"
                                    placeholder="First name"
                                    className="form-control mb-1"
                                />
                            </div>
                            <div className="col-lg-6 col-sm-12 form-group">
                                <label className="label fw-bold text-secondary">
                                    Last Name
                                </label>
                                <input
                                    value={formInfo.lname}
                                    onChange={(e) => setFormInfo({lname: e.target.value})}
                                    type="text"
                                    id="lname"
                                    name="lastname"
                                    placeholder="Last name"
                                    className="form-control mb-1"
                                />
                            </div>
                            <div className="col-12 form-group">
                                 <label className="label fw-bold text-secondary">
                                    Email
                                </label>
                                <input
                                    value={formInfo.email}
                                    onChange={(e) => setFormInfo({email: e.target.value})}
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    className="form-control mb-1"
                                />
                            </div>
                            <div className="col-12">
                                <label className="label fw-bold text-secondary">
                                    Message
                                </label>
                                <textarea
                                    rows="7"
                                    value={formInfo.msg}
                                    onChange={(e) => setFormInfo({msg: e.target.value})}
                                    className="form-control mb-1"
                                    placeholder="Your Message"
                                    name="message"
                                    id="message"
                                ></textarea>
                            </div>

                            <div className="col-12 text-center">
                                <input type="submit" value="Send" className="btn btn-primary" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
