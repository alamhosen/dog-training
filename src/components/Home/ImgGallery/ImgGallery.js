import React, { useEffect, useState } from 'react';
import Image from './Image';
import ImgModal from './ImgModal';

const ImgGallery = () => {
    const [images, setImages] = useState([]);
    const [imgModal, setImgModal] = useState(null)

    useEffect( () =>{
        fetch("galleryimg.json")
        .then(res => res.json())
        .then(data => setImages(data))
    }, [])
    return (
        <div className='mx-12 my-20'>
            <h2 className='text-center text-4xl font-bold'>OUR GALLERY</h2>
            <div className='lg:columns-3 md:columns-2 sm:columns-1 pt-10'>
                {
                    images.map(image => <Image
                    key={image._id}
                    image={image}
                    setImgModal={setImgModal}
                    ></Image>)
                }
            </div>
            {
               imgModal && <ImgModal imgModal={imgModal}></ImgModal> 
            }
        </div>
    );
};

export default ImgGallery;