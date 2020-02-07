import React, { useState, useEffect } from 'react'
import ProfilePhotos from './ProfilePhotos'
import Loader from 'react-loader-spinner'
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/index'
const ProfilePhotoWrapper = (props) => {
    console.log('ProfilePhotoWrapper Props:', props)
    const [posts, setPosts] = useState([])
    //grab userID from localstorage
    const userID = JSON.parse(window.localStorage.getItem('userID'));
    //fetch posts on mount
    const fetchPosts = props.fetchPosts;
    useEffect(() => {
        fetchPosts();
        setPosts(props.async.posts.filter(photo => photo.traveler_id === userID));
    }, [])
    //set posts from redux store to state
    //filter posts by userID

    console.log('============> USERID is:', userID)

    return (
        <div className='PhotoWrapper'>
            {(posts.length !== 0) ? posts.map((item, index) => {
                console.log(posts);
                return <ProfilePhotos key={item.id} index={index} photo={item} />
            }) : <Loader
                    type="MutatingDots"
                    color="#3C5955"
                    height={100}
                    width={100}
                    timeout={3000}
                />}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        async: {
            posts: state.async.posts,
            error: state.async.error,
            currentUserID: state.async.currentUserID,
            isLoading: state.async.isLoading,
            user: state.async.user,
            newPost: state.async.newPost
        }
    }
}
export default connect(
    mapStateToProps,
    //place imported actions below
    { fetchPosts }
)(ProfilePhotoWrapper);