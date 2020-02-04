import React from 'react';
import '../App.scss'

//import components
// import FollowerCard from '../GithubFollowers/FollowersCard';

const Home = (props) => {
    const ImgStyles = {
        width: '150px',
        objectFit: 'cover',
        borderRadius: '50%',
        objectPosition: 'center',
        margin: '0px'
    }
    return (
        <div className='Wrapper'>
            <div className='Menu'>
                <div className='MenuContentWrapper'>
                    {/* <img style={ImgStyles} alt={props.GithubData.login} src={props.GithubData.avatar_url} /> */}
                    <h2>Menu</h2>
                    <p>Location: </p>
                    <p></p>
                    <p>Bio: </p>
                    <p>Followers: </p>
                    <p>Following: </p>
                </div>
            </div>
            <div className='Followers'>
                <div className='title'>
                    <h2>Followers</h2>
                </div>
                <div className='MenuContentWrapper'>
                    {/* {props.followers.map(item => {
                        return <FollowerCard handleUserChange={props.handleUserChange} key={item.id} name={item.login} profile={item.html_url} img={item.avatar_url} />
                    })} */}
                </div>
            </div>
            <div className='Menu'>
                <div className='UserCardWrapper'>

                </div>
            </div>

        </div>
    );


}

export default Home