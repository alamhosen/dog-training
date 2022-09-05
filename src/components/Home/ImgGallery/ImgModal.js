import React from 'react';

const ImgModal = ({ imgModal }) => {
    return (
        <div>

            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="gallery-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box w-7/12 max-w-4xl">
                <label for="gallery-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <img src={imgModal.img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ImgModal;