import { useSelector } from "react-redux/es/hooks/useSelector"
import { Outlet,Navigate } from "react-router-dom"

export default function PrivateRouter() {
    const {currentUser}=useSelector((state)=>state.user)
  return currentUser? <Outlet/>:<Navigate to='/sign-in'/>
}
