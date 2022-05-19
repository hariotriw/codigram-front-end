import React from "react";
import { Link } from "react-router-dom";

const AuthLogin = () => {
    return (
        <>
        <div className="col col-8 pt-5 mx-auto" style={{ minHeight: "100vh" }}>
            <div className="card rounded-3 mt-5">
                <div className="card-header text-center">
                    <h5>Login</h5>
                </div>
                <form method="post" action="/books/create">
                    <div className="card-body py-3">
                        <div className="mb-2">
                            <label className="col-sm-6 col-form-label">Username</label>
                            <input type="text" className="form-control" name="username" required/>
                        </div>
                        <div className="mb-1">
                            <label className="col-sm-6 col-form-label">Password</label>
                            <input type="password" className="form-control" name="password" required/>
                        </div>
                    </div>
                    <div className="card-footer d-flex py-3">
                        <p className="fs-6 my-auto me-auto">Klik disini untuk <Link className="no-link" to="/authenticate">Register</Link></p>
                        <Link className="btn btn-primary ms-auto" to="/">Login</Link>{/* sementara */}
                        {/* <button type="submit" className="btn btn-primary ms-auto">Login</button> */}
                    </div>
                </form>
            </div>
            
        </div>
        </>
        )
}

export default AuthLogin