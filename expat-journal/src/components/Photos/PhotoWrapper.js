import React, { useEffect } from 'react'
import Photos from './Photos';
import Loader from 'react-loader-spinner'
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/index'
const PhotoWrapper = (props) => {
    console.log('PhotoWrapper Props:', props)
    const fetchPosts = props.fetchPosts;
    useEffect(() => {
        fetchPosts();
    }, [])
    return (
        <div className='PhotoWrapper'>
            {(props.async.posts.length !== 0) ? props.async.posts.map((item, index) => {
                console.log(index);
                return <Photos key={item.id} index={index} name={item.title} story={item.story} img={item.photo} traveler_id={item.traveler_id} />
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
)(PhotoWrapper);