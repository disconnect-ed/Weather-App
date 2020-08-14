import React, {ChangeEvent} from 'react';
import {Button, FormControl} from "react-bootstrap";

type SearchPropsType = {
    onChange: (e: ChangeEvent) => void
    onClick: () => void
    cityName: string
    onKeyPress: (e: React.KeyboardEvent) => void
}

export const Search: React.FC<SearchPropsType> = React.memo(function Search({onChange, onClick, cityName, onKeyPress}) {

    return (
        <div className='col-12' >
            <div className="search">
                <div className="form-group row">
                    <h2>Your city:</h2>
                    <div className="col-md-10 col-9 p-0">
                        <FormControl
                            onChange={(e) => onChange(e)} onKeyPress={(e: React.KeyboardEvent) => onKeyPress(e)} value={cityName} type="text"
                        />
                    </div>
                    <div className="col-md-2 col-3 p-0">
                        <Button variant='primary' onClick={onClick}  >Search</Button>
                    </div>
                </div>
            </div>
        </div>
    )
})