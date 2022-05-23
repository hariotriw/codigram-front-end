import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginAction } from "../actions/AuthenticationAction";

const AuthLogin = () => {
    const navigate = useNavigate
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loginStatus, setLoginStatus] = useState(false)

    const dispatch = useDispatch()
    
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('handle submit');

        dispatch(loginAction({username: username, password: password}))
    }

    // useEffect(() => {
    //     if(setLoginStatus){
    //         navigate('/')
    //     } else {}
    //   }, [setLoginStatus])

    return (
        <>
        <div className="col col-8 pt-5 mx-auto" style={{ minHeight: "100vh" }}>
            <div className="card rounded-3 mt-5">
                <div className="card-header text-center">
                    <h5>Login</h5>
                    {loginStatus ? 'true' : 'false'}
                </div>
                {/* <form method="post" action="/login"> */}
                <form onSubmit={(event) => handleSubmit(event)}>
                    <div className="card-body py-3">
                        <div className="mb-2">
                            <label className="col-sm-6 col-form-label">Username</label>
                            <input type="text" className="form-control" name="username" value={username} onChange={(event) => setUsername(event.target.value)} required/>
                        </div>
                        <div className="mb-1">
                            <label className="col-sm-6 col-form-label">Password</label>
                            <input type="password" className="form-control" name="password" value={password} onChange={(event) => setPassword(event.target.value)} required/>
                        </div>
                    </div>
                    <div className="card-footer d-flex py-3">
                        <p className="fs-6 my-auto me-auto">Klik disini untuk <Link className="no-link" to="/register">Register</Link></p>
                        {/* <Link className="btn btn-primary ms-auto" to="/">Login</Link> */}
                        <button type="submit" className="btn btn-primary ms-auto">Login</button>
                    </div>
                </form>
            </div>
            
        </div>
        </>
        )
}

export default AuthLogin