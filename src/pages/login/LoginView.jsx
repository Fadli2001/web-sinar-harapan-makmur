import { useAuth } from "../../hooks/UseAuth"   

const LoginView = () => {
    const { login } = useAuth()
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
                                                
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="password" className="form-label ">Password</label>
                                            <input type="password" className="form-control" id="password" placeholder="*******"
                                                
                                            />
                                        </div>
                                        <p className="small"><a className="text-primary" href="forget-password.html">Forgot password?</a></p>
                                        <div className="d-grid">
                                            <button className="btn btn-outline-primary" type="submit"
                                                onClick={() => login()}
                                            >Login</button>
                                        </div>
                                    </form>
                                    <div>
                                        <p className="mb-0  text-center">Don't have an account? <a href="signup.html"
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