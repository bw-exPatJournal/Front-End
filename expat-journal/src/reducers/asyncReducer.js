// Create a new reducer and import actions from appropriate action file; in this case it's index.js
import {
  FETCH_TOGGLE,
  FETCH_SUCCESS,
  FETCH_POSTS_SUCCESS,
  DELETE_POST,
  COULD_NOT_DELETE,
  WAITING_TO_DELETE,
  ADDING,
  PENDING_UPDATE,
  UPDATE_SUCCESS,
  UPDATING_ERROR,
  ADDED,
  FETCH_POSTS
} from "../actions";

export const FORM_DATA = "FORM_DATA";
export const RESET_FORM = "RESET_FORM";
const initialState = {
  posts: [],
  isLoading: false,
  error: "",
  formInfo: {
    title: "",
    story: "",
    details: ""
  }
};

export const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDING:
      return {
        ...state,
        isLoading: true
      };
    case ADDED:
      return {
        ...state,
        isLoading: false,
        posts: action.payload
      };
    case FORM_DATA:
      return {
        ...state,
        formInfo: {
          ...state.formInfo,
          [action.name]: action.value
        }
      };
    case RESET_FORM:
      return {
        ...state,
        formInfo: {
          // ...state.formInfo,
          title: "",
          story: "",
          details: ""
        }
      };

    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: action.payload
      };
    case PENDING_UPDATE:
      return {
        ...state,
        isLoading: true
      };
    case UPDATE_SUCCESS:
      return {
        ...state,
        posts: action.payload
      };
    case UPDATING_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case WAITING_TO_DELETE:
      return {
        ...state,
        isLoading: true
      };
    case DELETE_POST:
      return {
        ...state,
        posts: action.payload
      };
    case COULD_NOT_DELETE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
