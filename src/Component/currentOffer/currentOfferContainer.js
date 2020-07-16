import React from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import { setCurrentOffersAC, setCategoryOffersAC } from './../redux/CurrentOffers-reducer';
import { NavLink } from 'react-router-dom';
import CurrentOffer from './currentOffer';
import CategoryCard from './../CategoryCard/CategoryCard'

class CurrentOfferContainer extends React.Component {
    
    componentDidMount() {
        this.catWrapper = React.createRef();
        Axios.get('/currentOffer.json').then(response => 
            {this.props.setCurrentOffers(response.data)
            this.props.setCurrentOffers && Axios.get('/Categories.json').then(response=> this.props.setCategoryOffers(response.data))} 
            );
        this.scrollToImgBoxRight = () => {console.log( this.catWrapper);this.catWrapper.current.scrollTo(this.catWrapper.current.scrollLeft + 300, 0)}
        
    }

    render() {
        let nameMap = this.props.currentOffers ? this.props.currentOffers.map(
            item=> <NavLink key={item.id} to='#'>{item.name}</NavLink>
        ) : ' asdas';
        let catMap = this.props.cateforyOffers ? this.props.cateforyOffers[0].map(
            item => <CategoryCard key={item.id} minPrice={item.minPrice} additionalClass={true} url={item.url} name={item.name} cover={item.cover}/>
        ) : ' ';
        return(
            <CurrentOffer scrollToImgBoxRight={this.scrollToImgBoxRight} catWrapper={this.catWrapper} nameMap={nameMap} catMap={catMap}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        currentOffers: state.CurrentOffersReducer.currentOffers,
        cateforyOffers: state.CurrentOffersReducer.cateforyOffers
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setCurrentOffers: (offers) => {
            dispatch(setCurrentOffersAC(offers))
        },
        setCategoryOffers: (cateforyOffers) => {
            dispatch(setCategoryOffersAC(cateforyOffers))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CurrentOfferContainer);