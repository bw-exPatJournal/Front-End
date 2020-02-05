// Create a new reducer and import actions from appropriate action file; in this case it's index.js
import { FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR } from '../actions';

const initialState = {
	posts: [],
	error: '',
	isLoading: false,
	user: {
		name: 'Mikael Tolskbov',
		username: 'Mikael',
		email: 'Mikael@email.com',
		img_url: 'https://i.pinimg.com/236x/33/d3/83/33d3839c662b18f631d732f38f2c6d3c--russian-man-russian-people.jpg'
	}
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
