import React from "react";
import preload from '../../assets/preloader/preloader.svg'

const Preload = (props) => {
    return (
        <div className="col-4">
            <img src={preload} alt=""/>
        </div>
    )
}

export default Preload;