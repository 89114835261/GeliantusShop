import React from 'react';
import Axios from 'axios';
import Image from './Image';

class AdBannerContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            image: null
        }
    }

    componentDidMount() {
        Axios.get('/image.json').then(response => this.setState({image: response.data.url}))
    }

    render() {
        return(
            <div>{this.state.image && <Image image={this.state.image} />}</div>
            
        )
    }
}

export default AdBannerContainer;