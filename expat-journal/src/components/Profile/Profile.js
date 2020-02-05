import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/index'
import PhotoWrapper from '../Photos/PhotoWrapper'

const Profile = (props) => {
    console.log('Profile Props:', props.async.user.img_url)

    return (
        <div className='Profile'>
            <img src={props.async.user.img_url} alt={props.async.user.name}></img>
            <p>{props.async.user.name}</p>
            <div className='Metrics'>
                <p>Total Posts: 14</p>
                <p>1,000 followers</p>
                <p>500 Following</p>
            </div>
            <PhotoWrapper />
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
)(Profile);