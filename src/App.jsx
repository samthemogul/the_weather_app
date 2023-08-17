import { useState } from 'react'
import './App.css'

import AsideCon from './components/AsideCon'
import MainCon from './components/MainCon'
import SubCon from './components/SubCon'

function App() {
  return (
      <div className='container'>
        < AsideCon />
        < MainCon />
        < SubCon />
      </div>
  )
}

export default App
