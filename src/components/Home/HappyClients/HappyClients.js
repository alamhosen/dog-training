import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../../styles.css";

// import required modules
import { Pagination } from "swiper";

const HappyClients = () => {
    const [clients, setClients] = useState([]);
    useEffect(() => {
        fetch("happyclients.json")
            .then(res => res.json())
            .then(data => setClients(data))
    }, [])
    return (
        <div className='my-20 mx-12'>
            <h2 className='text-4xl font-bold text-center mb-10'>WHAT OUR CLIENTS SAY</h2>
            <>
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        clients.map(client => (<SwiperSlide
                            key={client._id}
                        >
                            <div class="card w-full lg:w-9/12 md:w-full sm:w-full">
                                <div class="card-body flex items-center justify-center">
                                    <div className='w-48'><img className='rounded-full w-7' src={client.img} alt={client.name} /></div>
                                    <h2 class="text-2xl font-bold my-5">{client.name}</h2>
                                    <p className='mb-5 text-center'>{client.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>))
                    }
                </Swiper>
            </>
        </div>
    );
};

export default HappyClients;