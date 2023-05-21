import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/UseAuth"
import { useState } from "react"

const useLogin = () => {
    const {login} = useAuth()
    const [userCred, setUserCred] = useState({username: '', password: ''})

    const handleInputChange = (key, value) => {
        userCred[key] = value;
        setUserCred({...userCred})
    }

    const handleLogin = () => {
            login()
    }

    return {
        userCred,
        handleInputChange,
        handleLogin
    }
}

export default useLogin