import React from 'react';

const Service = ({ service }) => {
    const { name, description, img } = service;
    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure><img src={img} alt={name} /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>
                    <div class="card-actions justify-center">
                        <button class="btn btn-wide btn-outline btn-primary">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;