import React from 'react';

const Choice = ({ choice }) => {
    const { name, description, img } = choice
    return (
            <div class="card bg-base-100 hover:bg-blue-100 duration-300" data-aos="fade-up"
                data-aos-duration="1000">
                <div class="card-body">
                    <img className='w-20' src={img} alt={name} />
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
    );
};

export default Choice;