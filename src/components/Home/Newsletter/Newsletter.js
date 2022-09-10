import React from 'react';
import dogNewsletter from '../../../images/newsletter.png'

const Newsletter = () => {
    return (
        <div className='my-20 bg-blue-300'>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2 items-center justify-items-center p-8'>
                <div>
                    <img className='h-96' src={dogNewsletter} alt="" data-aos="zoom-in"
                        data-aos-duration="1500" />
                </div>
                <div>
                    <h2 className='text-3xl' data-aos="fade-left"
                        data-aos-duration="1500">Subscribe to our newsletter</h2>
                    <p className='text-xl py-4' data-aos="fade-right"
                        data-aos-duration="1500">We send e-mails once a month, we never send Spam!</p>
                    <div className='flex items-center justify-items-center' data-aos="fade-up"
                        data-aos-duration="1500">
                        <input type="text" placeholder="Email" className="input w-full max-w-xs rounded-none" />
                        <button className='btn btn-primary rounded-none'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;