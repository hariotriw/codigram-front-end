import React, { useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginStatus, getDataUser } from "../actions/AuthenticationAction";
import ReactTooltip from 'react-tooltip';

const Navbar = () => {
	// const [loginStatus, setLoginStatus] = useState(false)
	const navigate = useNavigate()
	const { getDataUserLoading, getDataUserResult, getDataUserError, loginStatusResult } = useSelector((state) => state.UserReducer)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(loginStatus())
		dispatch(getDataUser())
	}, [dispatch])

	// useEffect(() => {
	//   if(localStorage.getItem('access_token')){
	// 	  setLoginStatus(true)
	//   } else {
	// 	  setLoginStatus(false)
	// 	  navigate('/login')
	//   }
	// }, [loginStatus])

	const logoutHandler = () => {
		localStorage.clear()
		navigate('/login')
	}
	


	return (
		<div className="container-fluid p-0">
			<div className="row cst-navbar p-0 m-0">
				<div className="col-2">
					
				</div>
				<div className="col-8 bg-snow">
					<div className="row p-0">
						<div className="col-8 p-1 bg-white" style={{ height: "3rem" }}>
							<div className="navbar-left mx-auto d-flex">
								<Link className="cst-navbar-title p-0 no-link text-black ms-2" to="/" >
									<i className="ms-1 me-auto bi bi-caret-right-fill"></i>Codigram
								</Link>
								<Link className="cst-navbar-title p-0 no-link text-black ms-auto me-4 my-auto " to="/explore">
									<p className="fs-5 my-auto">
										{/* Search */}
										<i className="bi bi-search ms-1"></i>
									</p>
								</Link>
								<Link className="cst-navbar-title p-0 no-link text-black me-4 my-auto " to="/my-account">
									<p className="fs-5 my-auto">
										{/* My posts */}
										<i className="bi bi-collection-fill ms-1"></i>
									</p>
								</Link>
								<Link className="cst-navbar-title p-0 no-link text-black me-3 my-auto " to="/new-post">
									<p className="fs-5 my-auto">
										{/* New post */}
										<i className="bi bi-plus-circle-fill ms-1"></i>
									</p>
								</Link>
							</div>
						</div>
						
						<div className="col-4 p-1 bg-white">
							<div className="navbar-right ms-auto d-flex">
								<h6 className="my-auto ms-3 text-dark d-flex">
									Hi {getDataUserResult.fullname}
								</h6>
								{/* <Link className="btn btn-secondary my-2 my-sm-0 text-white ms-auto me-3" to="/authenticate">
									Logout
								</Link> */}

								<button className="btn btn-secondary my-2 my-sm-0 text-white ms-auto me-3" type="button"
								onClick={() => logoutHandler()}>Logout</button>
							</div>
						</div>
					</div>
				</div>
				<div className="col-2">
					
				</div>
			</div>
		</div>
	);
};

export default Navbar;
