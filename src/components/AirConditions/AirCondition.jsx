import { useState } from 'react'
import './AirCondition.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureThreeQuarters } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faGauge } from '@fortawesome/free-solid-svg-icons'
import { faCloudSun } from '@fortawesome/free-solid-svg-icons'
import { faShower } from '@fortawesome/free-solid-svg-icons'
import { faDroplet } from '@fortawesome/free-solid-svg-icons'



function AirCondition(props) {
    return (
        <div className="info-con">
                    <p className="faint-text sub-header">Air Conditions</p>
                    <div className="air-conditioner-info">
                        <div className="air-con">
                            <div className="head-air">
                            <FontAwesomeIcon className='span' icon={faTemperatureThreeQuarters} />
                                <h3>Feels like</h3>
                            </div>
                            <h1 className="air-value">{props.feel}°C</h1>
                        </div>
                        <div className="air-con">
                            <div className="head-air">
                            <FontAwesomeIcon className='span' icon={faSun} />
                                <h3>UV Index</h3>
                            </div>
                            <h1 className="air-value">3</h1>
                        </div>
                        <div className="air-con">
                            <div className="head-air">
                            <FontAwesomeIcon className='span' icon={faWind} />
                                <h3>Wind</h3>
                            </div>
                            <h1 className="air-value">{props.speed}km/h</h1>
                        </div>
                        <div className="air-con">
                            <div className="head-air">
                            <FontAwesomeIcon className='span' icon={faEye} />
                                <h3>Visibility</h3>
                            </div>
                            <h1 className="air-value">{Math.round(props.visibility /3281)}km</h1>
                        </div>
                        <div className="air-con">
                            <div className="head-air">
                            <FontAwesomeIcon className='span' icon={faGauge} />
                                <h3>Pressure</h3>
                            </div>
                            <h1 className="air-value">{props.pressure}hPa</h1>
                        </div>
                        <div className="air-con">
                            <div className="head-air">
                            <FontAwesomeIcon className='span' icon={faCloudSun} />
                                <h3>Sunset</h3>
                            </div>
                            <h1 className="air-value">20:58</h1>
                        </div>
                        <div className="air-con">
                            <div className="head-air">
                            <FontAwesomeIcon className='span' icon={faShower} />
                                <h3>Humidity</h3>
                            </div>
                            <h1 className="air-value">{props.humidity}%</h1>
                        </div>
                        <div className="air-con">
                            <div className="head-air">
                            <FontAwesomeIcon className='span' icon={faDroplet} />
                                <h3>Chance of Rain</h3>
                            </div>
                            <h1 className="air-value">0%</h1>
                        </div>
                    </div>
                </div>
  )
}

export default AirCondition
