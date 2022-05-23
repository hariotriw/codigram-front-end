import { GET_ALL_POSTS } from "../../actions/HomePageAction";
import { UPLOAD_IMAGE, GET_DETAIL_POST, GET_MY_POSTS, GET_EXPLORE, GET_EDIT_POST } from "../../actions/PostAction";

const initialState = {
    getAllPostsLoading: false,
    getAllPostsResult: false,
    getAllPosts: false,

    getMyPostsLoading: false,
    getMyPostsResult: false,
    getMyPostsError: false,

    getExploreLoading: false,
    getExploreResult: false,
    getExploreError: false,

    getDetailPostLoading: false,
    getDetailPostResult: false,
    getDetailPostError: false,

    getEditPostLoading: false,
    getEditPostResult: false,
    getEditPostError: false,

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
        case GET_MY_POSTS:
            return {
                ...state,
                getMyPostsLoading: action.payload.loading,
                getMyPostsResult: action.payload.data,
                getMyPostsError: action.payload.errorMessage
            }
        case GET_EXPLORE:
            return {
                ...state,
                getExploreLoading: action.payload.loading,
                getExploreResult: action.payload.data,
                getExploreError: action.payload.errorMessage
            }
        case GET_DETAIL_POST:
            return {
                ...state,
                getDetailPostLoading: action.payload.loading,
                getDetailPostResult: action.payload.data,
                getDetailPostError: action.payload.errorMessage
            }
        case GET_EDIT_POST:
            return {
                ...state,
                getEditPostLoading: action.payload.loading,
                getEditPostResult: action.payload.data,
                getEditPostError: action.payload.errorMessage
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