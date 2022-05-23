import React, { useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

import { useDispatch, useSelector } from "react-redux";
import { loginStatus, getDataUser } from "../actions/AuthenticationAction";
import { addPost, uploadImage } from "../actions/PostAction";
import axios from "axios";

const AddPostPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
	const { getDataUserLoading, getDataUserResult, getDataUserError, loginStatusResult } = useSelector((state) => state.UserReducer)
    const { uploadImageLoading, uploadImageResult, uploadImageError } = useSelector((state) => state.PostReducer)
    const [UserId, setUserId] = useState('')
    let [image, setImage] = useState("https://via.placeholder.com/150")
    let [saveImage, setSaveImage] = useState(null)
	let [caption, setCaption] = useState('')

    if(loginStatusResult.status === false) {
		navigate('/login')
	}

    useEffect(() => {
		dispatch(loginStatus())
		dispatch(getDataUser())
        setUserId(getDataUserResult)
	}, [dispatch])

    useEffect(() => {
        console.log('use effect')
        if(uploadImageResult){
            console.log('upload 1')
            if(uploadImageResult.status === 200){
                console.log('upload 1.1')
                let data = {
                    image: uploadImageResult.image, caption: caption
                }
                console.log(data)
                dispatch(addPost(data))
                setImage("https://via.placeholder.com/150")
                setSaveImage('')
                setCaption('')
            }
        }
        // console.log(uploadImageResult)
    }, [uploadImageResult])

    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log('handle submit');
        let formData = new FormData()
        formData.append('image', saveImage)
        dispatch(uploadImage(formData))
        return formData
    }

    const handleUploadChange = ((e) => {
        console.log(e.target.files[0])
        let uploaded = e.target.files[0]
        setImage(URL.createObjectURL(uploaded))
        setSaveImage(uploaded)
    })

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
                                    <h3 className="py-auto">Add Post</h3>
                                </div>
                            </div>
                            {/* <form> */}
                            <form onSubmit={(event) => handleSubmit(event)}>
                                {/* <input type="hidden" className="hidden" name="UserId" value={UserId} required readOnly/> */}
                                <div className="row p-0 m-0 mb-3">
                                    <div className="col-6 p-0 m-0 mx-auto">
                                        <div className="row p-0 m-0">
                                            <img src={image} className="img-fluid p-0" alt="..."/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row p-0 m-0 mb-3">
                                    {/* <label className="form-label">Default file input example</label> */}
                                    {/* <input className="form-control" type="file" id="formFile" value={image}  onChange={(event) => setImage(event.target.value)} required/> */}
                                    <input className="form-control" type="file" id="formFile" accept="image/*" onChange={(event) => handleUploadChange(event)} required/>
                                </div>
                                <div className="row p-0 m-0 mx-auto mb-3">
                                    <div className="p-0 m-0 mx-auto d-flex">
                                        <p className="p-0 m-0 ms-1 me-5 my-auto d-flex">Caption</p>
                                        <input type="text" className="form-control me-auto d-flex" name="caption" value={caption}  onChange={(event) => setCaption(event.target.value)} required/>
                                    </div>
                                </div>
                                <div className="row p-0 m-0 mb-3">
                                    <div className="p-0 m-0  d-flex py-3">
                                        {/* <Link className="btn btn-primary ms-auto" to="/">Add Post</Link> */}
                                        <button type="submit" className="btn btn-primary ms-auto">Add Post</button>
                                    </div>
                                </div>
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

export default AddPostPage;
