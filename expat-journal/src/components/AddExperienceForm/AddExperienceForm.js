import React, { useEffect } from "react";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { postData } from "../../actions/index";
import { useHistory } from "react-router-dom";
import { FORM_DATA, RESET_FORM } from "../../reducers/asyncReducer";

const AddExperienceForm = () => {
  const dispatch = useDispatch();
  const details = useSelector(state => state.async.formInfo.details);
  const title = useSelector(state => state.async.formInfo.title);
  const story = useSelector(state => state.async.formInfo.story);
  const formInfo = useSelector(state => state.async.formInfo);

  // useEffect(() => {
  //   Axios.get("https://expatjournalbackend.herokuapp.com/api/posts").then(res =>
  //     console.log("I want this", res)
  //   );
  // }, []);

  const history = useHistory();
  const handleChange = e => {
    dispatch({
      type: FORM_DATA,
      name: e.target.name,
      value: e.target.value
    });
  };
  const addObject = e => {
    e.preventDefault();

    dispatch(postData(formInfo));
    history.push("/edit");
  };

  return (
    <div>
      <form onSubmit={addObject}>
        <label>
          Title
          <input
            name="title"
            type="text"
            value={title}
            onChange={handleChange}
          />
        </label>
        <label>
          Story
          <input
            name="story"
            type="text"
            value={story}
            onChange={handleChange}
          />
        </label>
        <label>
          Details
          <input
            name="details"
            type="text"
            value={details}
            onChange={handleChange}
          />
        </label>
        <button type="submit">ADD!</button>
        <button onClick={() => dispatch({ type: RESET_FORM })}>reset</button>
      </form>
    </div>
  );
};
export default AddExperienceForm;
