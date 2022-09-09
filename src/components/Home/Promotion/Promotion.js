import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "../../../styles.css";

import { Pagination } from "swiper";

const Promotion = () => {
    const [offers, setOffers] = useState([]);
    useEffect(() => {
        fetch("promotion.json")
            .then(res => res.json())
            .then(data => setOffers(data))
    }, [])
    return (
        <div className='bg-blue-300 py-10'>
            <h2 className='text-3xl lg:text-4xl md:text-3xl font-bold text-center mb-5 text-white' data-aos="fade-up"
                data-aos-duration="1500">THIS MONTH'S OFFERS</h2>

            <>
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper "
                >
                    <div className=''>
                        {
                            offers.map(offer => <SwiperSlide
                                key={offer._id}
                            >
                                <div class="card bg-blue-300 rounded-none">
                                    <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-col-1'>
                                        <div className=''>
                                            <img src={offer.img} alt="" className='h-25' />
                                        </div>
                                        <div class="card-body mb-4 col-span-2">
                                            <div className='flex justify-center items-center py-3'>
                                                <h2 class="text-center text-2xl lg:text-3xl md:text-3xl mr-3" data-aos="fade-right"
                                                data-aos-duration="1500">{offer.name}</h2>
                                                <button className='btn btn-primary text-2xl' data-aos="fade-left"
                                                data-aos-duration="1500">{offer.off}% OFF</button>
                                            </div>
                                            <p className='text-xl' data-aos="fade-up"
                                                data-aos-duration="1500">{offer.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>)
                        }
                    </div>


                </Swiper>
            </>
        </div>
    );
};

export default Promotion;