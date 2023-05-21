import { useState } from "react"
import { useAuth } from "../../hooks/UseAuth"
import { getToken, getTokenPromise } from "./loginService"

const LoginView = () => {
    const { login } = useAuth()
    const [formData, setFormData] = useState(
        {
            username: '',
            password: '',
            errPassword: '',
            isValid: false
        }
    )

    const onInputUsernameChange = (e) => {
        setFormData({
            ...formData,
            username: e.target.value
        })
    }

    const onInputPasswordChange = (e) => {
        setFormData({
            ...formData,
            password: e.target.value
        })
    }


    const onLoginSubmit = (e) => {
        e.preventDefault()
        getTokenPromise(formData)
            .then(res => {
                console.log(res.data);
                sessionStorage.setItem('token', res.data.token);
                login()
            })
            .catch(err => {
                alert('Invalid Username or Password')
                // console.log('Error:', err);
            });
    }


    return (
        <>
            <div className="vh-100 d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 col-md-8 col-lg-6">
                            <div className="border border-3 border-primary"></div>
                            <div className="card bg-white shadow-lg">
                                <div className="card-body p-5">
                                    <form className="mb-3 mt-md-4">
                                        <h2 className="fw-bold mb-2 text-uppercase ">Login</h2>
                                        <p className=" mb-5">Please enter your login and password!</p>
                                        <div className="mb-3">
                                            <label htmlFor="username" className="form-label ">Email address</label>
                                            <input type="username" className="form-control" id="username"
                                                onChange={onInputUsernameChange} required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="password" className="form-label ">Password</label>
                                            <input type="password" className="form-control" id="password" placeholder="*******"
                                                onChange={onInputPasswordChange} required
                                            />
                                        </div>
                                        <p className="small"><a className="text-primary" href="forget-password.html">Forgot password?</a></p>
                                        <div className="d-grid">
                                            <button className="btn btn-outline-primary" type="submit"
                                                onClick={onLoginSubmit}
                                            >Login</button>
                                        </div>
                                    </form>
                                    <div>
                                        <p className="mb-0  text-center">Don't have an account? <a
                                            className="text-primary fw-bold">Sign
                                            Up</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginView