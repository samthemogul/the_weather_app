import { useState } from 'react'
import axios from 'axios';
import './SubCon.css'


function SubCon() {

    return (
        <div className="subb-con">
        <p className="faint-text sub-header">7-day Forecast</p>
        <div className="weekdays-forecast-container">
            <div className="weekday-forecast-con">
                <h3>Today</h3>
                <div className="state-weather">
                    <img src="/sunny.png" alt=""/>
                    <h3>Sunny</h3>
                </div>
                <h3>0°C</h3>
            </div>
            <div className="stroke-vertical"></div>
            <div className="weekday-forecast-con">
                <h3>Tue</h3>
                <div className="state-weather">
                    <img src="/rainy.png" alt=""/>
                    <h3>Rainy</h3>
                </div>
                <h3>20°C</h3>
            </div>
            <div className="stroke-vertical"></div>
            <div className="weekday-forecast-con">
                <h3>Wed</h3>
                <div className="state-weather">
                    <img src="/cloudy-day.png" alt=""/>
                    <h3>Fair</h3>
                </div>
                <h3>25°C</h3>
            </div>
            <div className="stroke-vertical"></div>
            <div className="weekday-forecast-con">
                <h3>Thur</h3>
                <div className="state-weather">
                    <img src="/cloudy-day.png" alt=""/>
                    <h3>Fair</h3>
                </div>
                <h3>25°C</h3>
            </div>
            <div className="stroke-vertical"></div>
            <div className="weekday-forecast-con">
                <h3>Fri</h3>
                <div className="state-weather">
                    <img src="/stormy.png" alt=""/>
                    <h3>Stormy</h3>
                </div>
                <h3>22°C</h3>
            </div>
            <div className="stroke-vertical"></div>
            <div className="weekday-forecast-con">
                <h3>Sat</h3>
                <div className="state-weather">
                    <img src="/sunny.png" alt=""/>
                    <h3>Sunny</h3>
                </div>
                <h3>30°C</h3>
            </div>
            <div className="stroke-vertical"></div>
            <div className="weekday-forecast-con">
                <h3>Sun</h3>
                <div className="state-weather">
                    <img src="/cloudy-day.png" alt=""/>
                    <h3>Fair</h3>
                </div>
                <h3>25°C</h3>
            </div>
            <div className="stroke-vertical"></div>
        </div>

    </div>
  )
}

export default SubCon
