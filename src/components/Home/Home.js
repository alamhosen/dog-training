import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import Choose from './ChooseUs/Choose';
import HappyClients from './HappyClients/HappyClients';
import ImgGallery from './ImgGallery/ImgGallery';
import Services from './Services/Services';
import Slider from './Slider/Slider';
import Team from './Team/Team';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <Choose></Choose>
            <Team></Team>
            <ImgGallery></ImgGallery>
            <HappyClients></HappyClients>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;