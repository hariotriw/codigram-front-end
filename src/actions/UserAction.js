import axios from "axios";

export const GET_DATA_USER = "GET_DATA_USER"

// export const getDataUser = (user) => {
export const getDataUser = () => {
    return (dispatch) => {

        // loading
        dispatch({
            type: GET_DATA_USER,
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
                    type: GET_DATA_USER,
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
                    type: GET_DATA_USER,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: response.errorMessage
                    }
                })
            })

    }

}