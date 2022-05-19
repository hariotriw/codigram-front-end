import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const EditPostPage = () => {
	return (
		<>
        <Navbar />
			<section className="" id="AddPost">
				<div className="container-fluid p-0 m-0">
                    <div className="row p-0 m-0">
                        <div className="col-3">

                        </div>
                        <div className="col-6">
                            <div className="row p-0 m-0 mt-5">
                                <div className="mx-auto">
                                    <h3 className="py-auto">Edit Post</h3>
                                </div>
                            </div>
                            <form>
                            <div className="row p-0 m-0 mb-3">
                                <div className="col-6 p-0 m-0 mx-auto">
                                    <div className="row p-0 m-0">
                                        <img src="https://via.placeholder.com/150" className="img-fluid p-0" alt="..."/>
                                    </div>
                                </div>
                            </div>
                            <div className="row p-0 m-0 mx-auto mb-3">
                                <div className="p-0 m-0 mx-auto d-flex">
                                    <p className="p-0 m-0 ms-1 me-5 my-auto d-flex">Caption</p>
                                    <input type="text" className="form-control me-auto d-flex" name="username" required/>
                                </div>
                            </div>
                            <div className="row p-0 m-0 mb-3">
                                <div className="p-0 m-0  d-flex py-3">
                                    <Link className="btn btn-danger me-auto" to="/">Delete Post</Link>{/* sementara */}
                                    {/* <button type="submit" className="btn btn-primary ms-auto">Delete Post</button> */}
                                    <Link className="btn btn-primary ms-auto" to="/">Edit Post</Link>{/* sementara */}
                                    {/* <button type="submit" className="btn btn-primary ms-auto">Add Post</button> */}
                                </div>
                            </div>
                            {/* <div className="input-group input-group-sm">
                                <input type="text" className="form-control" placeholder="Click here to add comment..." />
                                <span className="input-group-text" id="basic-addon2">
                                    <i className="bi bi-chat-dots my-auto" style={{ fontSize: "1.5rem" }}></i>
                                </span>
                            </div> */}
                            </form>
                        </div>
                        <div className="col-3">
                            
                        </div>
                    </div>
                    
					
				</div>
			</section>
		</>
	);
};

export default EditPostPage;
