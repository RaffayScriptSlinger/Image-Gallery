import React from "react";

function avatar({imgSrc  }) {
    return (
        <div>
            
            <img src={imgSrc} className="max-w-50 max-h-50  scroll-ml-6 hover:rotate-1 rounded-full   " alt="" />
        </div>
    );
}
export default avatar;