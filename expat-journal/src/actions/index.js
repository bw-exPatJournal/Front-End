// If application requires Asyncronous actions
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
export const ACTION_NAME = "ACTION_NAME";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_TOGGLE = "FETCH_TOGGLE";
export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR";
export const DELETE_POST = "DELETE";
export const ADDING = "ADDING";
export const WAITING_TO_DELETE = "WAITING_TO_DELETE";
export const COULD_NOT_DELETE = "COULD_NOT_DELETE";
export const ADDED = "ADDED";
export const POSTING_ERROR = "POSTING_ERROR";
export const PENDING_UPDATE = "PENDING_UPDATE";
export const UPDATE_SUCCESS = "UPDATE_SUCCESS";
export const UPDATING_ERROR = "UPDATING_ERROR";

// This is an async action creator.
// export const fetchKanye = () => dispatch => {
//   dispatch({ type: FETCH_TOGGLE });
//   axios
//     .get("https://api.kanye.rest/")
//     .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data.quote }))
//     .catch(err => dispatch({ type: FETCH_TOGGLE, payload: err }));
// };

export const fetchPosts = () => dispatch => {
  dispatch({ type: ADDING });
  axiosWithAuth()
    .get("api/posts")
    .then(res => dispatch({ type: FETCH_POSTS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_POSTS_ERROR, payload: err }));
};

export const postData = formData => dispatch => {
  dispatch({ type: ADDING });
  axiosWithAuth()
    .post("api/posts", formData)
    .then(res => {
      console.log("data I wantttttttttttttt", res);
      return dispatch({ type: ADDED, payload: res.data });
    })
    .catch(err => {
      console.log("errrrrrrrrrrrr", err);
      return dispatch({ type: POSTING_ERROR, payload: err });
    });
};

export const updateStory = (info, id) => dispatch => {
  dispatch({ type: PENDING_UPDATE });
  axiosWithAuth()
    .put(`/api/posts/${id}`, info)
    .then(res => dispatch({ type: UPDATE_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: UPDATING_ERROR, payload: err }));
};
export const deleteStory = id => dispatch => {
  dispatch({ type: WAITING_TO_DELETE });
  axiosWithAuth()
    .delete(`/api/posts/${id}`)
    .then(res => dispatch({ type: DELETE_POST, payload: res.data }))
    .error(error => dispatch({ type: COULD_NOT_DELETE, payload: error }));
};
// This is a sync action creator
export const actionName = payload => ({
  type: ACTION_NAME,
  payload: payload
});
