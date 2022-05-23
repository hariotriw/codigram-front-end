import React from "react";
import { Link } from "react-router-dom";

const MyPostImage = ({strId, image}) => {
	return (
		<>
        <div className="col-4 mb-3 img-wrap" style={{ position: "relative", color: "white"}}>
            <Link className="no-link row p-0 m-0" to={`/p/${strId}`}>
                <img src={image} className="img-fluid p-0" alt="..."/>
            </Link>a
            <Link className="bottom-right" to={`/e/${strId}`} style={{ position: "absolute", top: "8px", right: "20px" }} >
                <i class="bi bi-pencil-square no-link shadow" style={{ fontSize: "2rem", color: "cornflowerblue" }}></i>
            </Link>
        </div>
        </>
	);
};

export default MyPostImage;
