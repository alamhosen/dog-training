import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Shared/Footer';
import Choose from './ChooseUs/Choose';
import HappyClients from './HappyClients/HappyClients';
import ImgGallery from './ImgGallery/ImgGallery';
import Newsletter from './Newsletter/Newsletter';
import Promotion from './Promotion/Promotion';
import Services from './Services/Services';
import Slider from './Slider/Slider';
import Team from './Team/Team';

const Home = () => {
    return (
        <div className='w-auto'>
            <Slider></Slider>
                <Services></Services>
                <Choose></Choose>
                <AboutUs></AboutUs>
                <Team></Team>
                <Promotion></Promotion>
                <ImgGallery></ImgGallery>
                <HappyClients></HappyClients>
                <ContactUs></ContactUs>
                <Newsletter></Newsletter>
                <Footer></Footer>
        </div>
    );
};

export default Home;