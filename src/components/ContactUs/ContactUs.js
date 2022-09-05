import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-brands-svg-icons';

const ContactUs = () => {
    return (
        <div>
            <div className='mb-10 mx-12' id='contact'>
                <h1 className='text-3xl lg:text-5xl md:text-4xl font-bold text-center'>CONTACT US</h1>
                <div className="my-10">
                    <div className="grid items-center justify-center grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6">
                        <div className='lg:order-last md:order-last'>
                            <div className='text-xl mb-4'>
                            <h3 className='text-3xl mb-8'>Information</h3>
                                <p className='text-2xl'>Contact for additional information:</p>
                                <p className='my-1'> <FontAwesomeIcon icon={faEnvelope} className='mr-2' />admin@site.com</p>
                                <p><FontAwesomeIcon icon={faPhone} className='mr-2' />+1 (123) 455 5555</p>
                            </div>
                            <div className='text-xl my-10'>
                            <h3 className='text-3xl mb-8'>Location and Time</h3>
                                <p className='my-1'><FontAwesomeIcon icon={faLocationDot} className='mr-2'/>We are located at Pet City, 304.</p>
                                <p><FontAwesomeIcon icon={faClock} className='mr-2'/>Open from 9 a.m to 10 p.m on weekdays and from 9 a.m to 2 p.m in weekends.</p>
                            </div>
                        </div>
                        <div className="card lg:w-4/5 w-full shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Your Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input type="text" placeholder="Address" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea type="text" placeholder="Message" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary" data-aos="fade-up-right"
                                        data-aos-duration="900">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;