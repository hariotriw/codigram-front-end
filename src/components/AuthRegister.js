import React from "react";
import { Link } from "react-router-dom";

const AuthRegister = () => {
    return (
        <>
        <div className="col col-8 py-5 mx-auto " style={{ minHeight: "100vh" }}>
            <div className="card rounded-3">
                <div className="card-header text-center">
                    <h5>Register</h5>
                </div>
                <form method="post" action="/books/create">
                    <div className="card-body py-3">
                        <div className="mb-2">
                            <label  className="col-sm-6 col-form-label">Username</label>
                            <input type="text" className="form-control" name="username" required/>
                        </div>
                        <div className="mb-2">
                            <label  className="col-sm-6 col-form-label">Email</label>
                            <input type="text" className="form-control" name="email" required/>
                        </div>
                        <div className="mb-2">
                            <label  className="col-sm-6 col-form-label">Name</label>
                            <input type="text" className="form-control" name="name" required/>
                        </div>
                        <div className="mb-2">
                            <label  className="col-sm-6 col-form-label">Password</label>
                            <input type="password" className="form-control" name="password" required/>
                        </div>
                        <div className="mb-1">
                            <label  className="col-sm-6 col-form-label">Konfirmasi Password</label>
                            <input type="re-password" className="form-control" name="re-password" required/>
                        </div>
                    </div>
                    <div className="card-footer d-flex py-3">
                        <p className="fs-6 my-auto me-auto">Klik disini untuk <Link className="no-link" to="/login">Login</Link></p>
                        <Link className="btn btn-primary ms-auto" to="/">register</Link>{/* sementara */}
                        {/* <button type="submit" className="btn btn-primary ms-auto">register</button> */}
                    </div>
                </form>
            </div>
        </div>
        </>
        )
}

export default AuthRegister