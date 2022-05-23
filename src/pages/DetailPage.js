import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom'
import Navbar from "../components/Navbar";
import PostDetail from "../components/PostDetail";
import Post from "../components/Post";
import { useDispatch, useSelector } from "react-redux";
import { loginStatus, getDataUser } from "../actions/AuthenticationAction";
import { getDetailPost} from "../actions/PostAction";
import Comment from "../components/Comment";

import ReactTooltip from 'react-tooltip';

const DetailPage = () => {
    const navigate = useNavigate()
	const { getDetailPostLoading, getDetailPostResult, getDetailPostError } = useSelector((state) => state.PostReducer)
	const { getDataUserLoading, getDataUserResult, getDataUserError, loginStatusResult } = useSelector((state) => state.UserReducer)

    const dispatch = useDispatch()
    let { strId } = useParams();
    // console.log(strId);

	useEffect(() => {
		dispatch(getDetailPost(strId))
		dispatch(loginStatus())
		dispatch(getDataUser())
	}, [dispatch])

    const [strIdi, setStrIdi] = useState(strId)
	const [image, setImage] = useState('')
	const [UserId, setUserId] = useState('')
	const [username, setUsername] = useState('')
    const [avatar, setAvatar] = useState(null)
	const [caption, setCaption] = useState('')
	const [createdAt, setCreatedAt] = useState('')
    const [User, setUser] = useState({})
    const [Comments, setComments] = useState({})
    const [Likes, setLikes] = useState({})
    
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
						<div className="row p-0">
							{/* ----- Left side content ----- */}
							<div className="col-7 p-0" style={{  }}> 
							{/* <div className="col-8 p-0" style={{ height: "30rem" }}>  */}
								<PostDetail strId={getDetailPostResult.strId} image={getDetailPostResult.image} UserId={getDetailPostResult.UserId} caption={getDetailPostResult.caption} createdAt={getDetailPostResult.createdAt} User={getDetailPostResult.User} Comments={getDetailPostResult.Comments} Likes={getDetailPostResult.Likes} key={getDetailPostResult.strId}/>
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
                                                <p className="fs-5 fw-bold text-dark me-auto my-auto">
                                                    {getDetailPostResult ? getDetailPostResult.User.username : getDetailPostLoading ?
                                                        'username' : getDetailPostError ? "can't found username" : "username not found"
                                                }
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row p-0 m-0">
                                            <div className="mx-auto d-flex py-1 mb-2">
                                                <p className="py-0 fs-6 text-justify text-break text-dark">
                                                {getDetailPostResult ? getDetailPostResult.caption : getDetailPostLoading ?
                                                        'caption' : getDetailPostError ? "invalid caption" : "caption can't be rendered"
                                                }    
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row p-0 m-0">
                                            <div className="mx-auto d-flex">
                                                <div className="py-0 my-0">
                                                    <i className="bi bi-heart me-1 d-flex my-auto shadow" style={{ fontSize: "1.5rem", /*color: "red"*/ }}></i>
                                                </div>
                                                <div className="py-0 my-0 ms-1 me-auto">
                                                    <p className="fs-6 m-0">{Comment ? Comment.length : 0} likes</p>
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
                                                {/* {Comments.length >= 1 ? 
                                                Comments.map(cmt => {
                                                    <Comment strId={cmt.strId} UserId={cmt.UserId} PostId={cmt.PostId} comment={cmt.comment} createdAt={cmt.createdAt} />

                                                })
                                                : 'no comment'} */}
                                                {getDetailPostResult ? getDetailPostResult.Comments.length > 0 ? 
                                                    getDetailPostResult.Comments.map(cmt => {
                                                        // console.log(cmt);
                                                        return (
                                                            <Comment strId={cmt.strId} UserId={cmt.UserId} PostId={cmt.PostId} comment={cmt.comment} createdAt={cmt.createdAt} key={cmt.strId}/>
                                                            // <p>{cmt.strId}</p>
                                                        )
                                                    })
                                                    : 'no comment'
                                                : "fail to rendered comments"}
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
