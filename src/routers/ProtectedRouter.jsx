import { Children } from "react"
import { useAuth } from "../hooks/UseAuth"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = () => {
    const {isLogin} = useAuth()
    return isLogin ? <Outlet/> : <Navigate to ='/login'/> 
}

export default ProtectedRoute