import React from 'react';

const Choice = ({ choice }) => {
    const { name, description, img } = choice
    return (
        <div>
            <div class="card bg-base-100">      
                <div class="card-body">
                <img className='w-20' src={img} alt={name} />
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Choice;