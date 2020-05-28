import React from "react";

const Error = (props) => {
    return (
        <div className="col-12 text-center">
            <div>
                <h1>Ой...</h1>
                <h2>Произошла ошибка :(</h2>
                <p className='error'>{props.errorText}</p>
            </div>
        </div>
    )
}

export default Error;