import React from 'react';

const Service = ({ service }) => {
    const { name, description, img } = service;
    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl" data-aos="fade-up"
                data-aos-duration="1000">
                <figure><img src={img} alt={name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-center pt-3">
                        <button className="btn btn-outline lg:px-10 btn-primary">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;