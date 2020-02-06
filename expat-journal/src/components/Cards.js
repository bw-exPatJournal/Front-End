import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, deleteStory } from "../actions/index";
import { connect } from "react-redux";
import { useHistory, useParams, Link } from "react-router-dom";

const Cards = props => {
  const fetchPosts = props.fetchPosts;
  useEffect(() => {
    fetchPosts();
  }, []);
  //   const posts = useSelector(state => state.async.posts);
  const isLoading = useSelector(state => state.isLoading);
  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();
  console.log("data from api", props.async.posts);
  const { id } = useParams();
  const history = useHistory();
  // const handleUpdate = e => {
  //   e.preventDefault();
  //   history.push(`/update-form/${id}`);
  // };
  return (
    <div style={{ textAlign: "center" }}>
      <Link to="/addForm">Add post</Link>
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
          <button onClick={() => history.push(`/update-form/${info.id}`)}>
            Edit
          </button>
          <button onClick={() => dispatch(deleteStory(info.id))}>Delete</button>
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
)(Cards);
