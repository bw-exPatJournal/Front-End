// If application requires Asyncronous actions
import { axiosWithAuth } from '../utils/axiosWithAuth';
export const ACTION_NAME = "ACTION_NAME";
export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR'

// This is an async action creator.
export const fetchPosts = () => dispatch => {
	dispatch({ type: FETCH_POSTS });
	axiosWithAuth()
		.get('api/posts')
		.then(res => dispatch({ type: FETCH_POSTS_SUCCESS, payload: res.data }))
		.catch(err => dispatch({ type: FETCH_POSTS, payload: err }))
};

// This is a sync action creator
export const actionName = payload => ({
	type: ACTION_NAME,
	payload: payload
});