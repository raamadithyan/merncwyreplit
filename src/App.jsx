
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import './App.css'
import Users from './Users'
import CreateUser from './CreateUser'

import UpdateUser from './UpdateUser'

export default function App() {
  return (
    <main>
      PUSHED FROM MOBILE
      <Routes>
        <Route path='/' element={<Users />}></Route>
        <Route path='/create' element={<CreateUser />}></Route>
        <Route path='/update' element={<UpdateUser />}></Route>
        </Routes>
    </main>
  )
}
 

  
