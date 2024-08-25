import React from "react";

function avatar({imgSrc  }) {
    return (
        <div>
            
            <img src={imgSrc} className="h-64 w-64 bg-no-repeat bg-cover object-cover hover:rotate-1 rounded-full   " alt="" />
        </div>
    );
}
export default avatar;