import React from "react";
import { Link } from "react-router-dom";

const Comment = () => {
	return (
        <>
            {/* --- Comment section */}
            <div className="row p-0 m-0 mb-4">
                <div className="col-2 p-0 m-0">
                    <img src = "https://via.placeholder.com/150" className ="rounded-circle img-fluid" alt = "Rounded Image"/>
                </div>
                <div className="col-10 p-0 m-0">
                    <div className="row p-0 m-0">
                        <Link className="no-link  me-auto d-flex my-auto" to="/a">
                            <p className="fs-6 text-dark fw-bold me-auto d-flex my-auto ">harioTriWibowo</p>
                        </Link>
                    </div>
                    <div className="row p-0 m-0">
                        <p className="fs-6 text-dark me-auto d-flex my-auto text-break text-justify">harioT riWi bowo adwas das dwad wdasd as dw asjdw bashdwhbasd bhwabdas</p>
                    </div>
                </div>
            </div>
        </>    
	);
};

export default Comment;
