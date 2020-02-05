import React, { useEffect } from 'react'
import Stories from './Stories';
import Loader from 'react-loader-spinner'
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/index'
const StoriesWrapper = (props) => {
    console.log('StoriesWrapper Props:', props)
    const fetchPosts = props.fetchPosts;
    useEffect(() => {
        fetchPosts();
    }, [fetchPosts])
    return (
        <div className='StoriesWrapper'>
            {(props.async.posts.length !== 0) ? props.async.posts.map(item => {
                return <Stories key={item.id} name={item.title} story={item.story} details={item.details} traveler={item.traveler_id} img={item.photo} />
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
            isLoading: state.async.isLoading,
            user: state.async.user
        }
    }
}
export default connect(
    mapStateToProps,
    //place imported actions below
    { fetchPosts }
)(StoriesWrapper);