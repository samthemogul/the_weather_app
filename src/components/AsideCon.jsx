import { useState } from 'react'
import './AsideCon.css'
import Top from './Top/Top'
import Sidebar from './Sidebar/Sidebar'
import Theme from './Theme/Theme'


function AsideCon() {
    return (
        <aside>
            < Top />
            < Sidebar />
            < Theme />
        </aside>
  )
}

export default AsideCon
