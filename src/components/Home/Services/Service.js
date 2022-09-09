import React from 'react';

const Service = ({ service }) => {
    const { name, description, img } = service;
    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl" data-aos="fade-up"
                data-aos-duration="1000">
                <figure><img src={img} alt={name} /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>
                    <div class="card-actions justify-center pt-3">
                        <button class="btn btn-sm sm:btn-sm md:btn-md lg:btn-wide btn-outline btn-primary">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;