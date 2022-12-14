import React, { useEffect, useState } from 'react';
import dog_care from '../../../images/dog-care.jpg'
import Choice from './Choice';

const Choose = () => {
    const [choose, setChoose] = useState([]);
    useEffect(() => {
        fetch("choose.json")
            .then(res => res.json())
            .then(data => setChoose(data))
    }, [])
    return (
        <div className='mx-12 my-20 w-auto'>
            <div className='text-center my-6'>
                <h3 className='mb-4 text-xl' data-aos="fade-left"
                    data-aos-duration="1500">WHY PEOPLE</h3>
                <h2 className='text-3xl lg:text-4xl md:text-3xl font-bold' data-aos="fade-up"
                    data-aos-duration="1000">CHOOSE US</h2>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5 justify-center justify-items-center items-center'>
                <div>
                    <img className='my-8 rounded-lg' src={dog_care} alt="" data-aos="zoom-in"
                        data-aos-duration="1500" />
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1'>
                    {
                        choose.map(choice => <Choice
                            key={choice._id}
                            choice={choice}
                        ></Choice>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Choose;