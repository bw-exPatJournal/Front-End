import React from 'react';
import '../App.scss'

class Photos extends React.Component {
    componentDidMount() {
        console.log('Photos.js: props:', this.props)
    }
    render() {

        return (
            <div className='PhotoCard'>
                <img alt={this.props.name} src={this.props.img} />
            </div>
        )
    }
}

export default Photos;