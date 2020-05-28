import React from 'react';
import {Button, FormControl} from "react-bootstrap";

const Search = React.memo(function Search(props) {

    let newCity = React.createRef();

    let onChange = () => {
        let text = newCity.current.value;
        props.updateCityName(text);
    }

    let onClick = () => {
        props.getWeather(props.cityName)
    }

    return (
        <div className='col-12' >
            <div className="search">
                <div className="form-group row">
                    <h2>Your city:</h2>
                    <div className="col-md-10 col-9 p-0">
                        <FormControl
                            onChange={onChange} value={props.cityName} ref={newCity} type="text"
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

export default Search;