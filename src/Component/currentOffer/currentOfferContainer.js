import React from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import { setCurrentOffersAC } from './../redux/CurrentOffers-reducer';
import { NavLink } from 'react-router-dom';
import CurrentOffer from './currentOffer';

class CurrentOfferContainer extends React.Component {
    
    componentDidMount() {
        Axios.get('/currentOffer.json').then(response => this.props.setCurrentOffers(response.data))
    }

    render() {
        let nameMap = this.props.currentOffers ? this.props.currentOffers.map(
            item=> <NavLink to='#'>{item.name}</NavLink>
        ) : ' asdas';
        return(
            <CurrentOffer nameMap={nameMap}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        currentOffers: state.CurrentOffersReducer.currentOffers
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setCurrentOffers: (offers) => {
            dispatch(setCurrentOffersAC(offers));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CurrentOfferContainer);