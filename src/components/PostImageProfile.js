import React from "react";
import { Link } from "react-router-dom";

const PostImageProfile = () => {
	return (
		<>
        <div className="col-4 mb-3">
            <Link className="no-link row p-0 m-0" to="/a">
                <img src="https://via.placeholder.com/150" className="img-fluid p-0" alt="..."/>
            </Link>
        </div>
        </>
	);
};

export default PostImageProfile;
