// Create a new reducer and import actions from appropriate action file; in this case it's index.js
import { FETCH_TOGGLE, FETCH_SUCCESS, FETCH_POSTS_SUCCESS } from "../actions";

const initialState = {
  posts: [],
  formInfo: {
    title: "",
    story: "",
    details: ""
  }
};

export const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FORM_DATA":
      return {
        ...state,
        formInfo: {
          ...state.formInfo,
          [action.name]: action.value
        }
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload
      };
    default:
      return state;
  }
};
