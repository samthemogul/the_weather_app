import { useState } from 'react'
import './TimeForecast.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'



function TimeForecast(props) {
    return (
        <div className="info-con">
                    <p className="faint-text sub-header">Tomorrow's Forecast</p>
                    <div className="time-weather">
                        <div className="time-weather-info border">
                            <h3>6:00AM</h3>
                            <img src={props.pictures[0]} alt=""/>
                            <h3>{props.first}°C</h3>
                        </div>
                        <div className="stroke"></div>
                        <div className="time-weather-info border">
                            <h3>9:00AM</h3>
                            <img src={props.pictures[1]} alt=""/>
                            <h3>{props.second}°C</h3>
                        </div>
                        <div className="stroke"></div>
                        <div className="time-weather-info border">
                            <h3>12:00PM</h3>
                            <img src={props.pictures[2]} alt=""/>
                            <h3>{props.third}°C</h3>
                        </div>
                        <div className="stroke"></div>
                        <div className="time-weather-info border">
                            <h3>3:00PM</h3>
                            <img src={props.pictures[3]} alt=""/>
                            <h3>{props.fourth}°C</h3>
                        </div>
                        <div className="stroke"></div>
                        <div className="time-weather-info border">
                            <h3>6:00PM</h3>
                            <img src={props.pictures[4]} alt=""/>
                            <h3>{props.fifth}°C</h3>
                        </div>
                        <div className="stroke"></div>
                        <div className="time-weather-info border">
                            <h3>9:00PM</h3>
                            <img src={props.pictures[5]} alt=""/>
                            <h3>{props.sixth}°C</h3>
                        </div>
                        
                    </div>
                </div>
  )
}

export default TimeForecast
