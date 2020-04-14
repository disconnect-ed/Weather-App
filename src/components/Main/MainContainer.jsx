import React from 'react';
import Main from "./Main";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class MainContainer extends React.Component {



    render() {

        return (
            <>
                <Main
                    weatherDataCity={this.props.weatherDataCity}
                    mainWeather={this.props.mainWeather}
                    isLoading={this.props.isLoading}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        mainWeather: state.weather.mainWeather,
        weatherDataCity: state.weather.weatherDataCity,
        isLoading: state.weather.isLoading,
    }
}

export default connect(mapStateToProps)(MainContainer)