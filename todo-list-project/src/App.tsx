import { Header } from './components/Header'
import { Mytasks } from './components/Mytasks'
import { Tasks } from './components/Tasks'

import './global.css'
import { useState } from 'react'


export function App() {

  return (
    <div className="wrapper">
      <Header />
      <Mytasks />
    </div>
  )
}


