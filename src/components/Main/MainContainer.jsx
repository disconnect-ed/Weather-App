import React from 'react';
import Main from "./Main";
import {connect} from "react-redux";
import Error from "../common/Error";

class MainContainer extends React.Component {


    render() {
        if (this.props.isError === false) {
            return (
                <>
                    <Main
                        weatherDataCity={this.props.weatherDataCity}
                        mainWeather={this.props.mainWeather}
                        isLoading={this.props.isLoading}
                    />
                </>
            )
        } else {
            return (
                <>
                    <Error/>
                </>
            )
        }
    }
}

let mapStateToProps = (state) => {
    return {
        mainWeather: state.weather.mainWeather,
        weatherDataCity: state.weather.weatherDataCity,
        isLoading: state.weather.isLoading,
        isError: state.weather.isError,
    }
}

export default connect(mapStateToProps)(MainContainer)