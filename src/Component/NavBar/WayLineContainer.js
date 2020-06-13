import React from 'react';
import { connect } from 'react-redux';
import WayLine from './WayLine';
import { withRouter } from 'react-router-dom';

class WayLineContainer extends React.Component {
    render() {
       
        return(
            <WayLine wayLinks={this.props.wayLinks}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        wayLinks: state.Project.wayLinks
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

let withRouteWayLine = withRouter(WayLineContainer)

export default connect(mapStateToProps, mapDispatchToProps) (withRouteWayLine);