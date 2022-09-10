import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-20 mx-12 w-auto' id='services'>
                <h3 className='mb-4 text-xl text-center' data-aos="fade-left"
                    data-aos-duration="1500">WHAT WE OFFER</h3>
                <h2 className='text-3xl lg:text-4xl md:text-3xl font-bold text-center' data-aos="fade-up"
                    data-aos-duration="1000">OUR SERVICES</h2>
                <p className='text-xl my-4 pb-6 text-center' data-aos="fade-right"
                  data-aos-duration="1000">We offer quick and easy services for cats and dogs. We take care of your best friend.</p>
            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-10 mt-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;