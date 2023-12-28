import {Routes, Route} from 'react-router-dom'
import { PrivateRouter } from './PrivateRouter'
import { Authentication } from '../Pages/Authentication'
import { PrivatePage } from '../Pages/PrivatePage'
import { Home } from '../Pages/Home'

export const AllRouters = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
        <Route path='/private' element={<PrivateRouter><PrivatePage /></PrivateRouter>}></Route>
        <Route path='/login' element={<Authentication visit={"login"} />}></Route>
        <Route path='/signup' element={<Authentication visit={"signup"} />}></Route>
    </Routes>
  )
}
