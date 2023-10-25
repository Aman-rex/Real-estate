import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from"./pages/Home"
import About from './pages/About'
import SignUp from './pages/SignUp'
import Signin from './pages/Signin'
import Profile from './pages/Profile'
import Header from './components/Header'
import CreateListing from './pages/createListing'
import UpdateListing from './pages/UpdateListing'
import Listing from './pages/Listing'
import PrivateRouter from './components/PrivateRouter'
import Search from './pages/Search'
export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sign-in' element={<Signin/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/listing/:listingId' element={<Listing/>}/>
      <Route element={<PrivateRouter/>}>
         <Route path='/profile' element={<Profile/>}/>
         <Route path='/create-listing' element={<CreateListing/>}/>
         <Route path='/update-listing/:listingId' element={<UpdateListing/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}
