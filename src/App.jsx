
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import './App.css'

import CreateUser from './CreateUser'

export default function App() {
  return (
    <main>
      home page
      <Routes>
        <Route path='/create' element={<CreateUser/>} />
      </Routes>
    </main>
  )
}



  
