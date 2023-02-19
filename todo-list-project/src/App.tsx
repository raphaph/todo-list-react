import { Header } from './components/Header'
import { Mytasks } from './components/Mytasks'
import { NewTask } from './components/InputTask'
import { Tasks } from './components/Tasks'

import './global.css'


export function App() {


  return (
    <div className="wrapper">
      <Header />
      <NewTask />
      <Mytasks />
    </div>
  )
}


