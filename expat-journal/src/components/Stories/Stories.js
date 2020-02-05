import React from 'react';
import '../App.scss'

class Stories extends React.Component {
    componentDidMount() {
        console.log('Stories.js: props:', this.props)
    }
    render() {

        return (
            <div className='StoryCard'>
                <h2>{this.props.name}</h2>
                <p>{this.props.story}</p>
                <p>{this.props.details}</p>
            </div>
        )
    }
}

export default Stories;