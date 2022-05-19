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
					<div className="col-8 bg-snow">
						<div className="row p-0">
							{/* ----- Left side content ----- */}
							<div className="col-8 p-0" style={{ height: "30rem" }}> 
								<Post />
								<Post />
								<Post />
							</div>
							{/* ----- Right side content ----- */}
							<div className="col-4 p-1">
								a
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
