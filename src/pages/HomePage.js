import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import Navbar from "../components/Navbar";

import ReactTooltip from 'react-tooltip';
import Post from "../components/Post";
import { useDispatch, useSelector } from "react-redux";
import { loginStatus, getDataUser } from "../actions/AuthenticationAction";
import { getAllPosts } from "../actions/HomePageAction";

const HomePage = () => {
	const navigate = useNavigate()
	const { getAllPostsLoading, getAllPostsResult, getAllPostsError } = useSelector((state) => state.PostReducer)
	const { getDataUserLoading, getDataUserResult, getDataUserError, loginStatusResult } = useSelector((state) => state.UserReducer)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getAllPosts())
		dispatch(loginStatus())
		dispatch(getDataUser())
	}, [dispatch])

	// useEffect(() => {
	// 	dispatch(getAllPosts())

	// }, [dispatch])

	// useEffect(() => {
	// 	dispatch(loginStatus())

	// }, [dispatch])

	// useEffect(() => {
	// 	dispatch(getDataUser())

	// }, [dispatch])

	// console.log(loginStatusResult.status)

	// useEffect(() => {
	// 	// panggil action Get All Posts
	// 	dispatch(getDataUser())

	// }, [dispatch])

	let [strId, setStrId] = useState('')
	let [image, setImage] = useState('')
	let [UserId, setUserId] = useState('')
	let [caption, setCaption] = useState('')
	let [createdAt, setCreatedAt] = useState('')
	// let [loginStatus, setLoginStatus] = useState(false)

	if(loginStatusResult.status === false) {
		navigate('/login')
	}
	// console.log(getDataUserLoading)
	// console.log(getDataUserResult)
	// console.log(getDataUserError)

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
							<div className="col-8 p-0" style={{  }}> 
							{/* <div className="col-8 p-0" style={{ height: "30rem" }}>  */}
							{ getAllPostsResult ? (
								getAllPostsResult.posts.map((post) => {
									// console.log(post)
									return (
										<Post strId={post.strId} image={post.image} UserId={post.User.username} caption={post.caption} createdAt={post.createdAt} key={post.strId}/>
									)
								})
							) : getAllPostsLoading ? (
								<p> loading . . .</p>
							) : (
								<p>{getAllPostsError ? getAllPostsError : 'data kosong'}</p>
							)}
								
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
										<Link className="no-link" to={`u/${getDataUserResult.username}`}>
											<div className="row p-0 m-0">
												<div className="mx-auto d-flex py-2 mb-2">
													<img src = "https://via.placeholder.com/150" className ="rounded-circle me-3 d-flex" alt = "Rounded Image" style={{ width: "50px" }}/>
													<p className="fs-5 fw-bold text-dark me-auto my-auto">{ getDataUserResult ? `${getDataUserResult.username}` : 'username'}</p>
												</div>
											</div>
											<div className="row p-0 m-0">
												<div className="mx-auto d-flex py-1">
													<p className="fs-5 text-dark me-auto my-auto">{ getDataUserResult ? `${getDataUserResult.fullname}` : 'fullname'}</p>
												</div>
											</div>
											<div className="row p-0 m-0">
												<div className="mx-auto d-flex py-1 mb-2">
													<p className="py-0 fs-6 text-justify text-break text-dark">{ getDataUserResult ? `${getDataUserResult.bio}` : 'bio'}</p>
													{/* <p className="py-0 fs-6 text-justify text-break text-dark">{ getDataUserResult}</p> */}
												</div>
											</div>
										</Link>
									</div>
									<div className="bg-snow mt-4">
										<Link className="no-link" to={`/${getDataUserResult.username}`}>
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
