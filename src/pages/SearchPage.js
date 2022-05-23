import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import PostImageProfile from "../components/PostImageProfile";
import { useDispatch, useSelector } from "react-redux";
import { loginStatus, getDataUser } from "../actions/AuthenticationAction";
import { getMyPosts, getExplore } from "../actions/PostAction";

const SearchPage = () => {
    const navigate = useNavigate()
	const { getExploreLoading, getExploreResult, getExploreError } = useSelector((state) => state.PostReducer)
	const { getDataUserLoading, getDataUserResult, getDataUserError, loginStatusResult } = useSelector((state) => state.UserReducer)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getExplore())
		dispatch(loginStatus())
		dispatch(getDataUser())
	}, [dispatch])

    let [strId, setStrId] = useState('')
	let [image, setImage] = useState('')
	let [UserId, setUserId] = useState('')
	let [caption, setCaption] = useState('')
	let [createdAt, setCreatedAt] = useState('')

    if(loginStatusResult.status === false) {
		navigate('/login')
	}
	return (
		<>
		<Navbar />
		<section className="" id="Content">
			<div className="container-fluid p-0 ">
				<div className="row p-0 m-0 mt-4">
					<div className="col-2">
						
					</div>
					<div className="col-8">
                        <div className="row p-0 m-0">
                            <div className="container-fluid p-0 m-0"> 
                                <div className="row mx-auto mb-2">
                                    {/* <PostImageProfile /> */}
                                    {getExploreResult ? getExploreResult.posts.map(post => {
                                        return (
                                            <PostImageProfile strId={post.strId} image={post.image}/>
                                        )
                                    }) : 
                                        getExploreLoading ? <p>Loading data . . .</p> : 
                                            getExploreError ? getExploreError : <p>failed to get data</p>}
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

export default SearchPage;
