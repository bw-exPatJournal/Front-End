// If application requires Asyncronous actions
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
export const ACTION_NAME = "ACTION_NAME";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_TOGGLE = "FETCH_TOGGLE";
export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR";

// This is an async action creator.
export const fetchKanye = () => dispatch => {
  dispatch({ type: FETCH_TOGGLE });
  axios
    .get("https://api.kanye.rest/")
    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data.quote }))
    .catch(err => dispatch({ type: FETCH_TOGGLE, payload: err }));
};

export const fetchPosts = () => dispatch => {
  dispatch({ type: FETCH_POSTS });
  axiosWithAuth()
    .get("api/posts")
    .then(res => dispatch({ type: FETCH_POSTS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_POSTS_ERROR, payload: err }));
};

export const postData = formData => {
  axiosWithAuth().post("api/posts", formData);
};
// This is a sync action creator
export const actionName = payload => ({
  type: ACTION_NAME,
  payload: payload
});
