import React from "react";
import { Link } from 'react-router-dom'
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import PostImageProfile from "../components/PostImageProfile";

const UserPage = () => {
	return (
		<>
		<Navbar />
		<section className="" id="Content">
			<div className="container-fluid p-0 ">
				<div className="row p-0 m-0 mt-4">
					<div className="col-2">
						
					</div>
					<div className="col-8">
						<div className="row p-0">
							{/* ----- Left side content ----- */}
							<div className="col-4 p-0">
                                <div className="row p-0 m-0">
                                    <div className="mx-auto d-flex py-2">
                                        <img src = "https://via.placeholder.com/150" className ="rounded-circle mx-auto d-flex" alt = "Rounded Image" style={{ width: "200px" }}/>
                                    </div>
                                </div>
							</div>
							{/* ----- Right side content ----- */}
							<div className="col-8 p-0" style={{  }}> 
							{/* <div className="col-8 p-0" style={{ height: "30rem" }}>  */}
                                <div className="container-fluid ps-3">
                                    <div className="">
                                        {/* --- Account information section */}
                                        <div className="row p-0 m-0">
                                            <div className="mx-auto d-flex py-2 mb-2">
                                                <p className="fs-5 text-dark me-auto my-auto">hariot</p>
                                            </div>
                                        </div>
                                        <div className="row p-0 m-0 mb-3">
                                            <div className="col-4">
                                                <div className="py-2">
                                                    <p className="fs-6 text-start text-dark me-auto my-auto">10 Posts</p>
                                                </div>
                                            </div>
                                            {/* fitur belum dikembangkan */}
                                            <div className="col-4">
                                                <div className="py-2">
                                                    <p className="fs-6 text-start text-dark me-auto my-auto">100 Followers</p>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="py-2">
                                                    <p className="fs-6 text-start text-dark me-auto my-auto">1000 Following</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row p-0 m-0">
                                            <div className="mx-auto d-flex py-1">
                                                <p className="fs-5 fw-bold text-dark me-auto my-auto">Hario Tri Wibowo</p>
                                            </div>
                                        </div>
                                        <div className="row p-0 m-0">
                                            <div className="mx-auto d-flex py-0 mb-2">
                                                <p className="py-0 fs-6 text-justify text-break text-dark">
                                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe quis, exercitationem veritatis maxime itaque ratione, eaque iure accusantium minus ad mollitia incidunt vel! Animi, eius dignissimos illo temporibus a
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
							</div>
						</div>
                        <hr />
                        <div className="row p-0 m-0 mb-3">
                            <div className="container-fluid p-0 m-0"> 
                                <div className="mx-auto d-flex mb-2">
                                    <div className="ms-auto me-3">
                                        <Link className="no-link" to="/a">
                                            <p className="fs-6 text-dark  my-auto"><i className="me-1 bi bi-grid-3x3"></i>Posts</p>
                                        </Link>
                                    </div>
                                    <div className="mx-3 me-auto">
                                        <Link className="no-link" to="/c">
                                            <p className="fs-6 text-dark  my-auto"><i className="me-1 bi bi-tags"></i>Tagged</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
						</div>
                        <div className="row p-0 m-0">
                            <div className="container-fluid p-0 m-0"> 
                                {/* <div className="mx-auto d-flex mb-2">
                                    <img src="https://via.placeholder.com/150" className="img-fluid p-0" alt="..."/>
                                </div> */}
                                <div className="row mx-auto mb-2">
                                    {/* <div className="col-4 mb-3">
                                        <div className="row p-0 m-0">
                                            <img src="https://via.placeholder.com/150" className="img-fluid p-0" alt="..."/>
                                        </div>
                                    </div> */}
                                    {/* <div className="col-4 mb-3">
                                        <Link className="no-link row p-0 m-0" to="/a">
                                            <img src="https://via.placeholder.com/150" className="img-fluid p-0" alt="..."/>
                                        </Link>
                                    </div> */}
                                    <PostImageProfile />
                                    <PostImageProfile />
                                    <PostImageProfile />
                                    <PostImageProfile />
                                    <PostImageProfile />
                                    <PostImageProfile />
                                    <PostImageProfile />
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

export default UserPage;
