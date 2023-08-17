import { useState } from 'react'
import './Theme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'



function Theme() {
    return (
        <div className="toggle-button">
                    <div className="toggle-main">
                    <FontAwesomeIcon className='span active' icon={faMoon} />
                    <FontAwesomeIcon className='span' icon={faSun} />
                    </div>
                </div>
  )
}

export default Theme
