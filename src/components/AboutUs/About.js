import React from 'react';

const About = ({ about }) => {
    const { name, description, img } = about;
    return (
            <div class="card hover:bg-blue-100 my-4 duration-300">
                <div class="card-body" data-aos="fade-up"
                    data-aos-duration="1500">
                    <img src={img} alt={name} className='w-24' />
                    <h2 class="card-title my-4">{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
    );
};

export default About;