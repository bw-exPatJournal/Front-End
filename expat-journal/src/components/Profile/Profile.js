import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/index'
const Profile = (props) => {
    console.log('Profile Props:', props)
    const fetchPosts = props.fetchPosts;
    useEffect(() => {
        fetchPosts();
    }, [])
    return (
        <div className='Profile'>
            <form>
                <label>Name:</label>
                <input type='text' value='' />
                <label>Username:</label>
                <input type='text' value='' />
                <label>Email:</label>
                <input type='email' value='' />

            </form>
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