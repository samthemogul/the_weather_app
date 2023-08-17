import { useState } from 'react'
import './Searchbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'



function Searchbar({onSearchChange, setChange, checkEnter}) {
    return (
        <div className="search-bar">
                    <input className="city-search" type="text" placeholder="Search for cities..." onChange={onSearchChange} onKeyPress={checkEnter} />
                    <FontAwesomeIcon className='span search' icon={faMagnifyingGlass} onClick={setChange} />
                </div>
  )
}

export default Searchbar
