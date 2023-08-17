import { useState } from 'react'
import './Links.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud } from '@fortawesome/free-solid-svg-icons'
import { faCity } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'


function Links() {
    return (
        <div className="sidebar">
                    <a className="active" href="">
                        <span>
                            <FontAwesomeIcon className='i' icon={faCloud} />
                            <h3>Weather</h3>
                        </span>
                    </a>
                    <a href="">
                        <span>
                            <FontAwesomeIcon className='i' icon={faCity} />
                            <h3>Cities</h3>
                        </span>
                    </a>
                    <a href="">
                        <span>
                            <FontAwesomeIcon className='i' icon={faLocationDot} />
                            <h3>Map</h3>
                        </span>
                    </a>
                    <a href="">
                        <span>
                            <FontAwesomeIcon className='i' icon={faGear} />
                            <h3>Settings</h3>
                        </span>
                    </a>
                    <a href="">
                        <span>
                            <FontAwesomeIcon className='i' icon={faUser} /> 
                            <h3>Account</h3>
                        </span>
                    </a>
                </div>
  )
}

export default Links
