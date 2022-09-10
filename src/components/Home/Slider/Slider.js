import React from 'react';
import slider_1 from '../../../images/dog-slider-7.jpg'

const Slider = () => {
    return (
            <div className="carousel">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={slider_1} className="w-full" />

                    <div className='absolute flex justify-center items-center left-0 right-0 top-1/4 lg:top-1/2 md:top-1/3 mb-5'>
                       <div className='text-white text-center'>
                        <p className='lg:text-4xl md:text-3xl '>Trusted By Thousands of</p>
                        <h2 className='text-xl lg:text-5xl md:text-4xl font-bold py-3'>Dogs and Their Owners</h2>
                        <p className='lg:text-2xl md:text-xl mb-3'>We offer the best services for your pets, contact us today and book a service</p>
                       <a href='' className="btn btn-primary btn-sm sm:btn-sm md:btn-md lg:btn-md lg:text-xl md:text-sm text-sm hover:text-white text-white border-none rounded-none lg:rounded-lg md:rounded-md">Contact Us</a>
                       </div>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/sjrMC3B/dog-slider-2.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/6Fv3gfJ/dog-slider-3.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/xFj96J7/dog-slider-1.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/hKnjSKj/dog-slider-4.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide6" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/CKx3fdQ/dog-slider-6.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide5" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
    );
};

export default Slider;
