import React from 'react';
import './App.css';
import WeatherContainer from "./components/Weather/WeatherContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import clouds from './assets/video/clouds.webm';

function App() {
  return (
    <section className="app min-vh-100" >
        <video className='videoBG' autoPlay loop muted>
            <source src={clouds} type='video/webm' />
        </video>
        <Container >
                <WeatherContainer/>
        </Container>

    </section>
  );
}

export default App;
