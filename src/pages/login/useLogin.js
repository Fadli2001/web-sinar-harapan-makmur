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
        // let isValidLogin = userCred.username == 'admin' && userCred.password == 'password'
        // if (isValidLogin) {
            login()
        // }
    }

    return {
        userCred,
        handleInputChange,
        handleLogin
    }
}

export default useLogin