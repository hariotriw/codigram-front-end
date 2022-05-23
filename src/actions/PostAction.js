import axios from "axios";

export const ADD_POST = "ADD_POST"
export const UPLOAD_IMAGE = "UPLOAD_IMAGE"
export const GET_DETAIL_POST = "GET_DETAIL_POST"
export const GET_EDIT_POST = "GET_EDIT_POST"
export const EDIT_POST = "EDIT_POST"
export const DELETE_POST = "DELETE_POST"
export const GET_MY_POSTS = "GET_MY_POSTS"
export const GET_EXPLORE = "GET_EXPLORE"

export const addPost = (data) => {
    // console.log('masuk ke post action')
    return (dispatch) => {

        // loading
        dispatch({
            type: ADD_POST,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        // post API
        const access_token = localStorage.getItem('access_token')
        axios({
            method: 'POST',
            url: 'http://localhost:3001/api/posts/create',
            timeout: 120000,
            headers: { 'access-token': access_token},
            data: data
        })
            .then((response) => {
                console.log('berhasil dapat data');
                console.log(response);
                // berhasil get API
                dispatch({
                    type: ADD_POST,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((response) => {
                console.log(response);
                console.log('gagal dapat data');
                // gagal get API
                dispatch({
                    type: ADD_POST,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: response.errorMessage
                    }
                })
            })

    }

}

export const getMyPosts = () => {
    // console.log('masuk ke post action')
    return (dispatch) => {

        // loading
        dispatch({
            type: GET_MY_POSTS,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        // post API
        const access_token = localStorage.getItem('access_token')
        axios({
            method: 'GET',
            url: 'http://localhost:3001/api/posts/my-posts',
            timeout: 120000,
            headers: { 'access-token': access_token}
        })
            .then((response) => {
                console.log('berhasil dapat data');
                console.log(response);
                // berhasil get API
                dispatch({
                    type: GET_MY_POSTS,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((response) => {
                console.log(response);
                console.log('gagal dapat data');
                // gagal get API
                dispatch({
                    type: GET_MY_POSTS,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: response.errorMessage
                    }
                })
            })

    }

}

export const getExplore = () => {
    // console.log('masuk ke post action')
    return (dispatch) => {

        // loading
        dispatch({
            type: GET_EXPLORE,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        // post API
        const access_token = localStorage.getItem('access_token')
        axios({
            method: 'GET',
            url: 'http://localhost:3001/api/posts/explore',
            timeout: 120000,
            headers: { 'access-token': access_token}
        })
            .then((response) => {
                console.log('berhasil dapat data');
                console.log(response);
                // berhasil get API
                dispatch({
                    type: GET_EXPLORE,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((response) => {
                console.log(response);
                console.log('gagal dapat data');
                // gagal get API
                dispatch({
                    type: GET_EXPLORE,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: response.errorMessage
                    }
                })
            })

    }

}

export const getDetailPost = (strId) => {
    return (dispatch) => {
        // console.log('masuk getDetailPost');
        // console.log(strId)
        // loading
        dispatch({
            type: GET_DETAIL_POST,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        // get API
        axios({
            method: 'GET',
            url: `http://localhost:3001/api/posts/post/${strId}`,
            timeout: 120000
        })
            .then((response) => {
                // console.log('berhasil dapat data');
                // console.log(response.data);
                // berhasil get API
                dispatch({
                    type: GET_DETAIL_POST,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((response) => {
                // console.log('gagal dapat data');
                // gagal get API
                dispatch({
                    type: GET_DETAIL_POST,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: response.errorMessage
                    }
                })
            })

    }

}

export const editPost = (data) => {
    console.log(data)
    const {caption, strId} = data
    return (dispatch) => {

        // loading
        dispatch({
            type: EDIT_POST,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        // post API
        const access_token = localStorage.getItem('access_token')
        axios({
            method: 'POST',
            url: `http://localhost:3001/api/posts/update/${strId}`,
            timeout: 120000,
            headers: { 'access-token': access_token},
            data: data
        })
            .then((response) => {
                console.log('berhasil dapat data');
                console.log(response);
                // berhasil get API
                dispatch({
                    type: EDIT_POST,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((response) => {
                console.log(response);
                console.log('gagal dapat data');
                // gagal get API
                dispatch({
                    type: EDIT_POST,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: response.errorMessage
                    }
                })
            })

    }

}

export const deletePost = (data) => {
    const {UserId, strId} = data
    // console.log(strId)
    // console.log(UserId)
    console.log(data)
    return (dispatch) => {

        // loading
        dispatch({
            type: DELETE_POST,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        // post API
        const access_token = localStorage.getItem('access_token')
        axios({
            method: 'POST',
            url: `http://localhost:3001/api/posts/delete/${strId}`,
            timeout: 120000,
            headers: { 'access-token': access_token},
            data: data
        })
            .then((response) => {
                console.log('berhasil dapat data');
                console.log(response);
                // berhasil get API
                dispatch({
                    type: DELETE_POST,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((response) => {
                console.log(response);
                console.log('gagal dapat data');
                // gagal get API
                dispatch({
                    type: DELETE_POST,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: response.errorMessage
                    }
                })
            })

    }

}

export const getEditPost = (strId) => {
    return (dispatch) => {
        // console.log('masuk getDetailPost');
        // console.log(strId)
        // loading
        dispatch({
            type: GET_EDIT_POST,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        // get API
        axios({
            method: 'GET',
            url: `http://localhost:3001/api/posts/edit/${strId}`,
            timeout: 120000
        })
            .then((response) => {
                // console.log('berhasil dapat data');
                // console.log(response.data);
                // berhasil get API
                dispatch({
                    type: GET_EDIT_POST,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((response) => {
                // console.log('gagal dapat data');
                // gagal get API
                dispatch({
                    type: GET_EDIT_POST,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: response.errorMessage
                    }
                })
            })

    }

}

export const uploadImage = (formData) => {
    // console.log('masuk ke post action')
    return (dispatch) => {

        // loading
        dispatch({
            type: UPLOAD_IMAGE,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        // post API

        axios({
            method: 'POST',
            url: 'http://localhost:3001/api/upload',
            timeout: 120000,
            data: formData
        })
            .then((response) => {
                console.log('berhasil upload image');
                console.log(response);
                // berhasil get API
                dispatch({
                    type: UPLOAD_IMAGE,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((response) => {
                console.log(response);
                console.log('gagal dapat data');
                // gagal get API
                dispatch({
                    type: UPLOAD_IMAGE,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: response.errorMessage
                    }
                })
            })

    }

}