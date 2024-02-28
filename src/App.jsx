
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import './App.css'

import CreateUser from './CreateUser'

export default function App() {
  return (
    <main>
      PUSHED FROM MOBILE
      <Routes>
        <Route path='/create' element={<CreateUser/>} />
      </Routes>
    </main>
  )
}



  
