import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom'
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import { useDispatch, useSelector } from "react-redux";
import { loginStatus, getDataUser } from "../actions/AuthenticationAction";
import { getDetailPost, getEditPost, editPost, deletePost} from "../actions/PostAction";

const EditPostPage = () => {
    const navigate = useNavigate()
	const { getEditPostResult, getEditPostLoading, getEditPostError } = useSelector((state) => state.PostReducer)
	const { getDataUserLoading, getDataUserResult, getDataUserError, loginStatusResult } = useSelector((state) => state.UserReducer)

    const dispatch = useDispatch()
    let { strId } = useParams();
    // console.log(strId);

	useEffect(() => {
		dispatch(getEditPost(strId))
		dispatch(loginStatus())
		dispatch(getDataUser())
	}, [dispatch])

	useEffect(() => {
		setCaption(getEditPostResult.caption)
	}, [getEditPostResult])

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

    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log('handle submit');
        let data = {
            caption: caption, strId: strId
        }
        dispatch(editPost(data))
    }

    const handleDelete = (e) => {
        e.preventDefault()
        // console.log('handle submit');
        let data = {
            UserId: getDataUserResult.uuid, strId: strId
        }
        dispatch(deletePost(data))
    }
    
    if(loginStatusResult.status === false) {
		navigate('/login')
	}
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
                            <form onSubmit={(event) => handleSubmit(event)}>
                            <div className="row p-0 m-0 mb-3">
                                <div className="col-6 p-0 m-0 mx-auto">
                                    <div className="row p-0 m-0">
                                        <img src={getEditPostResult ? getEditPostResult.image : getEditPostLoading ? "http://via.placeholder.com/150" : ""} className="img-fluid p-0" alt="..."/>
                                    </div>
                                </div>
                            </div>
                            <div className="row p-0 m-0 mx-auto mb-3">
                                <div className="p-0 m-0 mx-auto d-flex">
                                    <p className="p-0 m-0 ms-1 me-5 my-auto d-flex">Caption</p>
                                    <input type="text" className="form-control me-auto d-flex" name="caption" value={caption}  onChange={(event) => setCaption(event.target.value)} required/>
                                </div>
                            </div>
                            <div className="row p-0 m-0 mb-3">
                                <div className="p-0 m-0  d-flex py-3">
                                    {/* <Link className="btn btn-danger me-auto" to="/">Delete Post</Link> */}
                                    <button type="button" className="btn btn-danger me-auto" onClick={e => handleDelete(e)}>Delete Post</button>
                                    {/* <Link className="btn btn-primary ms-auto" to="/">Edit Post</Link> */}
                                    <button type="submit" className="btn btn-primary ms-auto">Edit Post</button>
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
