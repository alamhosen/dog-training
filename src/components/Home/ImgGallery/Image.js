import React from 'react';

const Image = ({ image, setImgModal }) => {
    const { _id, img } = image;
    return (
        <div>
            <div className="w-full bg-base-100">
                <div className="pt-4">
                    <label htmlFor="gallery-modal" style={{cursor:"pointer"}} className="" onClick={() => setImgModal(image)} > <img htmlFor="gallery-modal" onClick={() => setImgModal(image)} src={img} alt="" /></label>
                </div>
            </div>
        </div>
    );
};

export default Image;