import React, { useEffect, useState } from 'react';
import about from '../../images/about.jpg'
import About from './About';

const AboutUs = () => {
    const [abouts, setAbouts] = useState([]);
    useEffect(() => {
        fetch("about.json")
            .then(res => res.json())
            .then(data => setAbouts(data))
    }, [])
    return (
        <div className='mb-10 mx-12' id='about'>
            <h1 className='text-3xl lg:text-4xl md:text-3xl font-bold text-center' data-aos="fade-up"
                data-aos-duration="1500">About US</h1>
            {/* message start */}

                <div class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4 my-10">
                    <div className='lg:order-last md:order-last'>
                    <img src={about} class="rounded-lg" data-aos="zoom-in"
                        data-aos-duration="1500" />
                    </div>
                    <div className='pr-2 lg:mt-24'>
                        <h1 class="text-3xl font-bold" data-aos="fade-up"
                            data-aos-duration="1500">We take care of your best friend</h1>
                        <p class="py-6" data-aos="fade-up"
                            data-aos-duration="1500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aperiam earum excepturi voluptatum aspernatur ullam minima delectus doloribus modi sapiente, odit unde placeat aut quos eos magnam voluptates obcaecati vel?</p> <br />
                        <p data-aos="fade-up"
                            data-aos-duration="1500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nostrum asperiores facere voluptatibus labore provident?</p>
                    </div>
                </div>
            {/* message end */}
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-4 items-center justify-center'>
                {
                    abouts.map(about => <About
                        key={about._id}
                        about={about}
                    ></About>)
                }
            </div>
        </div>
    );
};

export default AboutUs;