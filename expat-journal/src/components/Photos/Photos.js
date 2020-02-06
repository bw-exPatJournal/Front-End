import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth'
import { FaEllipsisH, FaEdit, FaHeart, FaDownload, FaExclamation } from 'react-icons/fa';
import EditPostModal from '../Modals/EditPostModal';
import '../App.scss'
import { deletePost, fetchPosts } from '../../actions'
import { connect } from 'react-redux'

const Photos = (props) => {
    const [user, setuser] = useState();
    useEffect(() => {
        axiosWithAuth()
            .get(`/api/users/${props.photo.traveler_id}`)
            .then(res => console.log('User ID call response', res))
            .catch(err => console.log(err))
    }, [])
    //fetches post after deleting 
    const deletePost = async () => {
        console.log('deleting...', props.photo.title)
        await axiosWithAuth()
            .delete(`/api/posts/${props.photo.id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))

        props.fetchPosts()
    }
    console.log('Photos.js: props:', props)
    const [editModal, setEditModal] = useState(false);
    const [dropdown, setDropDown] = useState(false);
    console.log('Edit Modal State:', editModal);
    console.log('Drop Down State:', dropdown);

    //toggle dropdown
    const toggleDropdown = () => {
        console.log('Toggling Dropdown On');
        if (!dropdown) {
            setDropDown(true);
            let selectedDropdown = document.querySelectorAll('.dropdown');
            selectedDropdown[props.index].classList.add('is-active');
            let Photo = document.querySelectorAll('.Photo');
            Photo[props.index].classList.add('opacity-75');
        } else {
            let selectedDropdown = document.querySelectorAll('.dropdown');
            selectedDropdown[props.index].classList.remove('is-active')
            setDropDown(false);
            let Photo = document.querySelectorAll('.Photo');
            Photo[props.index].classList.remove('opacity-75');
        }
    }//end toggleEdit

    return (
        <div className='PhotoCard'>
            <div className='PhotoInfo'>
                <div class="dropdown">
                    <div class="dropdown-trigger">
                        <button onClick={() => toggleDropdown()} class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                            <span><FaEllipsisH className='icon' /></span>
                        </button>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu" role="menu">
                        <div class="dropdown-content">
                            <a onClick={() => setEditModal(!editModal)} class="dropdown-item">
                                <FaEdit /> Edit Moment
                            </a>
                            <a class="dropdown-item">
                                <FaHeart /> Favorite
                            </a>
                            <a href="#" class="dropdown-item">
                                <FaDownload /> Download
                            </a>
                            <a onClick={() => deletePost()} class="dropdown-item is-active">
                                <FaExclamation /> Delete
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <p>{props.photo.title}</p>
                </div>
            </div>
            <img className='Photo' alt={props.photo.title} src={props.photo.photo} />
            {(editModal) ? <EditPostModal editModal={editModal} toggleDropdown={toggleDropdown} setEditModal={setEditModal} photo={props.photo} /> : <></>}
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
    { deletePost, fetchPosts }
)(Photos);