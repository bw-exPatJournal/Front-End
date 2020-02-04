// Create a new reducer and import actions from appropriate action file; in this case it's index.js
import { FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR } from '../actions';

const initialState = {
	posts: [],
	error: '',
	isLoading: false
}

export const asyncReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_POSTS:
			return {
				...state,
				isLoading: true,
			}
		case FETCH_POSTS_SUCCESS:
			return {
				...state,
				posts: action.payload,
				isLoading: false
			}
		case FETCH_POSTS_ERROR:
			return {
				...state,
				error: action.payload,
				isLoading: false
			}
		default:
			return state;
	}
}
