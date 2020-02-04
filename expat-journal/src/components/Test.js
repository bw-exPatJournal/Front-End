import React, { useEffect } from "react";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";

const Test = () => {
  const dispatch = useDispatch();
  const details = useSelector(state => state.sync.formInfo.details);
  const title = useSelector(state => state.sync.formInfo.title);
  const story = useSelector(state => state.sync.formInfo.story);
  console.log("my info", details);

  useEffect(() => {
    Axios.get("https://expatjournalbackend.herokuapp.com/api/posts").then(res =>
      console.log("I want this", res)
    );
  }, []);

  const handleChange = e => {
    dispatch({
      type: "FORM_DATA",
      name: e.target.name,
      value: e.target.value
    });
  };

  return (
    <div>
      <form>
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
      </form>
    </div>
  );
};

export default Test;
