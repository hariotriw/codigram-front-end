import React from "react";
import { Link } from "react-router-dom";

const Post = () => {
	return (
		<div className="container-fluid p-0 mb-4 bg-snow border border-dark">
            {/* --- Header section */}
            <div className="row p-0 m-0">
                <div className="mx-auto d-flex py-2 mb-2">
                    <img src = "https://via.placeholder.com/150" className ="rounded-circle me-3 d-flex" alt = "Rounded Image" style={{ width: "50px" }}/>
                    {/* <p className="d-flex fs-5 text-dark ms-2 d-flex">nama akun</p> */}
                    <Link className="no-link  me-auto d-flex my-auto" to="/a">
                        <p className="fs-5 text-dark me-auto d-flex my-auto ">harioTriWibowo</p>
                    </Link>
                    <i className="bi bi-three-dots me-4 d-flex my-auto" style={{ fontSize: "1.5rem" }}></i>
                    {/* <i className="bi bi-gear-fill me-4 d-flex my-auto" style={{ fontSize: "1.5rem" }}></i> */}
                </div>
            </div>
            {/* --- Image section */}
            <div className="row p-0 m-0">
                <img src="https://via.placeholder.com/150" className="img-fluid p-0" alt="..."/>
            </div>
            {/* --- Content section */}
            <div className="row p-0 m-0">
                <div className="mx-auto d-flex pt-4">
                    {/* <i className="bi bi-heart me-3 d-flex my-auto shadow" style={{ fontSize: "1.5rem" }}></i> */}

                    <i className="bi bi-heart-fill me-3 d-flex my-auto shadow" style={{ fontSize: "1.5rem", color: "red" }}></i>
                    {/* <i className="bi bi-chat me-3 d-flex my-auto" style={{ fontSize: "1.5rem" }}></i> */}
                    <div className="input-group input-group-sm">
                        <input type="text" className="form-control" placeholder="Click here to add comment..." />
                        <span className="input-group-text" id="basic-addon2">
                            <i className="bi bi-chat-dots my-auto" style={{ fontSize: "1.5rem" }}></i>
                        </span>
                    </div>

                    {/* <i className="bi bi-three-dots me-auto d-flex my-auto" style={{ fontSize: "1.5rem" }}></i> */}
                    {/* <i className="bi bi-gear-fill me-4 d-flex my-auto" style={{ fontSize: "1.5rem" }}></i> */}
                </div>
                <div className="d-flex py-1 my-0 fw-bold">
        			<p className="py-0 my-0 fs-6">100 likes</p>
                </div>
                <div className="d-flex py-1">
    			    <p className="py-0 fs-6 text-justify text-break">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe quis, exercitationem veritatis maxime itaque ratione, eaque iure accusantium minus ad mollitia incidunt vel! Animi, eius dignissimos illo temporibus amet quidem hic, velit accusantium fugiat, pariatur incidunt laboriosam nam necessitatibus dolorum. Ullam necessitatibus minus nulla quae maxime accusantium fuga, totam numquam iusto? Quos incidunt quo voluptas amet consequuntur facere sint harum nihil! Iste eius blanditiis itaque porro modi corrupti tempore quam, maxime esse velit molestias.
                    </p>
                </div>
                <div className="d-flex py-1 my-0 mb-3 mx-auto">
        			{/* <p className="py-0 my-0 fs-6">View all <span className="fw-bold">5 Comments</span></p> */}
                    <div className="py-0 my-0 me-auto">
            			<p className=" fs-6 ">No Comments</p>
                    </div>
                    <Link className="no-link my-0 mx-auto" to="/b">
        			    <p className="py-0 px-4 fs-6   text-dark">Click to view detail</p>
                    </Link>
                    <div className="py-0 my-0  ms-auto me-3">
        			    <p className="fs-6">4 bulan yang lalu</p>
                    </div>
                </div>
            </div>
            {/* --- Add Comment section */}
            {/* <div className="row p-0 m-0">
    			<h4>Add comment</h4>
            </div> */}
		</div>
	);
};

export default Post;
