import React from 'react';
import {Table} from "react-bootstrap";
import Select from "./Select";
import {connect} from "react-redux";
import Preload from "../common/Preload";

class SelectContainer extends React.Component {

    render() {

        if (this.props.weatherDataList == null || this.props.isLoading === true) return (
            <div className='d-flex align-items-center justify-content-center select-preloader' ><Preload/></div>
        )

        if (this.props.isError === false) {
            return (
                <>
                    <div className='select'>
                        <Table responsive>
                            <thead>
                            <tr>
                                <th>Date</th>
                                <th className='column-none'>Weather</th>
                                <th>Temperature</th>
                            </tr>
                            </thead>
                            <tbody>
                            <Select isLoading={this.props.isLoading} selectWeather={this.props.selectWeather} weatherDataList={this.props.weatherDataList} />
                            </tbody>
                        </Table>
                    </div>
                </>
            )
        } else {
            return null
        }
    }
}

let mapStateToProps = (state) => {
    return {
        isLoading: state.weather.isLoading,
        isError: state.weather.isError,
    }
}

export default connect(mapStateToProps)(SelectContainer);