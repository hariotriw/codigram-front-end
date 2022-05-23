import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const PostDetail = ( {strId, image, UserId, caption, createdAt, User, Comments, Likes}) => {
    // console.log(User);
	return (
		<div className="container-fluid p-0 mb-4 bg-snow border border-dark">
            {/* --- Header section */}
            <div className="row p-0 m-0">
                <div className="mx-auto d-flex py-2 mb-2">
                    <img src = "https://via.placeholder.com/150" className ="rounded-circle me-3 d-flex" alt = "Rounded Image" style={{ width: "50px" }}/>
                    <Link className="no-link  me-auto d-flex my-auto" to={User ? `/u/${User.username}` : '/'}>
                        <p className="fs-5 text-dark me-auto d-flex my-auto ">{User ? User.username : 'username'}</p>
                    </Link>
                </div>
            </div>
            {/* --- Image section */}
            <div className="row p-0 m-0">
                <img src={image} className="img-fluid p-0" alt="..."/>
            </div>
		</div>
	);
};

export default PostDetail;
