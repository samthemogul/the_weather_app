import { useState } from 'react'
import './MainInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'



function MainInfo(props) {
    return (
        <div className="main-info">
                    <div className="info-text">
                        <h1>{props.city}</h1>
                        <h3>Chance of rain: 0%</h3>
                        <h1 className="temp">{props.temperature}°C</h1>
                    </div>
                    <div className="weather-visual">
                        <img src={props.picture} />
                    </div>
                </div>
  )
}

export default MainInfo