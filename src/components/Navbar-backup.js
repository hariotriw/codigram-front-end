import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="container-fluid p-0">
			<nav className="navbar navbar-expand-lg navbar-dark p-2 bg-forestgreen">
				<div className="navbar-left ms-2 me-auto">
					{/* <Link className="navbar-brand" to="/">
						Home
					</Link> */}
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link className="nav-link text-light" to="/">
									Contact us
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="navbar-right mx-auto d-flex">
					<Link className="navbar-brand" to="/">
						Codigram
					</Link>
				</div>
				<div className="navbar-right ms-auto d-flex">
					<h6 className="my-auto me-3 text-light">Hi User</h6>
					<Link
						className="btn btn-secondary my-2 my-sm-0 text-white"
						to="/authenticate"
					>
						Login/Logout
					</Link>
					{/* <button
						className="btn btn-secondary my-2 my-sm-0 text-white"
						type="button"
					>
						Login/Logout
					</button> */}
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
