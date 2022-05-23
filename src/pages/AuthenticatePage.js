import React, { useEffect, useState} from "react";
import AuthLogin from "../components/AuthLogin";
import AuthRegister from "../components/AuthRegister";
import Navbar from "../components/Navbar";
import { loginStatus } from "../actions/AuthenticationAction";

const AuthenticatePage = () => {
	const [loginStatus, setLoginStatus] = useState(true)
	return (
		<>
			<section className="" id="Authenticate">
				<div className="container-fluid">
					<div
						className="col col-6 pt-3 mx-auto "
						style={{ minHeight: "100vh" }}
					>
						{loginStatus ? 
							<AuthLogin /> :
							<AuthRegister/>
						}
					</div>
				</div>
			</section>
		</>
	);
};

export default AuthenticatePage;
