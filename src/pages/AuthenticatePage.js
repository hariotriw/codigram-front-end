import React from "react";
import AuthLogin from "../components/AuthLogin";
import AuthRegister from "../components/AuthRegister";
import Navbar from "../components/Navbar";

const AuthenticatePage = () => {
	return (
		<>
			<section className="" id="Authenticate">
				<div className="container-fluid">
					<div
						className="col col-6 pt-3 mx-auto "
						style={{ minHeight: "100vh" }}
					>
						{/* <AuthLogin/> */}
						<AuthRegister />
					</div>
				</div>
			</section>
		</>
	);
};

export default AuthenticatePage;
