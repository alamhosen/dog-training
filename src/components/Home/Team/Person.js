import React from 'react';
import { SwiperSlide } from "swiper/react";

const Person = ({ person }) => {
    const { name, title, description, img } = person;
    return (
        <div>
            <SwiperSlide>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

        </div>
    );
};

export default Person;