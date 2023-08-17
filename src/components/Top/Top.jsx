import { useState } from 'react'
import './Top.css'

function Top() {
    return (
        <div className="top">
                    <div className="logo">
                        <img src="/weather-logo.png" alt="" />
                        <h2>The <span className="cold">Weather</span></h2>
                    </div>
                    <div className="close" id="close-btn">
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                </div>
  )
}

export default Top
