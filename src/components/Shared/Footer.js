import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import footerIcon from '../../images/footer-icon.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='mt-20'>
            <footer className="footer p-10 text-base-content">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="hover:text-blue-400 cursor-pointer">Veterinarian</a>
                    <a className="hover:text-blue-400 cursor-pointer">Grooming</a>
                    <a className="hover:text-blue-400 cursor-pointer">Adoption</a>
                    <a className="hover:text-blue-400 cursor-pointer">Agility</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="hover:text-blue-400 cursor-pointer">About us</a>
                    <a className="hover:text-blue-400 cursor-pointer">Contact</a>
                    <a className="hover:text-blue-400 cursor-pointer">Jobs</a>
                    <a className="hover:text-blue-400 cursor-pointer">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="hover:text-blue-400 cursor-pointer">Terms of use</a>
                    <a className="hover:text-blue-400 cursor-pointer">Privacy policy</a>
                    <a className="hover:text-blue-400 cursor-pointer">Cookie policy</a>
                </div>
            </footer>
            <footer className="footer px-10 py-4 text-base-content border-base-300">
                <div className="items-center grid-flow-col">
                    <img src={footerIcon} alt="" className='w-10' data-aos="fade-right"
                        data-aos-duration="1500"/>
                    <p><span className='text-xl font-bold' data-aos="fade-up"
                        data-aos-duration="1500">Brand Name</span><br />Providing reliable service since 1993</p>
                </div>
                <div className="md:place-self-center md:justify-self-end text-3xl">
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" data-aos="zoom-in"
                            data-aos-duration="1500">
                            <FontAwesomeIcon icon={faFacebook} className='hover:rotate-45 duration-300'/>
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" data-aos="zoom-in"
                            data-aos-duration="1500">
                            <FontAwesomeIcon icon={faTwitter} className='hover:rotate-45 duration-300'/>
                        </a>
                        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" data-aos="zoom-in"
                            data-aos-duration="1500">
                            <FontAwesomeIcon icon={faLinkedin} className='hover:rotate-45 duration-300'/>
                        </a>
                        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" data-aos="zoom-in"
                            data-aos-duration="1500">
                            <FontAwesomeIcon icon={faInstagram} className='hover:rotate-45 duration-300' />
                        </a>
                    </div>
                </div>
            </footer>
            {/* copyright section  */}
            <div className='text-center py-10'>
                <p>Copyright © {currentYear} - All right reserved by Brand Name</p>
            </div>
        </div>
    );
};

export default Footer;