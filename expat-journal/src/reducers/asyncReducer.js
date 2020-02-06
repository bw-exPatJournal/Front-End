// Create a new reducer and import actions from appropriate action file; in this case it's index.js
import {
	FETCH_POSTS,
	FETCH_POSTS_SUCCESS,
	FETCH_POSTS_ERROR,
	CREATE_POST,
	CREATE_POST_SUCCESS,
	CREATE_POST_ERROR,
	START_LOGIN,
	START_LOGIN_SUCCESS,
	START_LOGIN_ERROR
} from '../actions';

const initialState = {
	posts: [],
	error: '',
	currentUserID: '',
	isLoading: false,
	user: {
		name: 'Mikael Tolskbov',
		id: '',
		username: 'Mikael',
		email: 'Mikael@email.com',
		img_url: 'https://i.pinimg.com/236x/33/d3/83/33d3839c662b18f631d732f38f2c6d3c--russian-man-russian-people.jpg'
	},
	newPost: {
		title: "",
		photo: "",
		story: "",
		details: "",
		traveler_id: ''
	}
}

export const asyncReducer = (state = initialState, action) => {
	switch (action.type) {
		//User Login
		case START_LOGIN:
			return {
				...state,
				isLoading: true,
			}
		case START_LOGIN_SUCCESS:
			return {
				...state,
				currentUserID: action.payload,
				isLoading: false
			}
		case START_LOGIN_ERROR:
			return {
				...state,
				error: action.payload,
				isLoading: false
			}
		//Fetch Posts
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

		//Create Post
		case CREATE_POST:
			return {
				...state,
				isLoading: true,
			}
		case CREATE_POST_SUCCESS:
			return {
				...state,
				posts: [action.payload, ...state.posts],
				isLoading: false
			}
		case CREATE_POST_ERROR:
			return {
				...state,
				error: action.payload,
				isLoading: false
			}
		default:
			return state;
	}
}
