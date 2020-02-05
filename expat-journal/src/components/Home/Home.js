import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { PrivateRoute } from '../../utils/PrivateRoute';
import React, { useState, useEffect } from 'react';
import '../App.scss'
import { connect } from 'react-redux';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
//import icons
import { FaGlobeAmericas, FaUserCircle } from "react-icons/fa";
import { IoMdSettings, IoMdLogOut } from 'react-icons/io';
//import components
import PhotosWrapper from '../Photos/PhotoWrapper'
import StoriesWrapper from '../Stories/StoriesWrapper'
import Profile from '../Profile/Profile'
import Loader from 'react-loader-spinner'
//imported actions
import { fetchPosts } from '../../actions/index';

const Home = (props) => {
    const [photos, setPhotos] = useState(true);
    const [stories, setStories] = useState(false);
    const [profile, setProfile] = useState(false);
    console.log('Home.js Props:', props)
    const ImgStyles = {
        width: '150px',
        objectFit: 'cover',
        borderRadius: '50%',
        objectPosition: 'center',
        margin: '0px'
    }
    const handleProfile = () => {
        console.log('profile clicked')
        setPhotos(false);
        setStories(false);
        setProfile(true);
        props.history.push('/profile')
    }
    const handleHome = () => {
        console.log('home clicked')
        setPhotos(true);
        setStories(false);
        setProfile(false);
        props.history.push('/home')
    }
    return (
        <Router>
            <div className='Wrapper'>
                <div className='Menu'>
                    <div className='MenuContentWrapper'>
                        {/* <img style={ImgStyles} alt={props.GithubData.login} src={props.GithubData.avatar_url} /> */}
                        <h2>Menu</h2>
                        <Link to="/home">
                            <div onClick={() => handleHome()}><FaGlobeAmericas className='icon' /> Discover</div>
                        </Link>
                        <Link to="/profile">
                            <div onClick={() => handleProfile()}><FaUserCircle className='icon' /> Profile </div>
                        </Link>

                        <Link to='/settings'>
                            <div><IoMdSettings className='icon' /> Settings </div>
                        </Link>
                        <Link to='login'>
                            <div onClick={() => { window.localStorage.clear(); props.history.push('/login') }}><IoMdLogOut className='icon' /> Log Out </div>
                        </Link>
                    </div>
                </div>

                <div className='Container'>
                    {(!profile) ?
                        <div className='toggle_menu'>
                            <div className={(stories) ? 'toggle_button_on' : 'toggle_button_off'}>
                                {(!stories) ?
                                    <button onClick={() => { setStories(!stories); setPhotos(false); props.history.push('/stories') }}>Stories</button> :
                                    <button disabled>Stories</button>
                                }

                            </div>
                            <div className={(photos) ? 'toggle_button_on' : 'toggle_button_off'}>
                                {(!photos) ?

                                    <button onClick={() => { setPhotos(!photos); setStories(false); props.history.push('/home') }}>photos</button> :

                                    <button disabled>photos</button>
                                }
                            </div>
                        </div> : <></>
                    }
                    {(photos) ? <PhotosWrapper /> : <></>}
                    {(stories) ? <StoriesWrapper /> : <></>}
                    {(profile) ? <Profile /> : <></>}

                    <div className='Add_Post_Button'>
                        <span>+</span>
                    </div>

                </div>

                <div className='Menu'>
                    <div className='MenuContentWrapper'>

                    </div>
                </div>
            </div>
        </Router>
    );


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
)(Home);