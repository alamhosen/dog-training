import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faInstagramSquare, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"
import "../../../styles.css";
// import required modules

const Team = () => {
    const [team, setTeam] = useState([]);
    useEffect(() => {
        fetch("team.json")
            .then(res => res.json())
            .then(data => setTeam(data))
    }, [])

    return (
        <div className='mx-12 mb-10'>
            <h2 className='text-4xl font-bold text-center mb-10'>MEET OUR TEAM</h2>

            <>
                <Swiper
                    autoplay={
                        {delay:2500,
                        }
                    }
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1280: {
                            slidesPerView: 3,
                            spaceBetween: 25,
                        },
                    }}
                >
                    <div className=''>
                        {
                            team.map(person => (<SwiperSlide
                                key={person._id}>
                                <div class="card w-11/12 bg-base-100 shadow-xl">
                                    <div class="card-body">
                                        <img className='rounded-full' src={person.img} alt={person.name} />
                                        <h2 class="text-center text-2xl font-bold">{person.name}</h2>
                                        <h4 className='text-blue-500'>{person.title}</h4>
                                        <p>{person.description}</p>
                                        <div className='flex items-center justify-center mb-4'>
                                        <div className='mr-3 hover:text-blue-500'>
                                           <a href={person.facebook} target="_blank" rel="noopener noreferrer">
                                           <FontAwesomeIcon icon={faFacebookSquare} />
                                           </a>
                                            </div>
                                        <div className='mr-3 hover:text-blue-500'>
                                        <a href={person.twitter} target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faTwitterSquare} />
                                        </a>
                                        </div>
                                        <div className='mr-3 hover:text-blue-500'>
                                            <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                                            <FontAwesomeIcon icon={faLinkedinIn} />
                                            </a>
                                            </div>
                                        <div className='hover:text-blue-500'>
                                            <a href={person.instagram}><FontAwesomeIcon icon={faInstagramSquare} /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>))
                        }
                    </div>
                </Swiper>
            </>
        </div>
    );
};

export default Team;