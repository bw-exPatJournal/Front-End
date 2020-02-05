import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { PrivateRoute } from '../../utils/PrivateRoute';
import React, { useState, useEffect } from 'react';
import '../App.scss'
import { connect } from 'react-redux';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
//import icons
import { FaGlobeAmericas, FaUserCircle } from "react-icons/fa";
import { IoMdSettings } from 'react-icons/io';
//import components
import PhotosWrapper from '../Photos/PhotoWrapper'
import StoriesWrapper from '../Stories/StoriesWrapper'
import Loader from 'react-loader-spinner'
//imported actions
import { fetchPosts } from '../../actions/index';

const Home = (props) => {
    const [photos, setPhotos] = useState(true);
    const [stories, setStories] = useState(false);
    console.log(props)
    const ImgStyles = {
        width: '150px',
        objectFit: 'cover',
        borderRadius: '50%',
        objectPosition: 'center',
        margin: '0px'
    }
    return (
        <Router>
            <div className='Wrapper'>
                <div className='Menu'>
                    <div className='MenuContentWrapper'>
                        {/* <img style={ImgStyles} alt={props.GithubData.login} src={props.GithubData.avatar_url} /> */}
                        <h2>Menu</h2>
                        <div><FaGlobeAmericas className='icon' /> Discover</div>
                        <div><FaUserCircle className='icon' /> divrofile </div>
                        <div><IoMdSettings className='icon' /> Settings </div>
                    </div>
                </div>
                <div className='Container'>
                    <div className='toggle_menu'>
                        <div className={(stories) ? 'toggle_button_on' : 'toggle_button_off'}>
                            {(!stories) ?
                                <button onClick={() => { setStories(!stories); setPhotos(false); }}>Stories</button> :
                                <button disabled>Stories</button>
                            }

                        </div>
                        <div className={(photos) ? 'toggle_button_on' : 'toggle_button_off'}>
                            {(!photos) ?

                                <button onClick={() => { setPhotos(!photos); setStories(false); }}>photos</button> :

                                <button disabled>photos</button>
                            }
                        </div>
                    </div>

                    {(photos) ? <PhotosWrapper /> : <StoriesWrapper />}
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
            isLoading: state.async.isLoading
        }
    }
}
export default connect(
    mapStateToProps,
    //place imported actions below
    { fetchPosts }
)(Home);