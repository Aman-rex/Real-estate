import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from"./pages/Home"
import About from './pages/About'
import SignUp from './pages/SignUp'
import Signin from './pages/Signin'
import Profile from './pages/Profile'
import Header from './components/Header'
import CreateListing from './pages/createListing'
import PrivateRouter from './components/PrivateRouter'
export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sign-in' element={<Signin/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/about' element={<About/>}/>
      <Route element={<PrivateRouter/>}>
         <Route path='/profile' element={<Profile/>}/>
         <Route path='/create-listing' element={<CreateListing/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}
