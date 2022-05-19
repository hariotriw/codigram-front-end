import React from "react";
// import Article from "../components/Article";
import { Link } from 'react-router-dom'
import Navbar from "../components/Navbar";

import ReactTooltip from 'react-tooltip';
import Post from "../components/Post";

const HomePage = () => {
	return (
		<>
		<Navbar />
		<section className="" id="Content">
			<div className="container-fluid p-0 ">
				<div className="row mt-4">
					<div className="col-2">
						
					</div>
					<div className="col-8">
						<div className="row p-0">
							{/* ----- Left side content ----- */}
							<div className="col-8 p-0" style={{  }}> 
							{/* <div className="col-8 p-0" style={{ height: "30rem" }}>  */}
								<Post />
								<Post />
								<Post />
							</div>
							{/* ----- Right side content ----- */}
							<div className="col-4 p-0">
								{/* <div className="container-fluid ps-3 mb-4 bg-snow border border-dark"> */}
								<div className="container-fluid ps-3">
									<div className="bg-snow">
										<div className="row p-0 m-0">
											<div className="mx-auto d-flex py-1 mt-3">
												<p className="fs-6 text-dark ms-auto my-0">Your account</p>
											</div>
										</div>
										{/* --- Account information section */}
										<Link className="no-link" to="/a">
											<div className="row p-0 m-0">
												<div className="mx-auto d-flex py-2 mb-2">
													<img src = "https://via.placeholder.com/150" className ="rounded-circle me-3 d-flex" alt = "Rounded Image" style={{ width: "50px" }}/>
													<p className="fs-5 fw-bold text-dark me-auto my-auto">hariot</p>
												</div>
											</div>
											<div className="row p-0 m-0">
												<div className="mx-auto d-flex py-1">
													<p className="fs-5 text-dark me-auto my-auto">Hario Tri Wibowo</p>
												</div>
											</div>
											<div className="row p-0 m-0">
												<div className="mx-auto d-flex py-1 mb-2">
													<p className="py-0 fs-6 text-justify text-break text-dark">
														Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe quis, exercitationem veritatis maxime itaque ratione, eaque iure accusantium minus ad mollitia incidunt vel! Animi, eius dignissimos illo temporibus a
													</p>
												</div>
											</div>
										</Link>
									</div>
									<div className="bg-snow mt-4">
										<Link className="no-link" to="/a">
											<div className="row p-0 m-0">
												<div className="mx-auto d-flex py-1 mb-2">
													<p className="fs-5 text-dark me-auto my-auto">Suggestion For You</p>
												</div>
											</div>
											<div className="row p-0 m-0">
												<div className="mx-auto d-flex py-2 mb-2">
													<img src = "https://via.placeholder.com/150" className ="rounded-circle me-3 d-flex" alt = "Rounded Image" style={{ width: "30px" }}/>
													<p className="fs-6 fw-bold text-dark me-auto my-auto">another_hariot</p>
												</div>
											</div>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-2">
						
					</div>
				</div>
			</div>
		</section>
		</>
	);
};

export default HomePage;
