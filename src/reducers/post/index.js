import { GET_ALL_POSTS } from "../../actions/HomePageAction";
import { UPLOAD_IMAGE, GET_DETAIL_POST } from "../../actions/PostAction";

const initialState = {
    getAllPostsLoading: false,
    getAllPostsResult: false,
    getAllPosts: false,

    getDetailPostLoading: false,
    getDetailPostResult: false,
    getDetailPostError: false,

    uploadImageLoading: false,
    uploadImageResult: false,
    uploadImageError: false
    
}

const PostReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_POSTS:
            return {
                ...state,
                getAllPostsLoading: action.payload.loading,
                getAllPostsResult: action.payload.data,
                getAllPostsError: action.payload.errorMessage
            }
        case GET_DETAIL_POST:
            return {
                ...state,
                getDetailPostLoading: action.payload.loading,
                getDetailPostResult: action.payload.data,
                getDetailPostError: action.payload.errorMessage
            }
        case UPLOAD_IMAGE:
            return {
                ...state,
                uploadImageLoading: action.payload.loading,
                uploadImageResult: action.payload.data,
                uploadImageError: action.payload.errorMessage
            }
        default:
            return state;
    }
}

export default PostReducer