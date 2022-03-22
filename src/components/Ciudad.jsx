import React from "react";
import { Link } from 'react-router-dom'
import './Card.css'
import './About.css'

export default function Ciudad({city}) {
    return (
        <div className="ciudad">
                <div className="form">
                    <h2 className="city">{city.name}</h2>
                    <div className="info">
                        <div className="city">Temperature: {city.temp} ºC</div>
                        <div className="city">{city.weather}</div>
                        <div className="city">Wind: {city.wind} km/h</div>
                        <div className="city">Clouds: {city.clouds}</div>
                        <div className="city">Latitude: {city.latitud}º</div>
                        <div className="city">Longitude: {city.longitud}º</div>
                        <Link to="/"><button className="buttonBack">Go back</button></Link>
                    </div>
            </div>
        </div>
    )
}