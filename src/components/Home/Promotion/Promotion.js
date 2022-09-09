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
            <h2 className='text-4xl font-bold text-center mb-5 text-white'>THIS MONTH'S OFFERS</h2>

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
                                    <div className='flex justify-center items-center px-20'>
                                        <div>
                                            <img src={offer.img} alt="" className='w-25' />
                                        </div>
                                        <div class="card-body mb-4">
                                            <div className='flex justify-center items-center py-3'>
                                                <h2 class="text-center text-3xl mr-3">{offer.name}</h2>
                                                <button className='btn btn-primary text-2xl'>{offer.off}% OFF</button>
                                            </div>
                                            <p className='text-xl'>{offer.description}</p>
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