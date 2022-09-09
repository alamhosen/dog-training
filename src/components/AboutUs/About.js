import React from 'react';

const About = ({ about }) => {
    const { name, description, img } = about;
    return (
        <div>
            <div class="card">
                <div class="card-body">
                    <img src={img} alt={name} className='w-24' />
                    <h2 class="card-title my-4">{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default About;