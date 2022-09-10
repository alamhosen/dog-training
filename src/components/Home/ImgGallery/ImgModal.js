import React from 'react';

const ImgModal = ({ imgModal }) => {
    return (
        <div>


            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="gallery-modal" className="modal-toggle" />
            <div className="modal modal-middle">
                <div className="modal-box w-7/12 max-w-4xl">
                <label for="gallery-modal" className="btn btn-sm btn-circle absolute right-0 top-0">✕</label>
                    <img src={imgModal.img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ImgModal;