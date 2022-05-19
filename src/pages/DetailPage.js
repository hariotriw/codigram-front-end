import React from "react";
// import Article from "../components/Article";
import { Link } from 'react-router-dom'
import Navbar from "../components/Navbar";
import PostDetail from "../components/PostDetail";
import Post from "../components/Post";
import Comment from "../components/Comment";

import ReactTooltip from 'react-tooltip';

const DetailPage = () => {
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
							<div className="col-7 p-0" style={{  }}> 
							{/* <div className="col-8 p-0" style={{ height: "30rem" }}>  */}
								<PostDetail />
							</div>
							{/* ----- Right side content ----- */}
							<div className="col-5 p-0">
								{/* <div className="container-fluid ps-3 mb-4 bg-snow border border-dark"> */}
								<div className="container-fluid ps-3 mb-3">
									<div className="bg-snow">
										{/* --- Post Information section */}
                                        <div className="row p-0 m-0">
                                            <div className="mx-auto d-flex py-2 mb-2">
                                                <img src = "https://via.placeholder.com/150" className ="rounded-circle me-3 d-flex" alt = "Rounded Image" style={{ width: "50px" }}/>
                                                <p className="fs-5 fw-bold text-dark me-auto my-auto">hariot</p>
                                            </div>
                                        </div>
                                        <div className="row p-0 m-0">
                                            <div className="mx-auto d-flex py-1 mb-2">
                                                <p className="py-0 fs-6 text-justify text-break text-dark">
                                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe quis, exercitationem veritatis maxime itaque ratione, eaque iure accusantium minus ad mollitia incidunt vel! Animi, eius dignissimos illo temporibus a
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row p-0 m-0">
                                            <div className="mx-auto d-flex">
                                                <div className="py-0 my-0">
                                                    <i className="bi bi-heart-fill me-1 d-flex my-auto shadow" style={{ fontSize: "1.5rem", color: "red" }}></i>
                                                </div>
                                                <div className="py-0 my-0 ms-1 me-auto">
                                                    <p className="fs-6 m-0">100 likes</p>
                                                </div>
                                                <div className=" ms-auto me-3 mb-2">
                                                    <p className="fs-6 m-0">4 bulan yang lalu</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row p-0 m-0">
                                            <div className="mx-auto d-flex py-2">
                                                <div className="input-group input-group-sm">
                                                    <input type="text" className="form-control" placeholder="Click here to add comment..." />
                                                    <span className="input-group-text" id="basic-addon2">
                                                        <i className="bi bi-chat-dots my-auto" style={{ fontSize: "1.5rem" }}></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="my-1"/>
                                        <div className="row p-0 m-0">
                                            <div className="mx-auto py-2 mb-2">
                                                <Comment />
                                                <Comment />
                                                <Comment />
                                                <Comment />
                                                <Comment />
                                            </div>
                                        </div>
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

export default DetailPage;
