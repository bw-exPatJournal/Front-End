import { ACTION_NAME } from "../actions/";

const initialState = {
  date: Date.now(),
  formInfo: {
    title: "",
    story: "",
    details: ""
  }
};

export const syncReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_NAME:
      return {
        ...state,
        date: action.payload
      };
    case "FORM_DATA":
      return {
        ...state,
        formInfo: {
          ...state.formInfo,
          [action.name]: action.value
        }
      };
    default:
      return state;
  }
};
