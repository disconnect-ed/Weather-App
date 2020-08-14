import React from 'react'
import {SelectContainer} from "../Select/SelectContainer";
import {MainContainer} from "../Main/MainContainer";
import {SearchContainer} from "../Search/SearchContainer";

export const Weather = () => {

    return (
        <div className='row flex-wrap-reverse min-vh-100' >
            <div className="col-lg-6 col-12 d-flex align-items-center justify-content-center pt-lg-0 pb-lg-0 pt-5 pb-5">
                <div className="d-flex flex-column ">
                    <div>
                        <MainContainer/>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-12 d-flex align-items-center pt-lg-0 pt-5">
                <div className="d-flex flex-column m-auto">
                    <div>
                        <SearchContainer/>
                    </div>
                    <div>
                        <SelectContainer/>
                    </div>
                </div>
            </div>
        </div>

    )
}