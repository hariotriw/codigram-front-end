import axios from "axios";

export const GET_ALL_POSTS = "GET_ALL_POSTS"

export const getAllPosts = () => {
    return (dispatch) => {

        // loading
        dispatch({
            type: GET_ALL_POSTS,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        // get API
        axios({
            method: 'GET',
            url: 'http://localhost:3001/api/posts/',
            timeout: 120000
        })
            .then((response) => {
                // console.log('berhasil dapat data');
                // console.log(response.data);
                // berhasil get API
                dispatch({
                    type: GET_ALL_POSTS,
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
                    type: GET_ALL_POSTS,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: response.errorMessage
                    }
                })
            })

    }

}