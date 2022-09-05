import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className='my-20 mx-12'>
            <div className='text-center'>
            <h3 className='mb-4 text-xl'>WHAT WE OFFER</h3>
            <h2 className='text-4xl font-bold'>OUR SERVICES</h2>
            <p className='text-xl my-4 pb-6'>We offer quick and easy services for cats and dogs. We take care of your best friend.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-10'>
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