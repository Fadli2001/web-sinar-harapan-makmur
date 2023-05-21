import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false)
    const navigate = useNavigate()
    const login = () => {
        setIsLogin(true)
        navigate('/admin/beranda')
    }

    const logout = () => {
        setIsLogin(false)
        navigate('/login')
    }
    return <AuthContext.Provider value={{ isLogin, login, logout }}>{children}</AuthContext.Provider>
}