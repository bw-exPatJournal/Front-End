import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { updateStory } from "../../actions/index";
const UpdateExperienceForm = () => {
  const dispatch = useDispatch();
  const details = useSelector(state => state.async.formInfo.details);
  const title = useSelector(state => state.async.formInfo.title);
  const story = useSelector(state => state.async.formInfo.story);
  const formInfo = useSelector(state => state.async.formInfo);

  const { id } = useParams();
  const history = useHistory();
  const handleChange = e => {
    dispatch({
      type: "FORM_DATA",
      name: e.target.name,
      value: e.target.value
    });
  };

  const editCard = e => {
    e.preventDefault();
    dispatch(updateStory(formInfo, id));
    history.push("/edit");
  };
  return (
    <div>
      <form onSubmit={editCard}>
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
        <button>Update!</button>
      </form>
    </div>
  );
};

export default UpdateExperienceForm;
