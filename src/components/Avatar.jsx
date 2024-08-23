import React from "react";

function avatar({imgSrc  }) {
    return (
        <div>
            
            <img src={imgSrc} className="max-w-50  scroll-ml-6 hover:max-w-60 h-auto   " alt="" />
        </div>
    );
}
export default avatar;