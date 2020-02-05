import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../actions/index";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
const CardsInfo = props => {
  const fetchPosts = props.fetchPosts;
  useEffect(() => {
    fetchPosts();
  }, []);
  //   const posts = useSelector(state => state.async.posts);
  console.log("data from api", props.async.posts);
  const { id } = useParams();
  const history = useHistory();
  const handleUpdate = e => {
    e.preventDefault();
    history.push(`/update-form/${id}`);
  };
  return (
    <div style={{ textAlign: "center" }}>
      {props.async.posts.map(info => (
        <div
          style={{
            marginBottom: "50px",
            border: "1px solid red"
          }}
        >
          <h1>{info.title}</h1>
          <h2>{info.story}</h2>
          <h3>{info.details}</h3>
          <button onClick={handleUpdate}>Edit</button>
        </div>
      ))}
    </div>
  );
};
// export default CardsInfo;
const mapStateToProps = state => {
  return {
    async: {
      posts: state.async.posts
    }
  };
};
export default connect(
  mapStateToProps,
  //place imported actions below
  { fetchPosts }
)(CardsInfo);
