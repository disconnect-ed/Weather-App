import React from 'react';
import {Button, FormControl} from "react-bootstrap";

const Search = (props) => {

    let newCity = React.createRef();

    let onChange = () => {
        let text = newCity.current.value;
        props.updateCityName(text);
    }

    // let onKeyPress = (event) => {
    //     let text = newCity.current.value;
    //     if(event.key === 13){
    //         props.updateCityName(text);
    //     }
    // }

    let onClick = () => {
        props.getWeather(props.cityName)
    }

    return (
        <div className='col-12' >
            <div className="search">
                <div className="form-group row">
                    <h2>Your city:</h2>
                    <div className="col-10 p-0">
                        <FormControl
                            onChange={onChange} value={props.cityName} ref={newCity} type="text"
                        />
                    </div>
                    <div className="col-2 p-0">
                        <Button variant='primary' onClick={onClick}  >Search</Button>
                    </div>

                </div>

                {/*<input onChange={onChange} value={props.cityName} ref={newCity} type="text"/>*/}

            </div>
        </div>
    )
}

export default Search;